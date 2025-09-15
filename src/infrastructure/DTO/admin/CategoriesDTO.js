export default class CategoriesDTO {
  constructor({
    id,
    name,
    description,
    categoryParentId = null,
    categoriesChildren = [],
    products = [],
  } = {}) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.categoryParentId = categoryParentId;
    this.categoriesChildren = categoriesChildren;
    this.products = products;
  }
  static categoriesEntityToDTO(category){
    return new CategoriesDTO({
      id: category.getId(),
      name: category.getName(),
      description: category.getDescription(),
      categoryParentId: category.getCategoryParentId(),
      categoriesChildren: category.getCategoriesChildren(),
      products: category.getProducts(),
    })
  }
}