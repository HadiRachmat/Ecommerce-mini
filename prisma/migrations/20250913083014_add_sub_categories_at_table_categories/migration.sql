-- AlterTable
ALTER TABLE "private"."categories" ADD COLUMN     "categoryParentId" INTEGER;

-- AddForeignKey
ALTER TABLE "private"."categories" ADD CONSTRAINT "categories_categoryParentId_fkey" FOREIGN KEY ("categoryParentId") REFERENCES "private"."categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
