import { AgeOne } from "./AgeOne";
import { AgeTwo } from "./AgeTwo";
import { AgeThree } from "./AgeThree";
import { Guilds } from "./Guilds";
import { Card } from "./CardType";
import { WonderName, wonders } from "./Wonders";
import { CardName } from "./CardNameType";
export type { CardName, assertIsCardName } from "./CardNameType";

export const ageOneDeck = AgeOne as readonly Card[];
export const ageTwoDeck = AgeTwo as readonly Card[];
export const ageThreeDeck = AgeThree as readonly Card[];
export const guildsDeck = Guilds as readonly Card[];

const allCards = [
    ...ageOneDeck,
    ...ageTwoDeck,
    ...ageThreeDeck,
    ...guildsDeck,
] as readonly Card[]

const allCardsOrWonders = [
    ...ageOneDeck,
    ...ageTwoDeck,
    ...ageThreeDeck,
    ...guildsDeck,
    ...wonders,
] as readonly Card[]

const cardsByName=Object.fromEntries(allCardsOrWonders.map(card => [card.name,card]))
export function getCardOrWonder(name:CardName|WonderName){
    return cardsByName[name]
}