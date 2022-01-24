import { Card } from "./type";

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
