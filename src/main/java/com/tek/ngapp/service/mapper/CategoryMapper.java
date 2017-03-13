package com.tek.ngapp.service.mapper;

import com.tek.ngapp.domain.*;
import com.tek.ngapp.service.dto.CategoryDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity Category and its DTO CategoryDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CategoryMapper {

    CategoryDTO categoryToCategoryDTO(Category category);

    List<CategoryDTO> categoriesToCategoryDTOs(List<Category> categories);

    @Mapping(target = "products", ignore = true)
    Category categoryDTOToCategory(CategoryDTO categoryDTO);

    List<Category> categoryDTOsToCategories(List<CategoryDTO> categoryDTOs);
}
