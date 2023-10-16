export async function createInvoice(formData) {
  try {
    const createdInvoice = await prisma.invoice.create({
      data: {
        clientName: formData.clientName,
        firm: formData.firm,
        policeStation: formData.policeStation,
        price: parseFloat(formData.price),
        mileage: parseFloat(formData.mileage),
        expenses: parseFloat(formData.expenses),
      },
    });

    return createdInvoice;
  } catch (error) {
    throw new Error('Error creating invoice: ' + error.message);
  }
}