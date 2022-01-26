import React, { ReactNode } from "react";
import { ActionFunction, Form, LoaderFunction, redirect, useSearchParams } from "remix"
import invariant from "tiny-invariant";
import Submit from "~/components/Submit";
import WonderImage from "~/components/WonderImage";
import { useGameState, useGameStateSearchUrl } from "~/hooks";
import { ageOneDeck, ageThreeDeck, ageTwoDeck, guildsDeck } from "~/logic/Cards";
import { Wonder, wonders } from "~/logic/Wonders";

function WonderCard({wonder}:{wonder:Wonder}){
    const chooseWonderLink = useGameStateSearchUrl("/chooseWonder")

    return <div className="p-4">
        <WonderImage wonder={wonder}/>
        <Form className="flex flex-row justify-center" action={chooseWonderLink} method="post">
            <input type="hidden" value={wonder.id} name="wonder"/>
            <Submit text="Choose"/>
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

function WonderSelection(){
    const { wondersToChoseFrom } = useGameState();
    return <>
    <h1 className="text-4xl text-center">
            Selecting the wonders
        </h1>
        <div className="flex flex-row flex-wrap justify-center">
            {wondersToChoseFrom?.map(wonderId => wonders.find(w=>w.id===wonderId)).map(wonder => {
                return wonder && <WonderCard wonder={wonder} key={wonder.id}/>
            })}
        </div>
    </>
}

function sizesAndBeginnings(age:1|2|3){
    const zIndexes=[1,2,3,4,5]
    switch(age){
        case 1:{
            const sizes=[2,3,4,5,6]
            const begginings=[5,4,3,2,1]
            return {
                sizes,
                begginings,
                zIndexes
            }
        }
        case 2:{
            const sizes=[2,3,4,5,6]
            const begginings=[5,4,3,2,1]
            return {
                sizes,
                begginings,
                zIndexes
            }
        }
        case 3:{
            const sizes=[2,3,4,5,6]
            const begginings=[5,4,3,2,1]
            return {
                sizes,
                begginings,
                zIndexes
            }
        }
    }

}
function DeckLayout({age,children}:{age:1|2|3,children:ReactNode[]}){
    const { sizes, begginings, zIndexes } = sizesAndBeginnings(age);
    function sum(a:number[]){
        return a.reduce((a,b)=>a+b,0)
    }
    function childrenInRow(row:number){
        return children.slice(
            sum(sizes.slice(0,row)), 
            sum(sizes.slice(0,row))+sizes[row]
        )
    }
    return <div className="grid grid-rows-4 my-6">
        {sizes.map((_,i)=><div 
            className="grid grid-cols-12 gap-4 -my-2"
            >
            {childrenInRow(i).map((child,index)=>
                <div className="col-span-2" style={{
                    gridColumnStart:index===0?begginings[i]:'auto',
                    zIndex:zIndexes[i]
                }}>{child}</div>
            )}
        </div>)}
        
    </div>
}
function Card({name, canBePlayed}:{name:string, canBePlayed:boolean}){
    const card = [...ageOneDeck, ...ageTwoDeck, ...ageThreeDeck, ...guildsDeck].find(c=>c.name===name)
    invariant(card,"A card with this name mus exist")
    const { type } = card;
    const selectCardLink = useGameStateSearchUrl("/build")
    const discardCardLink = useGameStateSearchUrl("/discard")
    return <div className="relative">
        <a href={`/cards/${name}`} className="hover:underline">
            <div className={`${{
                'blue':'bg-blue-200',
                'brown':'bg-amber-600',
                'yellow':'bg-yellow-300',
                'gray':'bg-gray-400',
                'green':'bg-green-300',
                'purple':'bg-purple-400',
                'red':'bg-red-400'
            }[type]} text-xs text-center h-24 p-1 rounded-sm ${
                canBePlayed?'shadow-2xl shadow-blue-500':'shadow-md shadow-gray-400'
            }`}>
                <div className="my-2 font-bold">
                    {name}
                </div>
            </div>
        </a>
        {canBePlayed && <div className="absolute flex flex-row pt-4">
            <Form action={selectCardLink} method="post">
                <Submit text="Build" />
                <input type="hidden" value={name} name="card"/>
            </Form>
            <Form action={discardCardLink} method="post">
                <Submit text="Discard" />
                <input type="hidden" value={name} name="card"/>
            </Form>
        </div>}
    </div>
}

function GamePlay(){
    const { age, decks, canBePlayed } = useGameState();
    invariant(age!==null,"age should not be null")
    const deck = decks[age];
    return <div>
        <h1 className="text-4xl text-center">Choose a card</h1>
        <div className="p-2 pb-16">
            <DeckLayout age={age}>
                {deck.map((cardName, index)=>(
                    cardName && 
                    <Card name={cardName} canBePlayed={canBePlayed[index]}/>
                ))}
            </DeckLayout>
        </div>
    </div>

}

export default function Game(){
    const { wondersToChoseFrom } = useGameState();
    return <div className="p-4">
        {
            (wondersToChoseFrom===null)?
            <GamePlay/>
            :
            <WonderSelection/>
        }
        <ChosenWondersList/>
    </div>
}