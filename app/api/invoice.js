import { prisma } from '@/prisma/db';

export default async function handler(req, res) {
  try {
    const invoiceData = prisma.invoice.findFirst();
    res.status(200).json(invoiceData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}