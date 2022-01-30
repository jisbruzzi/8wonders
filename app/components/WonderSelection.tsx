import { useGameState } from "~/hooks";
import { wonders } from "~/logic/Cards/Wonders";
import WonderCard from "./WonderCard";

export default function WonderSelection(){
    const { wondersToChoseFrom } = useGameState();
    return <>
    <h1 className="text-4xl text-center">
            Selecting the wonders
        </h1>
        <div className="flex flex-row flex-wrap justify-center">
            {wondersToChoseFrom?.map(wn => wonders.find(w=>w.name===wn)).map(wonder => {
                return wonder && <WonderCard wonder={wonder} key={wonder.name}/>
            })}
        </div>
    </>
}
