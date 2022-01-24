import { BasicResource, ElaborateResource, Resource } from "./Resource";

type Science='A'|'O'|'I'|'smasher'|'pencil'|'Q'
type Cost=Partial<Record<Resource|'coin',number>>
type Color='red'|'blue'|'brown'|'gray'|'green'|'yellow'|'purple'
type UnlockSymbol='jar'|'barrel'|'mask'|'temple'|'sun'|'water'|'column'|'moon'|'target'|'soldier'|'horse'|'sword'|'tower'|'music'|'cog'|'book'|'lamp'

type Effect=Partial<
    Record<Resource|'coin',number> & 
    Record<'victoryPoints'|'shields',number> & {
        produceOneOf:readonly Resource[],
        tradeOne:readonly Resource[],
        science:Science,
        complex:{
            selector:(Color|'3coins'|'wonders')[],
            over:'me'|'playerWithMost',
            coinsNow:number,
            victoryPointsLater:number
        },
        symbol:UnlockSymbol
    }
>
type Card = {
    name:string,
    type:Color,
    cost:Cost,
    effect:Effect,
    unlockedBy?:UnlockSymbol
}

export const AgeOne:readonly Card[] = [
    {
        name:'Lumber Yard',
        type:'brown',
        cost:{},
        effect:{
            wood:1
        }
    },{
        name:'Logging Camp',
        type:'brown',
        cost:{
            coin:1
        },
        effect:{
            wood:1
        }
    },{
        name:'Clay pool',
        type:'brown',
        cost:{},
        effect:{
            clay:1
        }
    },{
        name:'Clay Pit',
        type:'brown',
        cost:{
            coin:1
        },
        effect:{
            clay:1
        }
    },{
        name:'Quarry',
        type:'brown',
        cost:{},
        effect:{
            stone:1
        }
    },{
        name:'Stone pit',
        type:'brown',
        cost:{
            coin:1
        },
        effect:{
            stone:1
        },
    },{
        name:'Glassworks',
        type:'gray',
        cost:{ coin:1 },
        effect:{
            glass:1
        }
    },{
        name:'Press',
        type:'gray',
        cost:{ coin: 1 },
        effect:{ papyrus:1}
    },{
        name:'Guard Tower',
        type:'red',
        cost:{},
        effect:{ shields:1 },
    },{
        name:'Workshop',
        type:'green',
        cost:{
            papyrus:1
        },
        effect:{
            victoryPoints:1,
            science:'A'
        },
    },
    {
        name:'Apothecary',
        type:'green',
        cost:{
            papyrus:1
        },
        effect:{
            science:'O',
            victoryPoints:1
        }
    },{
        name:'Stone Reserve',
        type:'yellow',
        cost:{
            coin:3
        },
        effect:{
            tradeOne:['stone']
        }
    },{
        name:'Clay Reserve',
        type:'yellow',
        cost:{ coin: 3 },
        effect:{ tradeOne:['clay'] }
    },{
        name:'Wood Reserve',
        type:'yellow',
        cost:{ coin:3 },
        effect:{ tradeOne:['wood'] }
    },{
        name:'Stable',
        type:'red',
        cost:{ wood:1 },
        effect:{ 
            shields:1,
            symbol:'horse'
        }
    },{
        name:'Garrison',
        type:'red',
        cost:{clay:1},
        effect:{
            shields:1,
            symbol:'sword'
        }
    },{
        name:'Palisade',
        type:'red',
        cost:{coin:2},
        effect:{shields:1}
    },{
        name:'Scriptorium',
        type:'green',
        cost:{coin:2},
        effect:{
            symbol:'book',
            science:'pencil'
        }
    },{
        name:'Pharmacist',
        type:'green',
        cost:{coin:2},
        effect:{
            symbol:'cog',
            science:'smasher'
        }
    },{
        name:'Theater',
        cost:{},
        effect:{
            victoryPoints:3,
            symbol:'mask'
        },
        type:'blue'
    },{
        name:'Altar',
        cost:{},
        effect:{
            victoryPoints:3,
            symbol:'moon'
        },
        type:'blue'
    },{
        name:'Baths',
        type:'blue',
        cost:{stone:1},
        effect:{
            victoryPoints:3,
            symbol:'water'
        }
    },{
        name:'Tavern',
        cost:{},
        effect:{
            coin:4
        },
        type:'yellow'
    }
] as const;

