package com.alan.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class EcommerceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EcommerceApplication.class, args);
    }

//    @Bean
//    CommandLineRunner runner(ProductService productService) {
//        return args -> {
//            productService.save(new Product(1L, "TV Set", 300.00, "http://placehold.it/200x100", 1L));
//        };
//    }
}
