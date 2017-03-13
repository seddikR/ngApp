package com.tek.ngapp.repository;

import com.tek.ngapp.domain.Supplier;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Supplier entity.
 */
@SuppressWarnings("unused")
public interface SupplierRepository extends JpaRepository<Supplier,Long> {

}
