package com.tek.ngapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.tek.ngapp.service.SupplierService;
import com.tek.ngapp.web.rest.util.HeaderUtil;
import com.tek.ngapp.service.dto.SupplierDTO;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * REST controller for managing Supplier.
 */
@RestController
@RequestMapping("/api")
public class SupplierResource {

    private final Logger log = LoggerFactory.getLogger(SupplierResource.class);

    private static final String ENTITY_NAME = "supplier";
        
    private final SupplierService supplierService;

    public SupplierResource(SupplierService supplierService) {
        this.supplierService = supplierService;
    }

    /**
     * POST  /suppliers : Create a new supplier.
     *
     * @param supplierDTO the supplierDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new supplierDTO, or with status 400 (Bad Request) if the supplier has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/suppliers")
    @Timed
    public ResponseEntity<SupplierDTO> createSupplier(@RequestBody SupplierDTO supplierDTO) throws URISyntaxException {
        log.debug("REST request to save Supplier : {}", supplierDTO);
        if (supplierDTO.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new supplier cannot already have an ID")).body(null);
        }
        SupplierDTO result = supplierService.save(supplierDTO);
        return ResponseEntity.created(new URI("/api/suppliers/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /suppliers : Updates an existing supplier.
     *
     * @param supplierDTO the supplierDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated supplierDTO,
     * or with status 400 (Bad Request) if the supplierDTO is not valid,
     * or with status 500 (Internal Server Error) if the supplierDTO couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/suppliers")
    @Timed
    public ResponseEntity<SupplierDTO> updateSupplier(@RequestBody SupplierDTO supplierDTO) throws URISyntaxException {
        log.debug("REST request to update Supplier : {}", supplierDTO);
        if (supplierDTO.getId() == null) {
            return createSupplier(supplierDTO);
        }
        SupplierDTO result = supplierService.save(supplierDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, supplierDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /suppliers : get all the suppliers.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of suppliers in body
     */
    @GetMapping("/suppliers")
    @Timed
    public List<SupplierDTO> getAllSuppliers() {
        log.debug("REST request to get all Suppliers");
        return supplierService.findAll();
    }

    /**
     * GET  /suppliers/:id : get the "id" supplier.
     *
     * @param id the id of the supplierDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the supplierDTO, or with status 404 (Not Found)
     */
    @GetMapping("/suppliers/{id}")
    @Timed
    public ResponseEntity<SupplierDTO> getSupplier(@PathVariable Long id) {
        log.debug("REST request to get Supplier : {}", id);
        SupplierDTO supplierDTO = supplierService.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(supplierDTO));
    }

    /**
     * DELETE  /suppliers/:id : delete the "id" supplier.
     *
     * @param id the id of the supplierDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/suppliers/{id}")
    @Timed
    public ResponseEntity<Void> deleteSupplier(@PathVariable Long id) {
        log.debug("REST request to delete Supplier : {}", id);
        supplierService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
