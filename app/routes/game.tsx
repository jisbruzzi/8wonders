import ChosenWondersList from "~/components/ChosenWondersList";
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
        <ChosenWondersList/>
    </div>
}