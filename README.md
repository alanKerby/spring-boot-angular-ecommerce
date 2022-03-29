# Ecommerce Demo Project

The aim of the project to develop a Spring Boot application programming interface (API) with create/read/update/delete (CRUD) functionality with an Angular framework frontend and mySQL database. Postman can be used to utilise CRUD functionality. All products in the database are displayed on the homepage, clicking a product navigates to the product page, products can be added to the basket up to the stock limit.

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

Below are screenshots of Postman and MySQL to demonstrate CRUD functionality.


### Backend Testing Coverage Report
![Tux, the Linux mascot](src/assets/coverage.png)
### Authors and Acknowledgment
Developed by Alan Kerby with some use of an [Angular template](https://www.baeldung.com/spring-angular-ecommerce) and a [Bootstrap template](https://themewagon.com/themes/free-bootstrap-4-html5-ecommerece-website-template-shoppers/)

