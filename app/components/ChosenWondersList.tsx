import { useGameState } from "~/hooks";
import { wonders } from "~/logic/Wonders";

function ChosenWondersListForPlayer({player}:{player:1|2}){
    const {wonders:selectedWonders} = useGameState();
    return <div className={`w-1/2 m-4 p-2 rounded-sm ${player===1?'bg-blue-200':'bg-green-200'}`}>
        <h2 className={`${player===1?'text-left':'text-right'} text-xl px-1`}>
            Player {player} wonders
        </h2>

        <div className={`flex ${player===1?'flex-row':'flex-row-reverse'} flex-wrap`}>
            {selectedWonders[player]
                .map(wid=><img 
                    src={wonders.find(w=>w.id===wid)?.image}
                    className="w-32 m-1"
            />)}
        </div>
    </div>
}

export default function ChosenWondersList(){
    return <div className="flex flex-row justify-between">
        <ChosenWondersListForPlayer player={1}/>
        <ChosenWondersListForPlayer player={2}/>
    </div>
}