import { Wonder } from "~/logic/Cards/Wonders";

export default function WonderImage({wonder}:{wonder:Wonder}){
    return <div className="hover:underline decoration-slate-600">
        <a href={`/wonders/${wonder.id}`} className="cursor-pointer">
        <h2 className="text-xl text-center pb-1">{wonder.name}</h2>
        <img src={wonder.image} className="w-60 md:w-96"/>
        </a>
    </div>
}