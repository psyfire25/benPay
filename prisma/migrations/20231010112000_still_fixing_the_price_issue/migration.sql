/*
  Warnings:

  - Made the column `expenses` on table `Invoice` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Invoice" ALTER COLUMN "mileage" SET DATA TYPE TEXT,
ALTER COLUMN "expenses" SET NOT NULL,
ALTER COLUMN "expenses" SET DATA TYPE TEXT;
