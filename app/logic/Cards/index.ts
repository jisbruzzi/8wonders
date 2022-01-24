import { AgeOne } from "./AgeOne";
import { AgeTwo } from "./AgeTwo";
import { AgeThree } from "./AgeThree";
import { Guilds } from "./Guilds";
import { Card } from "./CardType";
export type { CardName, assertIsCardName } from "./CardNameType";

export const AgeOneDeck = AgeOne as readonly Card[];
export const AgeTwoDeck = AgeTwo as readonly Card[];
export const AgeThreeDeck = AgeThree as readonly Card[];
export const GuildsDeck = Guilds as readonly Card[];