import {Subject} from "rxjs/internal/Subject";
import {ProductOrders} from "../models/product-orders.model";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Product} from "../models/product.model";
import {catchError, tap} from "rxjs/operators";
import {MessageService} from "./message.service";


@Injectable()
export class EcommerceService {
    private productsUrl = "/api/products";
    private ordersUrl = "/api/orders";
    private singleProductUrl = 'api/products/readById';


    private orders: ProductOrders = new ProductOrders();
    private ordersSubject = new Subject();
    private total: number;
    OrdersChanged = this.ordersSubject.asObservable();

    constructor(
        private http: HttpClient,
        private messageService: MessageService) {
    }

    getProduct(id: number): Observable<Product> {
        const url = `${this.singleProductUrl}/${id}`;
        return this.http.get<Product>(url).pipe(
            tap(_ => this.log(`fetched product id=${id}`)),
            catchError(this.handleError<Product>(`getProduct id=${id}`))
        );
    }

    private log(message: string) {
        this.messageService.add(`ProductService: ${message}`);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    getAllProducts() {
        return this.http.get(this.productsUrl);
    }

    saveOrder(order: ProductOrders) {
        return this.http.post(this.ordersUrl, order);
    }

    get ProductOrders() {
        return this.orders;
    }
}
