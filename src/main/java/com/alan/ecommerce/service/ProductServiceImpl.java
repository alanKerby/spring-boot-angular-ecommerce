package com.alan.ecommerce.service;

import com.alan.ecommerce.model.Product;
import com.alan.ecommerce.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {


    private ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProduct(long id) {
        Optional<Product> optionalDrink = this.productRepository.findById(id);
        return optionalDrink.orElse(null);
    }

    @Override
    public Product create(Product product) {
        return this.productRepository.save(product);
    }

    @Override
    public boolean deleteByID(long id) {
        Optional<Product> optionalDrink = this.productRepository.findById(id);
        if (optionalDrink.isPresent()) {
            this.productRepository.deleteById(id);
            return !this.productRepository.existsById(id);
        }
        return false;
    }

    @Override
    public Product updateByID(long id, Product product) {
        Optional<Product> optionalProduct = this.productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product temp = optionalProduct.get();
            temp.setName(product.getName());
            temp.setPrice(product.getPrice());
            temp.setStock(product.getStock());
            temp.setPictureUrl(product.getPictureUrl());
            return this.productRepository.save(temp);
        }
        return null;
    }
}
