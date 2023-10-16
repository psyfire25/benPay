-- AlterTable
ALTER TABLE "Invoice" ALTER COLUMN "invoiceNo" DROP DEFAULT;
DROP SEQUENCE "invoice_invoiceno_seq";
