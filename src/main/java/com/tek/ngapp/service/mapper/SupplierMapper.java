package com.tek.ngapp.service.mapper;

import com.tek.ngapp.domain.*;
import com.tek.ngapp.service.dto.SupplierDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity Supplier and its DTO SupplierDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface SupplierMapper {

    SupplierDTO supplierToSupplierDTO(Supplier supplier);

    List<SupplierDTO> suppliersToSupplierDTOs(List<Supplier> suppliers);

    @Mapping(target = "addresses", ignore = true)
    @Mapping(target = "products", ignore = true)
    Supplier supplierDTOToSupplier(SupplierDTO supplierDTO);

    List<Supplier> supplierDTOsToSuppliers(List<SupplierDTO> supplierDTOs);
}
