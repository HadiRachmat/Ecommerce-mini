import ProductDTO from "../../DTO/admin/ProductDTO.js";

export default class ProductMappers {
  static toDTO(productEntity) {
    return ProductDTO.productEntityToDTO(productEntity);
  }
}