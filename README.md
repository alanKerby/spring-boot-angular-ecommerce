# Ecommerce Demo Project

## Aims
The project was to create a demo webapp for a pitch to a prospective client. The requirements were as follows:
* A modern webdesign aesthetic.
* Responsive design to work across multiple user interfaces. 
* Create/read/update/delete (CRUD) products.
* Product pages.
* Ability to add product to basket when in stock.

## Development
* Bootstrap with custom CSS.
* Angular JavaScript Framework was used to create a single page application that is fast, responsive to UI size.
* Routing for individual product pages.
* A Spring Boot backend with CRUD functionality was created using a PostgreSQL database. 
* Full testing coverage of the backend was achieved with unit and integration testing.
* Postman can be used to utilise CRUD functionality.
* Stock level from the database determines the number of products which can be added to the basket.

Homepage             |  Product Page
:-------------------------:|:-------------------------:
![](src/assets/homepage.png) |  ![](src/assets/product.png)

## Usage
* Create a database in postgresql called "golden-shoe"
* Open terminal/shell in the root folder and start the backend

&emsp; `java -jar target/spring-boot-angular-1.0.jar`

* Open terminal/shell in the root folder and start the frontend

&emsp; `cd src/main/js/ecommerce/dist/frontend && npm start`


* View the page at http://localhost:4200/

## Http Requests
Http request can be made, for example using Postman, as follows:

### Create Product:

POST: http://localhost:8080/api/products/create-product

Example JSON:

{ "name": "Layton Pace Rose Gold", "price" : 59.0, "pictureUrl": "assets/images/Layton Pace Rose Gold.png", "stock": 4 }

{ "name": "Memi Zip Black Croc", "price" : 99.0, "pictureUrl": "assets/images/Memi Zip Black Croc.png", "stock": 6 }

{ "name": "Citi Stride Wing Dark Tan Leather", "price" : 86.0, "pictureUrl": "assets/images/Citi Stride Wing Dark Tan Leather.png", "stock": 8 }

{ "name": "Violet 55 Court Wine Suede", "price" :79.0, "pictureUrl": "assets/images/Violet 55 Court Wine Suede.png", "stock": 0 }

### Delete Product:

DELETE: http://localhost:8080/api/products/delete-product-by-id/1

### Read All Products:

GET: http://localhost:8080/api/products/

### Read By ID:

GET: http://localhost:8080/api/products/readById/1

### Update By ID:

PUT: http://localhost:8080/api/products/update-product-by-id/1

Example JSON:
{ "name": "Layton Pace Rose Gold", "price" : 49.0, "pictureUrl": ""assets/images/Layton Pace Rose Gold.png"", "stock": 2 }

### Backend Testing Coverage Report
![Tux, the Linux mascot](src/assets/coverage.png)
