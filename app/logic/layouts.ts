function arraySize<T>(size:number,initializer:(index:number)=>T):T[]{
    return new Array(size).fill(0).map((_value,index)=>initializer(index))
}
function sum(array:number[]):number{
    return array.reduce((a,b)=>a+b,0)
}
/**
 * layout[i] = array of card indexes that cover i
 */
const layoutAgeOne:number[][]=(()=>{
    const rowSizes = [2,3,4,5,6]
    const rowStartIndexes = arraySize(rowSizes.length,(index)=>sum(rowSizes.slice(0,index)))
    return rowSizes.flatMap((rowSize,rowIndex) => arraySize(rowSize,(indexInRow)=>rowIndex===5?[]:[
        rowStartIndexes[rowIndex+1]+indexInRow,
        rowStartIndexes[rowIndex+1]+indexInRow+1,
    ])
    )
})()

const layoutAgeTwo:number[][]=(()=>{
    const rowSizes = [6,5,4,3,2]
    const rowStartIndexes = arraySize(rowSizes.length,(index)=>sum(rowSizes.slice(0,index)))
    return rowSizes.flatMap((rowSize,rowIndex) => arraySize(rowSize,(indexInRow)=>{
        if(rowIndex===5) return []
        if(indexInRow===0) return [rowStartIndexes[rowIndex+1]]
        if(indexInRow===rowSize-1) return [rowStartIndexes[rowIndex+1]+rowSizes[rowIndex+1]-1]
        return [
            rowStartIndexes[rowIndex+1]+indexInRow,
            rowStartIndexes[rowIndex+1]+indexInRow-1,
        ]
    })
    )
})()

const layoutAgeThree:number[][]=[
        [2,3], [3,4],
    [5,6], [6,7], [7,8],
     [9],[9],[10],[10],
        [11,12], [13,14],
    [15], [15,16], [16,17], [17],
    [18], [18,19], [19],
    [],[]
]


function canBePlayed(layout:number[][],inGame:boolean[],removedIndex:number,initialCanBePlayed:boolean[]){
    const newTrues=layout
    .map((coverers,index)=>({coverers,index}))
    .filter(({coverers})=>coverers.includes(removedIndex))
    .filter(({coverers})=>coverers.every(coverer => !inGame[coverer] || coverer===removedIndex))
    .map(({index})=>index)
    console.log({newTrues})
    return initialCanBePlayed.map((initialValue,index)=>initialValue || newTrues.includes(index))
}

function canBePlayedForLayout(layout:number[][]){
    return (inGame:boolean[],removedIndex:number,initialCanBePlayed:boolean[])=>canBePlayed(layout,inGame,removedIndex,initialCanBePlayed)
}

export const layouts = {
    1:canBePlayedForLayout(layoutAgeOne),
    2:canBePlayedForLayout(layoutAgeTwo),
    3:canBePlayedForLayout(layoutAgeThree),
}

function trues(n:number):boolean[]{
    return new Array(n).fill(true)
}

function falses(n:number):boolean[]{
    return new Array(n).fill(false)
}

const empty:boolean[]=[]

export const intialCanBePlayedStates = {
    1:empty.concat(falses(14),trues(6)),
    2:empty.concat(falses(18),trues(2)),
    3:empty.concat(falses(18),trues(2))
}

export const intialFaceUpStates = {
    1:empty.concat(trues(2),falses(3),trues(4),falses(5),trues(6)),
    2:empty.concat(trues(6),falses(5),trues(4),falses(3),trues(2)),
    3:empty.concat(trues(2),falses(3),trues(4),falses(2),trues(4),falses(3),trues(2)),
}