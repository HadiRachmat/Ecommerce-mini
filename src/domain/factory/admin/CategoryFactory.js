import Description from '../../valueObject/admin/categoryVo/description.js';
import Name from '../../valueObject/admin/categoryVo/name.js';
import CategoriesEntity from '../../entities/admin/categories/CategoriesEntity.js';

export default class CategoryFactory {
  static async createCategory({
    id,
    name,
    description,
    categoryParentId = null,
  }) {
    const nameVo = new Name(name);
    const descriptionVo = new Description(description);
    return new CategoriesEntity({
      id,
      name: nameVo.name,
      description: descriptionVo.description,
      categoryParentId,
    });
  }
}
