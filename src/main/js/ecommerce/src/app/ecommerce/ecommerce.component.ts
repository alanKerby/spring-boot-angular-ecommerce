import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from "./products/products.component";
import {HomepageComponent} from "./homepage/homepage.component";

@Component({
    selector: 'app-ecommerce',
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
    // private collapsed = true;
    // homeFinished = false;
    // orderFinished = false;

    // @ViewChild('homepageC')
    // homepageC: HomepageComponent

    // @ViewChild('productsC')
    // productsC: ProductsComponent;
    //
    // constructor() {
    // }
    //
    ngOnInit() {
    }
    //
    // toggleCollapsed(): void {
    //     this.collapsed = !this.collapsed;
    // }
    //
    // reset() {
    //     this.orderFinished = false;
    //     this.productsC.reset();
    // }
}
//
