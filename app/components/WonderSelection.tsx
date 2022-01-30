import { useGameState } from "~/hooks";
import { wonders } from "~/logic/Wonders";
import WonderCard from "./WonderCard";

export default function WonderSelection(){
    const { wondersToChoseFrom } = useGameState();
    return <>
    <h1 className="text-4xl text-center">
            Selecting the wonders
        </h1>
        <div className="flex flex-row flex-wrap justify-center">
            {wondersToChoseFrom?.map(wonderId => wonders.find(w=>w.id===wonderId)).map(wonder => {
                return wonder && <WonderCard wonder={wonder} key={wonder.id}/>
            })}
        </div>
    </>
}
