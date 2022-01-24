import WonderImage from "~/components/WonderImage";
import { wonders } from "~/logic/Wonders";

export default function Wonders(){
    return <div>
        <h1 className="text-6xl text-center p-4">Wonder cards</h1>
        <div className="flex flex-row flex-wrap justify-center">
        {wonders.map(w=><div className="p-4"><WonderImage wonder={w}/></div>)}
        </div>
    </div>
}