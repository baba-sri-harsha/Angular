export class Product {
  constructor(
    public productId: number,
    public name: string,
    public brand: string,
    public category: string,
    public price: number,
    public type?: string
  ) {}
}
