interface SubmitProps{
    player:1|2,
    text:string
}

export default function Submit({player,text}:SubmitProps){
    return <input type="submit" value={text} className={
        `p-2 m-2 bg-red-200 rounded-sm ${player===1?"hover:bg-blue-200":"hover:bg-green-200"} transition-colors`
    }/>
}