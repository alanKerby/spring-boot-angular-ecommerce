package com.alan.ecommerce.controller;

import com.alan.ecommerce.model.Product;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@Sql(scripts = {"classpath:spring-boot-angular-alan-schema.sql", "classpath:spring-boot-angular-alan.sql"}, executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD)
@ActiveProfiles("test")
public class ProductControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void createProductIntegrationTest() throws Exception {
        Product entry = new Product(3L, "shoe", 45.0, "noImage", 5L);
        Product result = new Product(3L, "shoe", 45.0, "noImage", 5L);
        String entryAsJSON = this.objectMapper.writeValueAsString(entry);
        String resultAsJSON = this.objectMapper.writeValueAsString(result);
        mockMvc.perform(post("/api/products/create-product")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(entryAsJSON))
                .andExpect(status().isCreated())
                .andExpect(content().json(resultAsJSON));
    }

    @Test
    public void readAllProductsIntegrationTest() throws Exception {
        Product drink1 = new Product(1L,"shoe",11.0,"none",4l);
        Product drink2 = new Product(2L,"boot",6.0,"none",5l);
        List<Product> drinksInDatabase = Arrays.asList(drink1, drink2);
        String drinksInDatabaseAsJSON = this.objectMapper.writeValueAsString(drinksInDatabase);
        mockMvc.perform(get("/api/products/"))
                .andExpect(status().isOk())
                .andExpect(content().json(drinksInDatabaseAsJSON));
    }

    @Test
    public void readProductByIDIntegrationTest() throws Exception {
        long id = 2L;
        Product product = new Product(2L,"boot",6.0,"none",5l);
        String entryAsJSON = this.objectMapper.writeValueAsString(product);
        mockMvc.perform(get("/api/products/readById/" + id))
                .andExpect(content().json(entryAsJSON));
    }

    @Test
    public void updateProductByIDIntegrationTest() throws Exception {
        long id = 2L;
        Product product2WithChanges = new Product(2L,"another boot",6.0,"none",5l);
        String productWithChangesAsJSON = this.objectMapper.writeValueAsString(product2WithChanges);
        mockMvc.perform(put("/api/products/update-product-by-id/" + id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(productWithChangesAsJSON))
                .andExpect(status().isAccepted())
                .andExpect(content().json(productWithChangesAsJSON));
    }

    @Test
    public void deleteProductByIDIntegrationTest() throws Exception {
        long id = 2L;
        mockMvc.perform(delete("/api/products/delete-product-by-id/" + id))
                .andExpect(status().isAccepted())
                .andExpect(content().string("true"));
    }
}
