export default class CategoriesEntity {
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
    this.categoriesChildren =  categoriesChildren.map(
      (child) => new CategoriesEntity(child) // recursive mapping biar nested
    );
    this.products = products;
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

  getCategoryParentId() {
    return this.categoryParentId;
  }

  getCategoriesChildren() {
    return this.categoriesChildren;
  }

  getProducts() {
    return this.products;
  }
}
