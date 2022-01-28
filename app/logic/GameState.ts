import invariant from "tiny-invariant"
import { ageOneDeck, ageThreeDeck, ageTwoDeck, allCards, CardName, guildsDeck } from "./Cards"
import { Card } from "./Cards/CardType"
import { intialCanBePlayedStates, layouts } from "./layouts"
import { Resource, resources as resourcesList } from "./Resource"
import { extractEffects, ProductionEffect } from "./SingleEffect"
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

function cardsBuiltByPlayer(state:GameState,player:Player):Card[]{
    return allCards.filter(card => state.playersState[player].buildings.includes(card.name));
}

function getProductionEffects(cards:Card[]):ProductionEffect[] {
    return cards
        .flatMap(card=>extractEffects(card.effect))
        .flatMap(singleEffect => ("produceOneOf" in singleEffect)?[singleEffect]:[])
}

function getMinimalCostOfBuilding(resourcesNeeded:Partial<Record<Resource,number>>,tradeCosts:Record<Resource,number>, productions:ProductionEffect[]):number{
    console.log({resourcesNeeded,productions})
    const someResourceIsNeded = resourcesList.some(resName => resourcesNeeded?.[resName])
    if(!someResourceIsNeded){
        console.log("No resources needed!")
        return 0;
    }
    if(productions.length===0){
        console.log("No more productions!")
        return resourcesList.map(resource => (resourcesNeeded?.[resource] ?? 0)*tradeCosts[resource]).reduce(( a, b ) => a + b, 0);
    }
    const [production,...otherProductions] = productions
    function resourcesWithOneLessOf(resource:Resource){
        const quantity = resourcesNeeded[resource];
        if(quantity){
            return {
                ...resourcesNeeded,
                [resource]:Math.max(quantity-1,0)
            }
        }else{
            return resourcesNeeded
        }
    }
    const producedResources = production.produceOneOf;
    return Math.min(...producedResources.map(r=>getMinimalCostOfBuilding(resourcesWithOneLessOf(r),tradeCosts,otherProductions)));

}
function getTradeCostsForPlayer(state:GameState,player:Player):Record<Resource,number>{
    const initialTradeCosts:Record<Resource,number> = {
        clay:2,
        glass:2,
        papyrus:2,
        stone:2,
        wood:2
    }
    const baseResourceCards = cardsBuiltByPlayer(state,otherPlayer(player)).filter(c=>c.type==='gray' || c.type==='brown')
    const producedResources = getProductionEffects(baseResourceCards).flatMap(effect => effect.produceOneOf)
    return producedResources.reduce((tradeCosts,resource)=>({
        ...tradeCosts,
        [resource]:tradeCosts[resource]+1
    }),initialTradeCosts)
}
export function canBuild(state:GameState,player:Player,cardName:CardName):false|{additionalCoins:number}{
    const card = allCards.find(c=>c.name===cardName)
    invariant(card,"Card should be a card")
    const coinCost = card.cost?.coin ?? 0
    const currentCoins = state.playersState[player].coins;
    const productions = getProductionEffects(cardsBuiltByPlayer(state,player));
    const tradeCosts = getTradeCostsForPlayer(state,player)
    const minimalCost = getMinimalCostOfBuilding(card.cost,tradeCosts,productions)
    if(coinCost + minimalCost > currentCoins) return false;
    return {additionalCoins:minimalCost}
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