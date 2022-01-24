import { Card } from "./type";

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

