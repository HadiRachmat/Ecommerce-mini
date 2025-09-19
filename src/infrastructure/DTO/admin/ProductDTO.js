export default class ProductDTO {
  constructor({ id, name, description, price, stock, categoryId, subCategoryId, subCategory, category }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.categoryId = categoryId;
    this.category = category;
    this.subCategoryId = subCategoryId;
    this.subCategory = subCategory;
  }
  static productEntityToDTO(product) {
    return new ProductDTO({
      id: product.getId(),
      name: product.getName(),
      description: product.getDescription(),
      price: product.getPrice(),
      stock: product.getStock(),
      categoryId: product.getCategoryId(),
      category: product.getCategory(),
      subCategoryId: product.getSubCategoryId(),
      subCategory: product.getSubCategory(),
    });
  }
}
