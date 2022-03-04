package com.baeldung.ecommerce.controller;

import com.baeldung.ecommerce.model.Product;
import com.baeldung.ecommerce.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = { "", "/" })
    public @NotNull Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/create-product")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.create(product), HttpStatus.CREATED);
    }

    @DeleteMapping("delete-product-by-id/{id}")
    public ResponseEntity<Boolean> deleteProductByID(@PathVariable Long id) {
        return new ResponseEntity<>(productService.deleteByID(id), HttpStatus.ACCEPTED);
    }

    @GetMapping("read-all-products")
    public ResponseEntity<List<Product>> readAllDrinks() {
        return new ResponseEntity<>(productService.readAll(), HttpStatus.OK);
    }

    @PutMapping("update-product-by-id/{id}")
    public ResponseEntity<Product> updateProductByID(@PathVariable Long id, @RequestBody Product product) {
        return new ResponseEntity<>(productService.updateByID(id, product), HttpStatus.ACCEPTED);
    }


}
