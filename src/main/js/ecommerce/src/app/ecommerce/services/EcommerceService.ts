import {ProductOrder} from "../models/product-order.model";
import {Subject} from "rxjs/internal/Subject";
import {ProductOrders} from "../models/product-orders.model";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Product, updateProduct} from "../models/product.model";
import {catchError, map, tap} from "rxjs/operators";
import {MessageService} from "./message.service";


@Injectable()
export class EcommerceService {
    private productsUrl = "/api/products";
    private ordersUrl = "/api/orders";
    private singleProductUrl = 'api/products/readById';
    private updateProductUrl = 'api/products/update-product-by-id';

    private tempProduct: Observable<updateProduct> | undefined;
    private productOrder: ProductOrder;
    private orders: ProductOrders = new ProductOrders();

    private productOrderSubject = new Subject();
    private ordersSubject = new Subject();
    private totalSubject = new Subject();

    private total: number;

    ProductOrderChanged = this.productOrderSubject.asObservable();
    OrdersChanged = this.ordersSubject.asObservable();
    TotalChanged = this.totalSubject.asObservable();


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

    // updateProduct(product: Product): Observable<Product> {
    //     return this.http.post<Product>(this.updateProductUrl, product.id, product)
    //         .pipe(
    //             catchError(this.handleError('updateProduct', product))
    //         );
    // }

    getAllProducts() {
        return this.http.get(this.productsUrl);
    }

    saveOrder(order: ProductOrders) {
        return this.http.post(this.ordersUrl, order);
    }

    set SelectedProductOrder(value: ProductOrder) {
        this.productOrder = value;
        this.productOrderSubject.next();
    }

    get SelectedProductOrder() {
        return this.productOrder;
    }

    set ProductOrders(value: ProductOrders) {
        this.orders = value;
        this.ordersSubject.next();
    }

    get ProductOrders() {
        return this.orders;
    }

    get Total() {
        return this.total;
    }

    set Total(value: number) {
        this.total = value;
        this.totalSubject.next();
    }
}
