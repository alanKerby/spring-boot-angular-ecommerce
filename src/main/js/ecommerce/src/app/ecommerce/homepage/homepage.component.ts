import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {EcommerceService} from "../services/EcommerceService";
import {ProductOrder} from "../models/product-order.model";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']

})

export class HomepageComponent implements OnInit {
    productOrders: ProductOrder[] = [];
    products: Product[] = [];

    constructor(private ecommerceService: EcommerceService) {
    }

    ngOnInit() {
        this.productOrders = [];
        this.loadProducts();
    }

    loadProducts() {
        this.ecommerceService.getAllProducts()
            .subscribe(
                (products: any[]) => {
                    this.products = products;
                    this.products.forEach(product => {
                        this.productOrders.push(new ProductOrder(product, 0));
                    })
                },
                (error) => console.log(error)
            );
    }

    reset() {
        this.productOrders = [];
        this.loadProducts();
        this.ecommerceService.ProductOrders.productOrders = [];
    }
}
