import { Card } from "./type";

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
