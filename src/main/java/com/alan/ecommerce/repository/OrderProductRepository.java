package com.alan.ecommerce.repository;

import com.alan.ecommerce.model.OrderProduct;
import com.alan.ecommerce.model.OrderProductPK;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}
