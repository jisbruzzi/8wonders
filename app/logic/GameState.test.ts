import { GameState, reduce } from "./GameState";

test('Check start acion', () => {
    const s=reduce(null as unknown as GameState,{
        type:'start',
        seed:3
    })
    expect(s.wondersToChoseFrom).toHaveLength(4)
});

test('Check choose acion', () => {
    const s=reduce({
        playerChoosingWonder:1,
        randomSeed:10,
        wonders:{
            1:[],
            2:[],
        },
        wondersToChoseFrom:['appian','artemis','circus','collosus']
    },{
        type:'chooseWonder',
        wonder:'appian'
    })
    expect(s.wondersToChoseFrom).toHaveLength(3)
    expect(s.wonders[1]).toHaveLength(1)
    expect(s.playerChoosingWonder).toEqual(2)
});

test('Check choose acion no more cards', () => {
    const s=reduce({
        playerChoosingWonder:2,
        randomSeed:10,
        wonders:{
            1:['appian','circus'],
            2:['artemis'],
        },
        wondersToChoseFrom:['collosus']
    },{
        type:'chooseWonder',
        wonder:'collosus'
    })
    expect(s.wondersToChoseFrom).toHaveLength(4)
    expect(s.wonders[2]).toHaveLength(2)
    expect(s.playerChoosingWonder).toEqual(1)
});

test('Check choose sphinx doesnt respawn', () => {
    const s=reduce({
        "randomSeed":10,
        "playerChoosingWonder":2,
        "wonders":{
            "1":["pyramids","collosus"],
            "2":["appian"]
        },
        "wondersToChoseFrom":["sphinx"]
    },{
        type:'chooseWonder',
        wonder:'sphinx'
    })
    expect(s.wondersToChoseFrom).not.toContain('sphinx')
});