export const AgeTwo:readonly Card[] = [
    {
        name:'Sawmill',
        type:'brown',
        cost:{coin:2},
        effect:{
            wood:2
        },
    },{
        name:'Brickyard',
        type:'brown',
        cost:{coin:2},
        effect:{clay:2},
    },{
        name:'Shelf Quarry',
        type:'brown',
        cost:{coin:2},
        effect:{stone:2}
    },{
        name:'Glass-Blower',
        type:'gray',
        cost:{},
        effect:{glass:1}
    },{
        name:'Drying room',
        type:'gray',
        cost:{},
        effect:{papyrus:1},
    },{
        name:'Walls',
        type:'red',
        cost:{stone:2},
        effect:{shields:2}
    },{
        name:'Forum',
        type:'yellow',
        cost:{
            coin:3,
            clay:1
        },
        effect:{
            produceOneOf:['glass',"papyrus"]
        }
    },{
        name:'Caravansery',
        type:'yellow',
        cost:{
            coin:2,
            glass:1,
            papyrus:1
        },
        effect:{
            produceOneOf:['clay','wood','stone']
        }
    },{
        name:'Customs House',
        type:'yellow',
        cost:{coin:4},
        effect:{
            tradeOne:['papyrus','glass']
        }
    },{
        name:'Tribunal',
        type:'blue',
        cost:{
            wood:2,
            glass:1
        },
        effect:{
            victoryPoints:5
        }
    },{
        name:'Horse Breeders',
        type:'red',
        cost:{
            clay:1,
            wood:1
        },
        effect:{
            shields:1
        },
        unlockedBy:'horse'
    },{
        name:'Barracks',
        type:'red',
        cost:{ coin:3 },
        effect:{
            shields:1
        },
        unlockedBy:'sword'
    },{
        name:'Archery Range',
        type:'red',
        cost:{
            stone:1,
            wood:1,
            papyrus:1
        },
        effect:{
            shields:2,
            symbol:'target'
        }
    },{
        name:'Parade Ground',
        type:'red',
        cost:{
            clay:2,
            glass:1
        },
        effect:{
            shields:2,
            symbol:'soldier'
        },
    },{
        name:'Library',
        type:'green',
        cost:{
            stone:1,
            wood:1,
            glass:1
        },
        effect:{
            science:'pencil',
            victoryPoints:2
        },
        unlockedBy:'book'
    },{
        name:'Dispensary',
        type:'green',
        cost:{
            clay:2,
            stone:1
        },
        effect:{
            science:'smasher',
            victoryPoints:2
        },
        unlockedBy:'cog'
    },{
        name:'School',
        type:'green',
        cost:{
            wood:1,
            papyrus:2
        },
        effect:{
            science:'O',
            victoryPoints:1,
            symbol:'music'
        }
    },{
        name:'Laboratory',
        type:'green',
        cost:{
            wood:1,
            glass:2
        },
        effect:{
            science:'A',
            victoryPoints:1,
            symbol:'lamp'
        }
    },{
        name:'Statue',
        type:'blue',
        cost:{ clay:2 },
        effect:{
            victoryPoints:4,
            symbol:'column'
        },
        unlockedBy:'mask'
    },{
        name:'Temple',
        type:'blue',
        cost:{
            wood:1,
            papyrus:1
        },
        unlockedBy:'moon',
        effect:{
            victoryPoints:4,
            symbol:'sun'
        }
    },{
        name:'Aqueduct',
        type:'blue',
        unlockedBy:'water',
        cost:{
            stone:3
        },
        effect:{
            victoryPoints:5
        }
    },{
        name:'Rostrum',
        type:'blue',
        cost:{
            stone:1,
            wood:1
        },
        effect:{
            victoryPoints:4,
            symbol:'temple'
        }
    },{
        name:'Brewery',
        type:'yellow',
        cost:{},
        effect:{
            coin:6,
            symbol:'barrel'
        }
    }
] as const

