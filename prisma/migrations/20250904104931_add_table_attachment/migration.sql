/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "private"."users" DROP COLUMN "name",
ADD COLUMN     "username" VARCHAR(100) NOT NULL;

-- CreateTable
CREATE TABLE "private"."attachment" (
    "id" SERIAL NOT NULL,
    "filename" VARCHAR(100) NOT NULL,
    "filePath" VARCHAR(255) NOT NULL,
    "filetype" VARCHAR(50) NOT NULL,
    "attachmentableId" INTEGER NOT NULL,
    "attachmentableType" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "attachment_pkey" PRIMARY KEY ("id")
);
