import CategoriesDTO from "../../DTO/admin/CategoriesDTO.js";

export default class CategoriesMappers {
  static categoriesDTO (category){
    return CategoriesDTO.categoriesEntityToDTO(category);
  }
}