import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrdersComponent} from "./orders/orders.component";
import {HomepageComponent} from "./homepage/homepage.component";

@Component({
    selector: 'app-ecommerce',
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
    private collapsed = true;
    homeFinished = false;
    orderFinished = false;

    @ViewChild('homepageC')
    homepageC: HomepageComponent

    @ViewChild('productsC')
    productsC: ProductsComponent;

    @ViewChild('shoppingCartC')
    shoppingCartC: ShoppingCartComponent;

    @ViewChild('ordersC')
    ordersC: OrdersComponent;

    constructor() {
    }

    ngOnInit() {
    }

    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

    finishOrder(orderFinished: boolean) {
        this.orderFinished = orderFinished;
    }

    finishHome(homeFinished: boolean) {
        this.homeFinished = homeFinished;
    }

    reset() {
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.ordersC.paid = false;
        this.homeFinished = false;
    }
}
