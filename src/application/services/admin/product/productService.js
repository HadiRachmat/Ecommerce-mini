import ProductRepository from '../../../../infrastructure/repository/admin/ProductRepository.js';
import ProductFactory from '../../../../domain/factory/admin/ProductFactory.js';
import ProductMappers from '../../../../infrastructure/mappers/admin/ProductMappers.js';
import AttachmentRepository from '../../../../infrastructure/repository/admin/attachmentRepository.js';
import AdminAttachmentFactory from '../../../../domain/factory/admin/AdminAttachmentFactory.js';
import AdminAttachmentMapper from '../../../../infrastructure/mappers/admin/AdminAttachmentMapper.js';
import CategoryRepository from '../../../../infrastructure/repository/admin/CategoriesRepository.js';
import { ResponseError } from '../../../../error/ResponseError.js';

const createProduct = async (request, files) => {
  const category = await CategoryRepository.getCategoryById(request.categoryId);
  if (!category) {
    throw new ResponseError(404, 'Category not found');
  }

  const productEntity = ProductFactory.create({ ...request });
  const product = await ProductRepository.create(productEntity);
  if (!product) {
    throw new ResponseError(500, 'Failed to create product');
  }
  let attachment = null;
  if (files && files.length > 0) {
    for (const file of files) {
      const attachmentEntity = await AdminAttachmentFactory.createAttachment({
        filename: file.originalname,
        filePath: file.path,
        filetype: file.mimetype,
        filesize: file.size,
        attachmentableId: product.id,
        attachmentableType: 'products',
      });
      if (!attachmentEntity) {
        throw new ResponseError(500, 'Failed to create attachment entity');
      }
      attachment = await AttachmentRepository.createAttachment(attachmentEntity);
      if (!attachment) {
        throw new ResponseError(500, 'Failed to create attachment');
      }
    }
  }

  const finalData = {
    message: 'Product created successfully',
    product: ProductMappers.toDTO(product),
    attachment:
      files && files.length > 0
        ? files.map((file) =>
            AdminAttachmentMapper.attachmentFilePathDTO({ filePath: attachment.getFilepath() })
          )
        : [],
  };

  return finalData;
};

export default {
  createProduct,
};
