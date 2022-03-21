import {Component, OnInit, Output} from '@angular/core';
import {ProductOrder} from "../models/product-order.model";
import {EcommerceService} from "../services/EcommerceService";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductOrders} from "../models/product-orders.model";
import {Product} from "../models/product.model";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    productOrders: ProductOrder[] = [];
    products: any[] = [];
    private shoppingCartOrders: ProductOrders;
    sub: Subscription;
    productSelected: boolean = false;
    routeID;
    singleProduct: Product | undefined;
    public cart

    constructor(private ecommerceService: EcommerceService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.productOrders = [];
        this.loadProducts();
        this.loadOrders();
        this.getRouteId()
        this.getProduct()
        this.cart = 0;
    }

    cartButtonSelector(product): String {
        if (product.stock > 0) {
            return "add to cart";
        } else {
            return "out of stock"
        }
    }

    addToCart() {
        if(this.singleProduct.stock > 0) {
        this.cart ++;
        this.singleProduct.stock --;
        }
    }

    getRouteId() {
        this.route.paramMap.subscribe(params => {
            let id = params.get('id');
            this.routeID = id;
        });
    }

    getProduct() {
        this.ecommerceService.getProduct(this.routeID)
            .subscribe(product => this.singleProduct = product)
        this.productOrders.push(new ProductOrder(this.singleProduct, 0));
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

    loadOrders() {
        this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.shoppingCartOrders = this.ecommerceService.ProductOrders;
        });
    }

    reset() {
        this.productOrders = [];
        this.loadProducts();
        this.ecommerceService.ProductOrders.productOrders = [];
        this.loadOrders();
        this.productSelected = false;
    }
}
