import Name from '../../valueObject/admin/productVo/Name.js';
import Description from '../../valueObject/admin/productVo/Description.js';
import Price from '../../valueObject/admin/productVo/Price.js';
import Stock from '../../valueObject/admin/productVo/Stock.js';
import CategoryId from '../../valueObject/admin/productVo/CategoryId.js';
import SubCategoryId from '../../valueObject/admin/productVo/subCategoryId.js';
import { ResponseError } from '../../../error/ResponseError.js';
import ProductEntity from '../../entities/admin/product/ProductEntity.js';

export default class ProductFactory {
  static create({ name, description, price, stock, categoryId, subCategoryId }) {
    const nameVo = new Name(name);
    const descriptionVo = new Description(description);
    const priceVo = new Price(price?.toString());
    const stockVo = new Stock(stock);
    const categoryIdVo = new CategoryId(categoryId);
    const subCategoryIdVo = new SubCategoryId(subCategoryId);

    const product = new ProductEntity({
      name: nameVo.name,
      description: descriptionVo.description,
      price: priceVo.price,
      stock: stockVo.stock,
      categoryId: categoryIdVo.categoryId,
      subCategoryId: subCategoryIdVo.subCategoryid,
    });
    return product;
  }
}
