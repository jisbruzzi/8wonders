import { Card } from "./type";

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