-- AlterTable
CREATE SEQUENCE invoice_invoiceno_seq;
ALTER TABLE "Invoice" ALTER COLUMN "invoiceNo" SET DEFAULT nextval('invoice_invoiceno_seq');
ALTER SEQUENCE invoice_invoiceno_seq OWNED BY "Invoice"."invoiceNo";
