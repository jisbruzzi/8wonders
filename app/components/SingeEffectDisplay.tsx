import { SingleEffect } from "~/logic/SingleEffect";
import { GiBarrel, GiBookCover, GiClayBrick, GiClothJar, GiCog, GiCrossedSwords, GiDualityMask, GiFoldedPaper, GiGlassBall, GiHorseHead, GiIonicColumn, GiKitchenKnives, GiKnightBanner, GiMagicLamp, GiMoon, GiMusicalNotes, GiStoneBlock, GiSun, GiTargetArrows, GiTempleGate, GiTowerBridge, GiTwoCoins, GiWaterDrop, GiWaterfall, GiWoodPile } from 'react-icons/gi';
import { FiChevronRight, FiEdit2, FiHash, FiItalic, FiMoon, FiOctagon, FiTriangle } from 'react-icons/fi';
import { Resource } from "~/logic/Resource";
import { Science, UnlockSymbol } from "~/logic/Cards/CardType";

function ResourceSymbol({resource}:{resource:Resource}){
    return <span className={`border-2 border-black rounded-full p-1 pb-2
    ${
        {
            'clay':'bg-red-600 text-red-200',
            'stone':'bg-gray-500 text-gray-300',
            'wood':'bg-amber-700 text-amber-400',
            'papyrus':'bg-amber-500 text-amber-100',
            'glass':'bg-blue-500 text-blue-200'
        }[resource]
    }`}>
        <ResourceIcon resource={resource}/>
    </span>
}
function ResourceIcon({resource}:{resource:Resource}){
    switch(resource){
        case "clay": return <GiClayBrick className="inline"/>
        case "glass": return <GiGlassBall className="inline"/>
        case "papyrus": return <GiFoldedPaper className="inline"/>
        case "stone": return <GiStoneBlock className="inline"/>
        case "wood": return <GiWoodPile className="inline"/>
    }
}
function ScienceIcon({science}:{science:Science}){
    switch(science){
        case "A":return <FiTriangle className="inline"/>
        case "I":return <FiItalic className="inline"/>
        case "O":return <FiOctagon className="inline"/>
        case "pencil":return <FiEdit2 className="inline"/>
        case "smasher":return <FiHash className="inline"/>
        case "Q": return <FiMoon className="inline"/>
    }
}

function SymbolIcon({unlockSymbol}:{unlockSymbol:UnlockSymbol}){
    switch(unlockSymbol){
        case "barrel": return <GiBarrel className="inline"/>
        case "book": return <GiBookCover className="inline"/>
        case "cog": return <GiCog className="inline"/>
        case "column": return <GiIonicColumn className="inline"/>
        case "horse": return <GiHorseHead className="inline"/>
        case "jar": return <GiClothJar className="inline"/>
        case "lamp": return <GiMagicLamp className="inline"/>
        case "mask": return <GiDualityMask className="inline"/>
        case "moon": return <GiMoon className="inline"/>
        case "music": return <GiMusicalNotes className="inline"/>
        case "soldier": return <GiKnightBanner className="inline"/>
        case "sun": return <GiSun className="inline"/>
        case "sword": return <GiKitchenKnives className="inline"/>
        case "target": return <GiTargetArrows className="inline"/>
        case "temple": return <GiTempleGate className="inline"/>
        case "tower": return <GiTowerBridge className="inline"/>
        case "water": return <GiWaterDrop className="inline"/>
    }
}
export default function SingleEffectDisplay({effect}:{effect:SingleEffect}){
    if("produceOneOf" in effect){
        return <span>
            {effect.produceOneOf.map(production => <ResourceSymbol resource={production}/>)}
        </span>
    }
    if("getCoin" in effect){
        return <span>
            <span className="text-sm">+ {effect.getCoin}</span> <GiTwoCoins className="inline"/>
        </span>
    }
    if("victoryPoints" in effect){
        return <span className="bg-green-400 border-white border-4 rounded-lg p-1">
            {effect.victoryPoints}<span className="text-sm"> VP</span>
        </span>
    }
    if("shields" in effect){
        return new Array(effect.shields).fill(0).map((_e,i)=>
            <span className="bg-black text-red-500 rounded-lg p-1">
                <GiCrossedSwords className="inline"/>
            </span>)
    }
    if("tradeOne" in effect){
        return <span className="text-sm">
            1 <GiTwoCoins className="inline"/> <FiChevronRight className="inline"/> {effect.tradeOne.flatMap(resource=>[
                "/",
                <ResourceSymbol resource={resource}/>
            ]).slice(1)} 
        </span>
    }
    if("science" in effect){
        return <span className="bg-gradient-to-tr from-amber-800 to-blue-500 text-opacity-40  pb-1 px-1 rounded-3xl">
            <span className=" mix-blend-difference text-white">
                <ScienceIcon science={effect.science}/>
            </span>
        </span>
    }
    if("symbol" in effect){
        return <span className="bg-fuchsia-800 text-fuchsia-100 p-1 rounded-sm border-fuchsia-100 border-2 text-sm">
            <SymbolIcon unlockSymbol={effect.symbol}/>
        </span>
    }
    if("complex" in effect){
        return <div>?</div>
    }
    return <div>?</div>
    
}