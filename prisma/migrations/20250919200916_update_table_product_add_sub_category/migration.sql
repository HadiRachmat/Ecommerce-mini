-- AlterTable
ALTER TABLE "private"."products" ADD COLUMN     "subCategoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "private"."products" ADD CONSTRAINT "products_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "private"."categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
