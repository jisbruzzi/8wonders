import { ActionFunction, Form, LoaderFunction, redirect, useSearchParams } from "remix"
import invariant from "tiny-invariant";
import Submit from "~/components/Submit";
import WonderImage from "~/components/WonderImage";
import { GameState } from "~/logic/GameState"
import { Wonder, wonders } from "~/logic/Wonders";

function useGameStateText():string {
    let [searchParams] = useSearchParams();
    const s = searchParams.get("state")
    invariant(s!==null,"The state must be included in the url!")
    return s;
}
function useGameState():GameState{
    const s = useGameStateText();
    return JSON.parse(s);
}
function useGameStateSearchUrl(url:string):string{
    const s = useGameStateText();
    return `${url}?state=${s}`
}

function WonderCard({wonder}:{wonder:Wonder}){
    const chooseWonderLink = useGameStateSearchUrl("/chooseWonder")

    const { playerChoosingWonder } = useGameState();
    invariant(playerChoosingWonder!==null)

    return <div className="p-4">
        <WonderImage wonder={wonder}/>
        <Form className="flex flex-row justify-center" action={chooseWonderLink} method="post">
            <input type="hidden" value={wonder.id} name="wonder"/>
            <Submit player={playerChoosingWonder} text={"Choose"}/>
        </Form>
    </div>
}

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

function ChosenWondersList(){
    return <div className="flex flex-row justify-between">
        <ChosenWondersListForPlayer player={1}/>
        <ChosenWondersListForPlayer player={2}/>
    </div>
}

export default function Game(){
    const { wondersToChoseFrom } = useGameState();
    return <div className="p-4">
        <h1 className="text-4xl text-center">
            Selecting the wonders
        </h1>
        <div className="flex flex-row flex-wrap justify-center">
            {wondersToChoseFrom?.map(wonderId => wonders.find(w=>w.id===wonderId)).map(wonder => {
                return wonder && <WonderCard wonder={wonder} key={wonder.id}/>
            })}
        </div>
        <ChosenWondersList/>
    </div>
}