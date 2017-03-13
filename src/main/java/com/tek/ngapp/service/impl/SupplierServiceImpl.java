package com.tek.ngapp.service.impl;

import com.tek.ngapp.service.SupplierService;
import com.tek.ngapp.domain.Supplier;
import com.tek.ngapp.repository.SupplierRepository;
import com.tek.ngapp.service.dto.SupplierDTO;
import com.tek.ngapp.service.mapper.SupplierMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing Supplier.
 */
@Service
@Transactional
public class SupplierServiceImpl implements SupplierService{

    private final Logger log = LoggerFactory.getLogger(SupplierServiceImpl.class);
    
    private final SupplierRepository supplierRepository;

    private final SupplierMapper supplierMapper;

    public SupplierServiceImpl(SupplierRepository supplierRepository, SupplierMapper supplierMapper) {
        this.supplierRepository = supplierRepository;
        this.supplierMapper = supplierMapper;
    }

    /**
     * Save a supplier.
     *
     * @param supplierDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public SupplierDTO save(SupplierDTO supplierDTO) {
        log.debug("Request to save Supplier : {}", supplierDTO);
        Supplier supplier = supplierMapper.supplierDTOToSupplier(supplierDTO);
        supplier = supplierRepository.save(supplier);
        SupplierDTO result = supplierMapper.supplierToSupplierDTO(supplier);
        return result;
    }

    /**
     *  Get all the suppliers.
     *  
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<SupplierDTO> findAll() {
        log.debug("Request to get all Suppliers");
        List<SupplierDTO> result = supplierRepository.findAll().stream()
            .map(supplierMapper::supplierToSupplierDTO)
            .collect(Collectors.toCollection(LinkedList::new));

        return result;
    }

    /**
     *  Get one supplier by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public SupplierDTO findOne(Long id) {
        log.debug("Request to get Supplier : {}", id);
        Supplier supplier = supplierRepository.findOne(id);
        SupplierDTO supplierDTO = supplierMapper.supplierToSupplierDTO(supplier);
        return supplierDTO;
    }

    /**
     *  Delete the  supplier by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Supplier : {}", id);
        supplierRepository.delete(id);
    }
}
