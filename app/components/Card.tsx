import { Form } from "remix";
import invariant from "tiny-invariant";
import { useGameStateSearchUrl, useGameState } from "~/hooks";
import { ageOneDeck, ageThreeDeck, ageTwoDeck, guildsDeck } from "~/logic/Cards";
import { canBuild } from "~/logic/GameState";
import Submit from "./Submit";

export default function Card({name, canBePlayed}:{name:string, canBePlayed:boolean}){
    const card = [...ageOneDeck, ...ageTwoDeck, ...ageThreeDeck, ...guildsDeck].find(c=>c.name===name)
    invariant(card,"A card with this name mus exist")
    const { type } = card;
    const selectCardLink = useGameStateSearchUrl("/build")
    const discardCardLink = useGameStateSearchUrl("/discard")
    const state = useGameState();
    const canBeBuilt = canBuild(state,state.player,name)
    return <div className="relative">
        <a href={`/cards/${name}`} className="hover:underline">
            <div className={`${{
                'blue':'bg-blue-200',
                'brown':'bg-amber-600',
                'yellow':'bg-yellow-300',
                'gray':'bg-gray-400',
                'green':'bg-green-300',
                'purple':'bg-purple-400',
                'red':'bg-red-400'
            }[type]} text-xs text-center h-24 p-1 rounded-sm ${
                canBePlayed?'shadow-2xl shadow-blue-500':'shadow-md shadow-gray-400'
            }`}>
                <div className="my-2 font-bold">
                    {name}
                </div>
            </div>
        </a>
        {canBePlayed && <div className="absolute flex flex-row pt-4 justify-center">
            <Form action={selectCardLink} method="post">
                <Submit disabled={!canBeBuilt.canBuild}><span className="text-xs">
                    Build ({canBeBuilt.totalCoins})</span></Submit>
                <input type="hidden" value={name} name="card"/>
            </Form>
            <Form action={discardCardLink} method="post">
                <Submit><span className="text-xs">Discard</span></Submit>
                <input type="hidden" value={name} name="card"/>
            </Form>
        </div>}
    </div>
}