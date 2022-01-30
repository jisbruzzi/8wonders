import { useParams } from "remix";
import invariant from "tiny-invariant";
import { wonders } from "~/logic/Cards/Wonders";

export default function WonderExplanation(){
    const {wonderId} = useParams();
    const wonder = wonders.find(w=>w.id===wonderId)
    invariant(wonder)
    const { name, image, cost, effect } = wonder
    return <>
        <h1 className="text-5xl text-center p-4">{name}</h1>
        <img src={image} />
        <h2 className="text-xl">Cost:</h2>
        <ul>
            {Object.entries(cost).map(([k,v])=><li>{k}:{v}</li>)}
        </ul>
        <h2 className="text-xl">Effect:</h2>
        <ul>
            {Object.entries(effect).map(([k,v])=><li>{k}:{v}</li>)}
        </ul>

    </>
}