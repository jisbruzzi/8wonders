import { AgeOne } from "./AgeOne";
import { AgeThree } from "./AgeThree";
import { AgeTwo } from "./AgeTwo";
import { Guilds } from "./Guilds";

type NamesOne = (typeof AgeOne[number])["name"];
type NamesTwo = (typeof AgeTwo[number])["name"];
type NamesThree = (typeof AgeThree[number])["name"];
type NamesGuild = (typeof Guilds[number])["name"];

export type CardName = NamesOne | NamesTwo | NamesThree | NamesGuild

export function assertIsCardName(str:string):asserts str is CardName{
    if(![
        ...AgeOne.map(a => a.name),
        ...AgeTwo.map(a => a.name),
        ...AgeThree.map(a => a.name),
        ...Guilds.map(a => a.name),
    ].includes(str)){
        throw new Error("Not a card name!");
    }
}