import { ActionFunction, LoaderFunction, redirect } from "remix"
import { assertIsWonderId, GameAction, GameState, reduce } from "~/logic/GameState"
import invariant from 'tiny-invariant';

function getState(request:Request):GameState{
    const state = new URL(request.url).searchParams.get("state");
    invariant(state !== null, "State must exist")
    return JSON.parse( state ) as GameState
}

function getOrFail(key:string,data:FormData):string{
    const ret = data.get(key)
    invariant(ret,`No value in the form for ${key} `)
    invariant(typeof ret === 'string',"value for ${key} is not a string, it is: "+ret.toString())
    return ret;
}

function getAction(actionType:string,data:FormData):GameAction{
    switch(actionType){
        case 'start':
            return {
                type:'start',
                seed:parseInt(getOrFail("seed",data))
            }
        case 'chooseWonder':
            const wonder =getOrFail("wonder",data)
            assertIsWonderId(wonder);
            return {
                type:'chooseWonder',
                wonder
            }
        case 'build':
            return {
                type:'build',
                card:getOrFail("card",data)
            }
        case 'discard':
            return {
                type:'discard',
                card:getOrFail("card",data)
            }
        default:
            throw new Error("Unknown game action");
    }
}

export const action:ActionFunction = async ({request,params}) => {
    const body = await request.formData()
    const actionType = params["*"];
    invariant(typeof actionType === 'string','Action Type should be a string')
    const state = actionType==='start'?{} as any:getState(request)
    const newState = reduce(state,getAction(actionType,body))
    return redirect('/game?state='+JSON.stringify(newState))
}

export const loader:LoaderFunction = ()=>{
    console.log("This should not render")
    return <div>
        You dont see this
    </div>
}