import { Form } from "remix";
import { useGameState } from "~/hooks";
import { canBuild as getCanBuild, getWonderMaterialCards } from "~/logic/GameState";
import { WonderName, wonders } from "~/logic/Cards/Wonders";
import Submit from "./Submit";
import React, { useContext } from "react";

const PlayerContext = React.createContext<1|2>(1);

function PlayerStatus(){
    const {wonders:selectedWonders, playersState} = useGameState();
    const player = useContext(PlayerContext)
    const playerState = playersState[player]
    return <div className={`w-1/2 m-4 p-2 rounded-sm ${player===1?'bg-blue-200':'bg-green-200'}`}>
        <h2 className={`${player===1?'text-left':'text-right'} text-xl px-1`}>
            Player {player}
        </h2>
        Coins:{playerState.coins}
        <div className="flex flex-col">
            {selectedWonders[player]
                .map(wn=><WonderDisplay wonderName={wn}/>)}
        </div>
        <div>
            Buildings:
            <ul>
                {playerState.buildings.map(b=><li>{b}</li>)}
            </ul>
        </div>
        
    </div>
}
function WonderDisplay({wonderName}:{wonderName: WonderName}): JSX.Element {
    const {age} = useGameState();
    return <div className="flex flex-row">
        <img
            src={wonders.find(w => w.name === wonderName)?.image}
            className="w-32 m-1" />
        {age !== null && <WonderControl wonderName={wonderName}/>}
    </div>;
}

function WonderControl({wonderName}:{wonderName:WonderName}) {
    const state = useGameState();
    const materialCards = getWonderMaterialCards(state);
    const player = useContext(PlayerContext)
    const canBuild = getCanBuild(state,player,wonderName)
    return <Form className="flex flex-row m-1 items-center">
        <select>
            {materialCards.map(cardName => <option value={cardName}>{cardName}</option>)}
        </select>
        <Submit disabled={!canBuild.canBuild || player !== state.player}>Build ({canBuild.totalCoins})</Submit>
    </Form>
}

export default function PlayersStatus(){
    return <div className="flex flex-row justify-between">
        <PlayerContext.Provider value={1}>
            <PlayerStatus/>
        </PlayerContext.Provider>
        <PlayerContext.Provider value={2}>
            <PlayerStatus/>
        </PlayerContext.Provider>
    </div>
}