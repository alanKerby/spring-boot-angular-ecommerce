import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {EcommerceComponent} from './ecommerce/ecommerce.component';
import {ProductsComponent} from './ecommerce/products/products.component';
import {ShoppingCartComponent} from './ecommerce/shopping-cart/shopping-cart.component';
import {OrdersComponent} from './ecommerce/orders/orders.component';
import {EcommerceService} from "./ecommerce/services/EcommerceService";
import {FooterComponent} from "./ecommerce/footer/footer.component"
import {HeaderComponent} from "./ecommerce/header/header.component";
import {HomepageComponent} from "./ecommerce/homepage/homepage.component";

@NgModule({
    declarations: [
        AppComponent,
        EcommerceComponent,
        ProductsComponent,
        ShoppingCartComponent,
        OrdersComponent,
        FooterComponent,
        HeaderComponent,
        HomepageComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: HomepageComponent},
            {path: 'product/:id', component: ProductsComponent},
            {path: 'cart', component: ShoppingCartComponent}
        ])
    ],
    providers: [EcommerceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
