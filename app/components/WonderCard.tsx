import { Form } from "remix"
import { useGameStateSearchUrl } from "~/hooks"
import { Wonder } from "~/logic/Cards/Wonders"
import Submit from "./Submit"
import WonderImage from "./WonderImage"

export default function WonderCard({wonder}:{wonder:Wonder}){
    const chooseWonderLink = useGameStateSearchUrl("/chooseWonder")

    return <div className="p-4">
        <WonderImage wonder={wonder}/>
        <Form className="flex flex-row justify-center" action={chooseWonderLink} method="post">
            <input type="hidden" value={wonder.name} name="wonder"/>
            <Submit>Choose</Submit>
        </Form>
    </div>
}