export default class ProductEntity {
  constructor({ id, name, description, price, stock, categoryId, subCategoryId, subCategory, category}) {
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

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  getStock() {
    return this.stock;
  }

  getCategoryId() {
    return this.categoryId;
  }

  getSubCategoryId() {
    return this.subCategoryId;
  }

  getSubCategory(){
    return this.subCategory;
  }

  getCategory() {
    return this.category;
  }
}
