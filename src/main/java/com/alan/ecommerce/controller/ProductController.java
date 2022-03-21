package com.alan.ecommerce.controller;

import com.alan.ecommerce.model.Product;
import com.alan.ecommerce.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

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

    @GetMapping(value = { "readById/{id}"})
    public Product getProduct(@PathVariable Long id) {
        return productService.getProduct(id);
    }

    @PostMapping("/create-product")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.create(product), HttpStatus.CREATED);
    }

    @DeleteMapping("delete-product-by-id/{id}")
    public ResponseEntity<Boolean> deleteProductByID(@PathVariable Long id) {
        return new ResponseEntity<>(productService.deleteByID(id), HttpStatus.ACCEPTED);
    }

    @PutMapping("update-product-by-id/{id}")
    public ResponseEntity<Product> updateProductByID(@PathVariable Long id, @RequestBody Product product) {
        return new ResponseEntity<>(productService.updateByID(id, product), HttpStatus.ACCEPTED);
    }
}
