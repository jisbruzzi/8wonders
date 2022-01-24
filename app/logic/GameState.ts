import invariant from "tiny-invariant"
import { WonderId, wonders } from "./Wonders"

type Player = 1|2
export interface GameState{
    randomSeed:number
    wonders:Record<Player,WonderId[]>,
    wondersToChoseFrom:WonderId[]|null,
    playerChoosingWonder:Player|null
}
export type GameAction={
    type:'start',
    seed:number
}|{
    type:'chooseWonder',
    wonder:WonderId 
}
function sample<T>(array: readonly T[],quantity:number, randomSeed:number):T[]{
    const copy=[...array]
    const ret:T[]=[]
    new Array(quantity).fill(0).forEach((_,index)=>{
        const randomIndex=(randomSeed*index)%copy.length
        ret.push(copy[randomIndex])
        copy.splice(randomIndex,1);
    })
    return ret;
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
export function reduce(state:GameState,action:GameAction):GameState{
    
    switch(action.type){
        case 'start':{
            return {
                randomSeed:action.seed,
                wonders:{1:[],2:[]},
                wondersToChoseFrom: sample(wonderIds,4,action.seed),
                playerChoosingWonder:1
            }
        }
        case 'chooseWonder': {
            console.log("===========")
            console.log("===========")
            console.log(state)

            const availableWonderIDs=wonderIds.filter(wid => ![...state.wonders[1],...state.wonders[2], action.wonder].includes(wid))
            invariant(state.playerChoosingWonder !== null)
            const me = state.playerChoosingWonder;
            const other = otherPlayer(state.playerChoosingWonder)
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
            return {
                randomSeed:state.randomSeed,
                playerChoosingWonder:other,
                wonders,
                wondersToChoseFrom:(
                    state.wondersToChoseFrom?.length===1 || 
                    state.wondersToChoseFrom===null
                )?
                    sample(availableWonderIDs,4,state.randomSeed)
                :
                    state.wondersToChoseFrom?.filter(wid=>wid!==action.wonder)
            }
        }
    }
}