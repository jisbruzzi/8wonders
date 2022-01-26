import { useSearchParams } from "remix";
import invariant from "tiny-invariant";
import { GameState } from "./logic/GameState";

export function useGameStateText():string {
    let [searchParams] = useSearchParams();
    const s = searchParams.get("state")
    invariant(s!==null,"The state must be included in the url!")
    return s;
}
export function useGameState():GameState{
    const s = useGameStateText();
    return JSON.parse(s);
}
export function useGameStateSearchUrl(url:string):string{
    const s = useGameStateText();
    return `${url}?state=${s}`
}
