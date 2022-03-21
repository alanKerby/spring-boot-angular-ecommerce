package com.alan.ecommerce.controller;

import com.alan.ecommerce.model.Product;
import com.alan.ecommerce.service.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest

public class ProductControllerUnitTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private ProductService productService;

    @Test
    public void createProductTest() throws Exception {
        Product productToCreate = new Product( "golden shoe", 39.95, "NA", 33L  );
        String entryAsJSON = this.objectMapper.writeValueAsString(productToCreate);
        Mockito.when(this.productService.create(productToCreate)).thenReturn(productToCreate);
        mockMvc.perform(post("/api/products/create-product/")
                .contentType(MediaType.APPLICATION_JSON)
                .content(entryAsJSON))
                .andExpect(status().isCreated())
                .andExpect(content().json(entryAsJSON));
    }

    @Test
    public void readAllProductsTest() throws Exception {
        Product prod1 = new Product(1L,"golden shoe", 39.95, "NA", 33L);
        Product prod2 = new Product(8L,"golden boot", 79.95, "NA", 56L);
        List<Product> productList = Arrays.asList(prod1, prod2);
        String entryAsJSON = this.objectMapper.writeValueAsString(productList);
        Mockito.when(this.productService.getAllProducts()).thenReturn(productList);
        mockMvc.perform(get("/api/products/"))
                .andExpect(status().isOk())
                .andExpect(content().json(entryAsJSON));
    }

    @Test
    public void readProductByIDTest() throws Exception {
        long id = 5;
        Product product = new Product(5L,"golden shoe", 39.95, "NA", 33L);
        String entryAsJSON = this.objectMapper.writeValueAsString(product);
        Mockito.when(this.productService.getProduct(id)).thenReturn(product);
        mockMvc.perform(get("/api/products/readById/" + id))
                .andExpect(content().json(entryAsJSON));
    }

    @Test
    public void updateProductByIDTest() throws Exception {
        long id = 5L;
        Product productWithChanges = new Product(5L,"golden shoe", 39.95, "NA", 33L);
        String productWithChangesAsJSON = this.objectMapper.writeValueAsString(productWithChanges);
        Mockito.when(this.productService.updateByID(id, productWithChanges)).thenReturn(productWithChanges);
        mockMvc.perform(put("/api/products/update-product-by-id/" + id)
                .contentType(MediaType.APPLICATION_JSON)
                .content(productWithChangesAsJSON))
                .andExpect(status().isAccepted())
                .andExpect(content().json(productWithChangesAsJSON));
    }

    @Test
    public void deleteDrinkByIDTest() throws Exception {
        long id = 5L;
        Mockito.when(this.productService.deleteByID(id)).thenReturn(true);
        mockMvc.perform(delete("/api/products/delete-product-by-id/" + id))
                .andExpect(status().isAccepted())
                .andExpect(content().string("true"));
    }
}
