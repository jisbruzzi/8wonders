import { PropsWithChildren, ReactNode } from "react";
import { useGameState } from "~/hooks"
export default function Submit({children, disabled = false}:PropsWithChildren<{disabled?:boolean}>){
    const { player } = useGameState();
    return <button type="submit" disabled={disabled} className={
        `p-2 m-2 ${disabled?'bg-gray-300':`bg-red-200 ${player===1?"hover:bg-blue-200":"hover:bg-green-200"}`} rounded-sm transition-colors`
    }>
        {children}
    </button>
}