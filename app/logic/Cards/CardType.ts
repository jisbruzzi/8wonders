import { Resource } from "../Resource"
import { CardName } from "./CardNameType"

type Science='A'|'O'|'I'|'smasher'|'pencil'|'Q'
type Cost=Partial<Record<Resource|'coin',number>>
type Color='red'|'blue'|'brown'|'gray'|'green'|'yellow'|'purple'
type UnlockSymbol='jar'|'barrel'|'mask'|'temple'|'sun'|'water'|'column'|'moon'|'target'|'soldier'|'horse'|'sword'|'tower'|'music'|'cog'|'book'|'lamp'

type Effect=Partial<
    Record<Resource|'coin',number> & 
    Record<'victoryPoints'|'shields',number> & {
        produceOneOf:readonly Resource[],
        tradeOne:readonly Resource[],
        science:Science,
        complex:{
            selector:(Color|'3coins'|'wonders')[],
            over:'me'|'playerWithMost',
            coinsNow:number,
            victoryPointsLater:number
        },
        symbol:UnlockSymbol
    }
>
export type Card = {
    name:CardName,
    type:Color,
    cost:Cost,
    effect:Effect,
    unlockedBy?:UnlockSymbol
}