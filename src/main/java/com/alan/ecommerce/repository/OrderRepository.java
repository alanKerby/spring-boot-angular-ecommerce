package com.alan.ecommerce.repository;

import com.alan.ecommerce.model.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {
}
