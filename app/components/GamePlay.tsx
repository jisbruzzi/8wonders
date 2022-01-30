import invariant from "tiny-invariant";
import { useGameState } from "~/hooks";
import { intialFaceUpStates } from "~/logic/layouts";
import Card from "./Card";
import DeckLayout from "./DeckLayout";

function FaceDownCard(){
    return <div className="shadow-md shadow-gray-400 h-24 bg-pink-600 p-1 "/>
}

export default function GamePlay(){
    const { age, decks, canBePlayed } = useGameState();
    invariant(age!==null,"age should not be null")
    const deck = decks[age];
    return <div>
        <h1 className="text-4xl text-center">Choose a card</h1>
        <div className="p-2 pb-16">
            <DeckLayout age={age}>
                {deck.map((cardName, index)=>(
                    cardName && 
                    (
                        (canBePlayed[index] || intialFaceUpStates[age][index])?
                        <Card name={cardName} canBePlayed={canBePlayed[index]}/>
                        :
                        <FaceDownCard/>
                    )
                ))}
            </DeckLayout>
        </div>
    </div>
}