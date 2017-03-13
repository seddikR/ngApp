package com.tek.ngapp.service.mapper;

import com.tek.ngapp.domain.*;
import com.tek.ngapp.service.dto.ProductDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity Product and its DTO ProductDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ProductMapper {

    @Mapping(source = "supplier.id", target = "supplierId")
    @Mapping(source = "category.id", target = "categoryId")
    ProductDTO productToProductDTO(Product product);

    List<ProductDTO> productsToProductDTOs(List<Product> products);

    @Mapping(source = "supplierId", target = "supplier")
    @Mapping(source = "categoryId", target = "category")
    Product productDTOToProduct(ProductDTO productDTO);

    List<Product> productDTOsToProducts(List<ProductDTO> productDTOs);

    default Supplier supplierFromId(Long id) {
        if (id == null) {
            return null;
        }
        Supplier supplier = new Supplier();
        supplier.setId(id);
        return supplier;
    }

    default Category categoryFromId(Long id) {
        if (id == null) {
            return null;
        }
        Category category = new Category();
        category.setId(id);
        return category;
    }
}
