package com.alan.ecommerce.service;

import com.alan.ecommerce.model.Product;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.List;

@Validated
public interface ProductService {

    @NotNull Iterable<Product> getAllProducts();

    Product getProduct(@Min(value = 1L, message = "Invalid product ID.") long id);

    Product save(Product product);

    Product create(Product product);

    boolean deleteByID(long id);

    List<Product> readAll();

    Product updateByID(long id, Product product);
}
