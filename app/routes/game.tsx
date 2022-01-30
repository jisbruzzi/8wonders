import PlayersStatus from "~/components/PlayersStatus";
import GamePlay from "~/components/GamePlay";
import WonderSelection from "~/components/WonderSelection";
import { useGameState } from "~/hooks";

export default function Game(){
    const { wondersToChoseFrom } = useGameState();
    return <div className="p-4">
        {
            (wondersToChoseFrom===null)?
            <GamePlay/>
            :
            <WonderSelection/>
        }
        <PlayersStatus/>
    </div>
}