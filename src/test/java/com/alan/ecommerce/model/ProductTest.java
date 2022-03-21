package com.alan.ecommerce.model;

import org.junit.jupiter.api.Test;
import nl.jqno.equalsverifier.EqualsVerifier;

class ProductTest {

    @Test
    void testEquals() {
        EqualsVerifier.forClass(Product.class).usingGetClass().verify();
    }
}