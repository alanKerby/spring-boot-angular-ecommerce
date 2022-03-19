package com.alan.ecommerce.service;

import com.alan.ecommerce.exception.ResourceNotFoundException;
import com.alan.ecommerce.model.Product;
import com.alan.ecommerce.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
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
        return (Product) productRepository
          .findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
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
        } else throw new ResourceNotFoundException("ID does not exist, please select an ID from the database");

    }

    @Override
    public List<Product> readAll() {
        return (List<Product>) this.productRepository.findAll();
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
            //return this.repo.saveAndFlush(temp);
            return this.productRepository.save(temp);
        }
        return null;
    }
}
