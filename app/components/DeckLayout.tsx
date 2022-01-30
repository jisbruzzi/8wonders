import { ReactNode } from "react"

function sizesAndBeginnings(age:1|2|3){
    const zIndexes=[1,2,3,4,5]
    switch(age){
        case 1:{
            const sizes=[2,3,4,5,6]
            const begginings=[5,4,3,2,1]
            return {
                sizes,
                begginings,
                zIndexes
            }
        }
        case 2:{
            const sizes=[6,5,4,3,2]
            const begginings=[1,2,3,4,5]
            return {
                sizes,
                begginings,
                zIndexes
            }
        }
        case 3:{
            const sizes=[2,3,4,2,4,3,2]
            const begginings=[3,2,1,2,1,2,3]
            return {
                sizes,
                begginings,
                zIndexes:[1,2,3,4,5,6,7]
            }
        }
    }

}
export default function DeckLayout({age,children}:{age:1|2|3,children:ReactNode[]}){
    const { sizes, begginings, zIndexes } = sizesAndBeginnings(age);
    function sum(a:number[]){
        return a.reduce((a,b)=>a+b,0)
    }
    function childrenInRow(row:number){
        return children.slice(
            sum(sizes.slice(0,row)), 
            sum(sizes.slice(0,row))+sizes[row]
        )
    }
    return <div className="grid grid-rows-4 my-6">
        {sizes.map((_,i)=><div 
            className="grid grid-cols-12 gap-4 -my-2"
            >
            {childrenInRow(i).map((child,index)=>
                <div className="col-span-2" style={{
                    gridColumnStart:index===0?begginings[i]:(
                        i===3 && index===1 && age===3
                    )?6:'auto',
                    zIndex:child?zIndexes[i]:0
                }}>{child}</div>
            )}
        </div>)}
        
    </div>
}