import invariant from "tiny-invariant"
import { ageOneDeck, ageThreeDeck, ageTwoDeck, CardName, guildsDeck } from "./Cards"
import { intialCanBePlayedStates, layouts } from "./layouts"
import { WonderId, wonders } from "./Wonders"

type Player = 1|2
type Age=1|2|3
export interface GameState{
    randomSeed:number
    wonders:Record<Player,WonderId[]>,
    wondersToChoseFrom:WonderId[]|null,
    player:Player,
    age:Age|null,
    decks:Record<Age,(CardName|null)[]>,
    canBePlayed:boolean[],
    playersState:Record<Player,{buildings:CardName[],coins:number}>
}
export type GameAction={
    type:'start',
    seed:number
}|{
    type:'chooseWonder',
    wonder:WonderId 
}|{
    type:'build',
    card:CardName
}|{
    type:'discard',
    card:CardName
}

function randomizers<T>(randomSeed:number){
    function sample<T>(array: readonly T[],quantity:number):T[]{
        const copy=[...array]
        const ret:T[]=[]
        new Array(quantity).fill(0).forEach((_,index)=>{
            const randomIndex=(randomSeed*index)%copy.length
            ret.push(copy[randomIndex])
            copy.splice(randomIndex,1);
        })
        return ret;
    }
    
    function shuffle<T>(a:readonly T[],b: readonly T[]):T[]{
        return sample([...a,...b],a.length+b.length)
    }
    
    function sampleRemove<T>(array:readonly T[],removeQuantity:number){
        return sample(array,array.length-removeQuantity)
    }

    return {
        sample,shuffle,sampleRemove
    }
}


function otherPlayer(p:Player){
    if(p===1){
        return 2;
    }else{
        return 1;
    }
}
const wonderIds = wonders.map(w=>w.id)
export function assertIsWonderId(str:string):asserts str is WonderId{
    if(!(wonderIds as string[]).includes(str)){
        throw new Error("noooo")
    }
}

function getNextAge(age:Age){
    switch(age){
        case 1: return 2;
        case 2: return 3;
        case 3: return null
    }
}

function stateAfterPickingUpCard(state:GameState,card:CardName):GameState{
    invariant(state.age!==null,"Age must not be null")
    const currentDeck=state.decks[state.age]
    const newDeckForThisAge=currentDeck.map(c=>c===card?null:c);
    const age=newDeckForThisAge.every(card=>card===null)?getNextAge(state.age):state.age
    const decks={
        ...state.decks,
        [state.age]:newDeckForThisAge
    }
    const newCanBePlayed=layouts[state.age](
        state.decks[state.age].map(c=>c!==null),
        currentDeck.indexOf(card),
        state.canBePlayed
    )

    return {
        ...state,
        decks,
        age,
        player:otherPlayer(state.player),
        canBePlayed:(age===null)?[]:( (age===state.age)?newCanBePlayed:intialCanBePlayedStates[age] )
    }
}
export function reduce(state:GameState,action:GameAction):GameState{
    
    switch(action.type){
        case 'start':{
            const {sample,shuffle,sampleRemove} = randomizers(action.seed);
            return {
                randomSeed:action.seed,
                wonders:{1:[],2:[]},
                wondersToChoseFrom: sample(wonderIds,4),
                player:1,
                age:null,
                decks:{
                    1:sampleRemove(ageOneDeck,3).map(c=>c.name),
                    2:sampleRemove(ageTwoDeck,3).map(c=>c.name),
                    3:shuffle(sampleRemove(ageThreeDeck,3),sample(guildsDeck,3)).map(c=>c.name)
                },
                canBePlayed:[],
                playersState:{
                    1:{buildings:[],coins:0},
                    2:{buildings:[],coins:0},
                }
            }
        }
        case 'chooseWonder': {
            const {sample} = randomizers(state.randomSeed);
            const availableWonderIDs=wonderIds.filter(wid => ![...state.wonders[1],...state.wonders[2], action.wonder].includes(wid))
            invariant(state.player !== null)
            const me = state.player;
            const other = otherPlayer(state.player)
            const wonders = (()=>{
                const w=action.wonder
                const ws=state.wonders
                if(me===1 && other===2){
                    return {
                        [me]:[...ws[me],w],
                        [other]:ws[other]
                    }
                }
                if(me===2 && other===1){
                    return {
                        [me]:[...ws[me],w],
                        [other]:ws[other]
                    }
                }
                throw new Error("Impossible!")
            })()
            const endOfChosingWonders=wonders[1].length === 4 && wonders[2].length===4
            const wondersToChoseFrom=(()=>{
                if(endOfChosingWonders){
                    return null;
                }
                if(state.wondersToChoseFrom?.length===1 || state.wondersToChoseFrom===null){
                    return sample(availableWonderIDs,4)
                }
                return state.wondersToChoseFrom?.filter(wid=>wid!==action.wonder);
            })()
            return {
                randomSeed:state.randomSeed,
                player:other,
                wonders,
                wondersToChoseFrom,
                age:endOfChosingWonders?1:null,
                decks:state.decks,
                canBePlayed:intialCanBePlayedStates[1],
                playersState:{
                    1:{buildings:[],coins:0},
                    2:{buildings:[],coins:0},
                }
            }
        }
        case 'build':{
            const playerState={
                coins:state.playersState[state.player].coins,
                buildings:[...state.playersState[state.player].buildings,action.card]
            }
            const playersState={
                ...state.playersState,
                [state.player]:playerState
            }
            return {
                ...stateAfterPickingUpCard(state,action.card),
                playersState
            };
        }
        case 'discard':{
            const playerState={
                coins:state.playersState[state.player].coins+3,
                buildings:state.playersState[state.player].buildings
            }
            const playersState={
                ...state.playersState,
                [state.player]:playerState
            }
            return {
                ...stateAfterPickingUpCard(state,action.card),
                playersState
            };
        }
    }
}