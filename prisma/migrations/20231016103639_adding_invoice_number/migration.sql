/*
  Warnings:

  - Added the required column `invoiceNo` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "invoiceNo" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Search" (
    "id" SERIAL NOT NULL,
    "query" TEXT NOT NULL,

    CONSTRAINT "Search_pkey" PRIMARY KEY ("id")
);
