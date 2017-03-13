package com.tek.ngapp.service;

import com.tek.ngapp.service.dto.SupplierDTO;
import java.util.List;

/**
 * Service Interface for managing Supplier.
 */
public interface SupplierService {

    /**
     * Save a supplier.
     *
     * @param supplierDTO the entity to save
     * @return the persisted entity
     */
    SupplierDTO save(SupplierDTO supplierDTO);

    /**
     *  Get all the suppliers.
     *  
     *  @return the list of entities
     */
    List<SupplierDTO> findAll();

    /**
     *  Get the "id" supplier.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    SupplierDTO findOne(Long id);

    /**
     *  Delete the "id" supplier.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
