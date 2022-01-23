type Resource = 'stone'|'papyrus';
interface Cost {
    resource:Resource,
    quantity:number
}
type Effect={
    type:"victoryPoints",
    quantity:number
}
export interface Wonder {
    cost:Cost[],
    name:string,
    image:string,
    effect:Effect[]
}


export const wonders:Wonder[] = [
    {
        cost:[
            {
                resource:'stone',
                quantity:3,
            },{
                resource:'papyrus',
                quantity:1
            }
        ],
        effect:[
            {
                type:'victoryPoints',
                quantity:9
            }
        ],
        name:'The Piramyds',
        image:'https://i.natgeofe.com/n/535f3cba-f8bb-4df2-b0c5-aaca16e9ff31/giza-plateau-pyramids_16x9.jpg'
    }
]