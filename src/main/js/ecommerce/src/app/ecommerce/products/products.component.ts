import {Component, OnInit, Output} from '@angular/core';
import {ProductOrder} from "../models/product-order.model";
import {EcommerceService} from "../services/EcommerceService";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductOrders} from "../models/product-orders.model";
import {Product} from "../models/product.model";
import {ActivatedRoute} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    productOrders: ProductOrder[] = [];
    products: any[] = [];
    selectedProductOrder: ProductOrder;
    private shoppingCartOrders: ProductOrders;
    sub: Subscription;
    productSelected: boolean = false;
    routeID;
    singleProduct: Product | undefined;
    public cart;

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

    addToCart() {
        if(this.singleProduct.stock > 0) {
        this.cart ++;
        this.singleProduct.stock --;
        this.ecommerceService.updateProduct(this.singleProduct)
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

    // addToCart(order: ProductOrder) {
    //     this.ecommerceService.SelectedProductOrder = order;
    //     this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
    //     this.productSelected = true;
    // }

    removeFromCart(productOrder: ProductOrder) {
        let index = this.getProductIndex(productOrder.product);
        if (index > -1) {
            this.shoppingCartOrders.productOrders.splice(
                this.getProductIndex(productOrder.product), 1);
        }
        this.ecommerceService.ProductOrders = this.shoppingCartOrders;
        this.shoppingCartOrders = this.ecommerceService.ProductOrders;
        this.productSelected = false;
    }

    getProductIndex(product: Product): number {
        return this.ecommerceService.ProductOrders.productOrders.findIndex(
            value => value.product === product);
    }

    isProductSelected(product: Product): boolean {
        return this.getProductIndex(product) > -1;
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