export const AgeThree:readonly Card[]=[
    {
        name:'Arsenal',
        type:'red',
        cost:{
            clay:3,
            wood:2
        },
        effect:{ shields:3 }
    },{
        name:'Courthouse',
        type:'red',
        cost:{coin:8},
        effect:{shields:3}
    },{
        name:'Academy',
        type:'green',
        cost:{
            stone:1,
            wood:1,
            glass:2
        },
        effect:{
            science:'I',
            victoryPoints:3
        }
    },{
        name:'Study',
        type:'blue',
        cost:{
            wood:2,
            glass:1,
            papyrus:1
        },
        effect:{
            science:'I',
            victoryPoints:3
        }
    },{
        name:'Chamber of commerce',
        type:'yellow',
        cost:{ papyrus:2 },
        effect:{
            victoryPoints:3,
            complex:{
                selector:['gray'],
                coinsNow:3,
                over:'me',
                victoryPointsLater:0
            }
        }
    },{
        name:'Port',
        type:'yellow',
        cost:{
            wood:1,
            glass:1,
            papyrus:1
        },
        effect:{
            victoryPoints:3,
            complex:{
                selector:['brown'],
                coinsNow:2,
                over:'me',
                victoryPointsLater:3
            }
        }
    },{
        name:'Armory',
        type:'yellow',
        cost:{
            stone:2,
            glass:1
        },
        effect:{
            victoryPoints:3,
            complex:{
                coinsNow:1,
                over:'me',
                selector:['red'],
                victoryPointsLater:0
            }
        }
    },{
        name:'Palace',
        type:'blue',
        cost:{
            clay:1,
            stone:1,
            wood:1,
            glass:2
        },
        effect:{
            victoryPoints:7
        }
    },{
        name:'Town Hall',
        type:'blue',
        cost:{
            stone:3,
            wood:2
        },
        effect:{
            victoryPoints:7
        }
    },{
        name:'Obelisk',
        type:'blue',
        cost:{
            stone:2,
            glass:1
        },
        effect:{
            victoryPoints:5
        }
    },{
        name:'Fortifications',
        type:'red',
        unlockedBy:'tower',
        cost:{
            stone:2,
            clay:1,
            papyrus:1
        },
        effect:{
            shields:2
        }
    },{
        name:'Siege Workshop',
        unlockedBy:'target',
        type:'red',
        cost:{
            wood:3,
            glass:1
        },
        effect:{
            shields:2
        }
    },{
        name:'Circus',
        type:'red',
        unlockedBy:'soldier',
        cost:{
            clay:2, stone:2
        },
        effect:{
            shields:2
        }
    },{
        name:'University',
        type:'green',
        unlockedBy:'music',
        cost:{
            clay:1,
            glass:1,
            papyrus:1
        },
        effect:{
            science:'Q',
            victoryPoints:2
        },
    },{
        name:'Observatory',
        unlockedBy:'lamp',
        type:'green',
        cost:{
            stone:1,
            papyrus:2,
        },
        effect:{
            science:'O',
            victoryPoints:2
        }
    },{
        name:'Gardens',
        unlockedBy:'column',
        type:'blue',
        cost:{
            clay:2,
            wood:2
        },
        effect:{
            victoryPoints:6
        }
    },{
        name:'Pantheon',
        type:'blue',
        unlockedBy:'sun',
        cost:{
            clay:1,
            wood:1,
            papyrus:2
        },
        effect:{
            victoryPoints:6
        }
    },{
        name:'Senate',
        type:'blue',
        unlockedBy:'temple',
        cost:{
            clay:2,
            stone:1,
            papyrus:1
        },
        effect:{
            victoryPoints:5
        }
    },{
        name:'Lighthouse',
        type:'yellow',
        unlockedBy:'jar',
        cost:{
            clay:2,
            glass:1
        },
        effect:{
            victoryPoints:3,
            complex:{
                coinsNow:1,
                over:'me',
                selector:['yellow'],
                victoryPointsLater:0
            }
        }
    },{
        name:'Arena',
        type:'yellow',
        unlockedBy:'barrel',
        cost:{
            clay:1,
            stone:1,
            wood:1
        },
        effect:{
            victoryPoints:3,
            complex:{
                coinsNow:2,
                over:'me',
                selector:['wonders'],
                victoryPointsLater:0
            }
        }
    }
]


export const Guilds:readonly Card[]=[
    {
        name:'Merchants Guild',
        type:'purple',
        cost:{
            clay:1,
            wood:1,
            glass:1,
            papyrus:1
        },
        effect:{
            complex:{
                coinsNow:1,
                over:'playerWithMost',
                selector:['yellow'],
                victoryPointsLater:1
            }
        }
    },{
        name:'Shipowners Guild',
        type:'purple',
        cost:{
            clay:1,
            stone:1,
            glass:1,
            papyrus:1
        },
        effect:{
            complex:{
                coinsNow:1,
                over:'playerWithMost',
                selector:['brown','gray'],
                victoryPointsLater:1
            }
        }
    },{
        name:'Builders Guild',
        type:'purple',
        cost:{
            stone:2,
            clay:1,
            wood:1,
            glass:1,
        },
        effect:{
            complex:{
                over:'playerWithMost',
                coinsNow:0,
                selector:['wonders'],
                victoryPointsLater:2
            }
        }
    },{
        name:'Magistrates Guild',
        type:'purple',
        cost:{
            wood:2,
            clay:1,
            papyrus:1
        },
        effect:{
            complex:{
                coinsNow:1,
                over:'playerWithMost',
                selector:['blue'],
                victoryPointsLater:1
            }
        }
    },{
        name:'Scientists Guild',
        type:'purple',
        cost:{
            clay:2,
            wood:2
        },
        effect:{
            complex:{
                coinsNow:1,
                over:'playerWithMost',
                selector:['green'],
                victoryPointsLater:1
            }
        }
    },{
        name:'Moneylenders Guild',
        type:'purple',
        cost:{
            stone:2,
            wood:2,
        },
        effect:{
            complex:{
                victoryPointsLater:1,
                coinsNow:0,
                over:'playerWithMost',
                selector:["3coins"]
            }
        }
    },{
        name:'Tacticians Guild',
        type:'purple',
        cost:{
            stone:2,
            clay:1,
            papyrus:1
        },
        effect:{
            complex:{
                coinsNow:1,
                over:'playerWithMost',
                selector:['red'],
                victoryPointsLater:1
            }
        }
    }
]