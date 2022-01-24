type Resource = 'stone'|'papyrus'|'brick'|'glass'|'wood';

type NumericEffectType='victoryPoints'|'takeCoins'|'removeCoins'|'shields'
type BooleanEffectType='secondTurn'|'playDiscardedCoins'|'playDiscardedCard'|'destroyBrownCard'|'destroyGreyCard'
type EffectType=NumericEffectType|BooleanEffectType|'produce'
export interface Wonder {
    id:WonderId
    cost:Partial<Record<Resource,number>>,
    name:string,
    image:string,
    effect:Partial<Record<NumericEffectType,number> & Record<BooleanEffectType,true> & {'produce':Resource[]}>
}


const wondersData = [
    {
        id:'pyramids',
        name:'The Piramyds',
        image:'https://cardboardmountain.com/wp-content/uploads/2019/11/82526D5B-4718-4121-8058-79E0BBB307E2.jpg',
        cost:{
            papyrus:1,
            stone:3,
        },
        effect:{
            victoryPoints:9
        }
    },
    {
        id:'appian',
        name:'The Appian Way',
        image:'https://cardboardmountain.com/wp-content/uploads/2019/11/A2DAC138-6667-4094-AB11-24F9516D8C2E.jpg',
        cost:{
            papyrus:1,
            brick:2,
            stone:2
        },
        effect:{
            victoryPoints:3,
            takeCoins:3,
            removeCoins:3,
            secondTurn:true
        }
    },
    {
        id:'artemis',
        name:'The tehmple of artemis',
        image:'https://cardboardmountain.com/wp-content/uploads/2019/11/0EFC8445-9B20-4579-9012-503A00CE4619.jpg',
        cost:{
            papyrus:1,
            glass:1,
            stone:1,
            wood:1,
        },
        effect:{
            takeCoins:12,
            secondTurn:true
        }
    },
    {
        id:'piraeus',
        name:"Piraeus",
        image:'https://cardboardmountain.com/wp-content/uploads/2019/11/E6CFD4BD-5B4C-4ED8-9990-CDBDB9B81D50.jpg',
        cost:{
            brick:1,
            stone:1,
            wood:2
        },
        effect:{
            produce:['papyrus','glass'],
            secondTurn:true,
            victoryPoints:2,
        }
    },
    {
        id:'gardens',
        name:"The hanging gardens",
        image:'https://cardboardmountain.com/wp-content/uploads/2019/11/FE7D4461-897D-4C85-A989-3E41DF5859DD.jpg',
        cost:{
            papyrus:1,
            glass:1,
            wood:2
        },
        effect:{
            takeCoins:6,
            secondTurn:true,
            victoryPoints:3
        }
    },{
        id:'sphinx',
        name:"The sphinx",
        image:'https://cardboardmountain.com/wp-content/uploads/2019/11/F7D8143A-4E00-41BF-BC77-336E070186A2.jpg',
        cost:{
            glass:2,
            brick:1,
            stone:1
        },
        effect:{
            secondTurn:true,
            victoryPoints:6
        }
    },{
        id:'library',
        name:'The Great Library',
        image:'https://cardboardmountain.com/wp-content/uploads/2019/11/2A6D2BA8-5256-4445-B597-B55DC79A8D16.jpg',
        cost:{
            papyrus:1,
            glass:1,
            wood:3
        },
        effect:{
            playDiscardedCoins:true,
            victoryPoints:4
        }
    },{
        id:'lighhouse',
        name:'The great lighthouse',
        image:'https://cardboardmountain.com/wp-content/uploads/2019/11/6810BD52-6C7C-4A01-BFDE-28B2DB9092BB.jpg',
        cost:{
            papyrus:2,
            stone:1,
            wood:1
        },
        effect:{
            produce:['wood','stone','brick'],
            victoryPoints:4,
        }
    },{
        id:'mausoleum',
        name:'The Mausoleum',
        image:'https://cardboardmountain.com/wp-content/uploads/2019/11/99A0136B-7A1B-43E8-8701-23B11B2F4A09.jpg',
        cost:{
            papyrus:1,
            glass:2,
            brick:2,
        },
        effect:{
            playDiscardedCard:true,
            victoryPoints:2
        }
    },{
        id:'circus',
        name:'Circus Maximus',
        image:'https://cardboardmountain.com/wp-content/uploads/2019/11/587633CE-16F8-450E-AAB1-610C28E7A5BE.jpg',
        cost:{
            glass:1,
            wood:1,
            stone:2,
        },
        effect:{
            destroyGreyCard:true,
            shields:1,
            victoryPoints:3
        }
    },{
        id:'zeus',
        name:'The statue of Zeus',
        image:'https://cardboardmountain.com/wp-content/uploads/2019/11/57629DA8-8CEB-41DC-8EAE-F23C05354E75.jpg',
        cost:{
            papyrus:2,
            brick:1,
            wood:1,
            stone:1
        },
        effect:{
            destroyBrownCard:true,
            shields:1,
            victoryPoints:3
        }
    },{
        id:'collosus',
        name:'The collossus',
        image:'https://cardboardmountain.com/wp-content/uploads/2019/11/7FE982B2-9F14-4A55-B494-DE862A3DF2CB.jpg',
        cost:{
            glass:1,
            brick:3
        },
        effect:{
            shields:2,
            victoryPoints:3
        }
    }
] as const

export type WonderId = (typeof wondersData[number])["id"]


export const wonders = wondersData as readonly Wonder[]