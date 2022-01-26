import { ComplexEffect, Effect, Science, UnlockSymbol } from "./Cards/CardType";
import { Resource } from "./Resource";

export type SingleEffect = 
| {produceOneOf:readonly Resource[]}
| {getCoin:number}
| {victoryPoints:number}
| {shields:number}
| {tradeOne:readonly Resource[]}
| {science:Science}
| {complex:ComplexEffect}
| {symbol:UnlockSymbol}

function extractResource(effect:Effect,ret:SingleEffect[],resource:Resource){
    if(effect[resource]) {
        new Array(effect[resource])
        .fill(0)
        .forEach(()=>ret.push({produceOneOf:[resource]}))
    }
}
export function extractEffects(effect:Effect):SingleEffect[]{
    const ret:SingleEffect[]=[]
    const extractRes=(resource:Resource)=>extractResource(effect,ret,resource)
    
    extractRes('clay')
    extractRes('glass')
    extractRes('papyrus')
    extractRes('stone')
    extractRes('wood')

    if(effect.coin) ret.push({getCoin:effect.coin})
    if(effect.complex) ret.push({complex:effect.complex})
    if(effect.produceOneOf) ret.push({produceOneOf:effect.produceOneOf})

    if(effect.science) ret.push({science:effect.science})
    if(effect.shields) ret.push({shields:effect.shields})
    if(effect.symbol) ret.push({symbol:effect.symbol})
    if(effect.tradeOne) ret.push({tradeOne:effect.tradeOne})
    if(effect.victoryPoints) ret.push({victoryPoints:effect.victoryPoints})

    return ret;
}