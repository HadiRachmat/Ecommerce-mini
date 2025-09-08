/*
  Warnings:

  - Added the required column `filesize` to the `attachment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "private"."attachment" ADD COLUMN     "filesize" INTEGER NOT NULL;
