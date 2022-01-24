import { BasicResource, ElaborateResource, Resource } from "./Resource";

type Science='A'|'O'|'I'|'smasher'|'pencil'|'Q'
type Cost=Partial<Record<Resource|'coin',number>>
type Color='red'|'blue'|'brown'|'gray'|'green'|'yellow'|'purple'
type Effect=Partial<
    Record<Resource|'coin',number> & 
    Record<'victoryPoints'|'shields',number> & {
        produceOneOf:Resource[],
        tradeOne:Resource[],
        science:Science,
        complex:{
            selector:(Color|'3coins'|'wonders')[],
            over:'me'|'playerWithMost',
            coinsNow:number,
            victoryPointsLater:number
        }
    }
>
type Card = {
    name:string,
    id:string
    cost:Cost,
    type:Color,
    unlocks?:CardId
    effect:Effect
}