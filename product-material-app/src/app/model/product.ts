export class Product {
    constructor(
        public productId:number,
        public name: string,
        public brand: string,
        public cost: number,
        public category: string, 
        public quantity: number,
        public rating?: number,
        public expiry?: Date
    ){}

}
