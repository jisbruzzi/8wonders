import { canBuild, GameState, reduce } from "./GameState";

test('Check start acion', () => {
    const s = reduce(null as unknown as GameState, {
        type: 'start',
        seed: 3
    })
    expect(s.wondersToChoseFrom).toHaveLength(4)
});

test('Check choose acion', () => {
    const s = reduce({
    player: 1,
    randomSeed: 10,
    wonders: {
        1: [],
        2: [],
    },
    wondersToChoseFrom: ['appian', 'artemis', 'circus', 'collosus'],
    age: null,
    decks: { 1: [], 2: [], 3: [] },
    canBePlayed: [],
    playersState: {
        "1":{
            buildings:[],
            coins:0
        },
        "2":{
            buildings:[],
            coins:0
        }
    }
}, {
        type: 'chooseWonder',
        wonder: 'appian'
    })
    expect(s.wondersToChoseFrom).toHaveLength(3)
    expect(s.wonders[1]).toHaveLength(1)
    expect(s.player).toEqual(2)
});

test('Check choose acion no more cards', () => {
    const s = reduce({
    player: 2,
    randomSeed: 10,
    wonders: {
        1: ['appian', 'circus'],
        2: ['artemis'],
    },
    wondersToChoseFrom: ['collosus'],
    age: null,
    decks: { 1: [], 2: [], 3: [] },
    canBePlayed: [],
    playersState: {
        "1":{
            buildings:[],
            coins:0
        },
        "2":{
            buildings:[],
            coins:0
        }
    }
}, {
        type: 'chooseWonder',
        wonder: 'collosus'
    })
    expect(s.wondersToChoseFrom).toHaveLength(4)
    expect(s.wonders[2]).toHaveLength(2)
    expect(s.player).toEqual(1)
});

test('Check choose sphinx doesnt respawn', () => {
    const s = reduce({
        "randomSeed": 10,
        "player": 2,
        "wonders": {
            "1": ["pyramids", "collosus"],
            "2": ["appian"]
        },
        "wondersToChoseFrom": ["sphinx"],
        age: null,
        decks: { 1: [], 2: [], 3: [] },
        canBePlayed: [],
        playersState: { 1: { buildings: [], coins: 0 }, 2: { buildings: [], coins: 0 } }
    }, {
        type: 'chooseWonder',
        wonder: 'sphinx'
    })
    expect(s.wondersToChoseFrom).not.toContain('sphinx')
});

test('Logging camp can be built', () => {
    const s:GameState = {
        "randomSeed": 10,
        "player": 1,
        "wonders": { "1": [], "2": [] },
        "wondersToChoseFrom": null,
        "age": 1,
        "decks": {
            "1": [],
            "2": [],
            "3": []
        },
        "canBePlayed": [ false, false, true, true, false, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true ],
        "playersState": {
            1: {
                "coins": 6,
                "buildings": [ "Theater", "Clay pool", "Garrison", "Quarry", "Baths" ]
            },
            2: {
                "coins": 12,
                "buildings": [ "Altar", "Guard Tower", "Tavern" ]
            }
        }
    };
    expect(canBuild(s,1,"Clay pool")).toBe(true)
    expect(canBuild(s,2,"Logging Camp")).toBe(true)
    expect(canBuild(s,1,"Logging Camp")).toBe(true)
})