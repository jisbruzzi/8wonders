import { PropsWithChildren, ReactNode } from "react";
import { useGameState } from "~/hooks"
export default function Submit({children}:PropsWithChildren<{}>){
    const { player } = useGameState();
    return <button type="submit" className={
        `p-2 m-2 bg-red-200 rounded-sm ${player===1?"hover:bg-blue-200":"hover:bg-green-200"} transition-colors`
    }>
        {children}
    </button>
}