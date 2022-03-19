export class Product {
    id: number;
    name: string;
    price: number;
    pictureUrl: string;
    stock: number;

    constructor(id: number, name: string, price: number, pictureUrl: string, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.pictureUrl = pictureUrl;
        this.stock = stock;
    }


}

export class updateProduct {
    id: number;
    name: string;
    price: number;
    pictureUrl: string;
    stock: number;

    constructor(name: string, price: number, pictureUrl: string, stock: number) {
        this.name = name;
        this.price = price;
        this.pictureUrl = pictureUrl;
        this.stock = stock;
    }
}
