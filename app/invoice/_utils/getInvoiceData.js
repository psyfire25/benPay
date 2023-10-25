export async function fetchInvoiceData() {
  const response = await fetch('../../api/invoice.js'); // Adjust the API endpoint as needed
  if (!response.ok) {
    throw new Error('Failed to fetch invoice data');
  }
  return response.json();
}