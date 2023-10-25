import { prisma } from '@/prisma/db';
import { Image } from 'next/image'
import { format } from 'date-fns'; // Import the format function from date-fns library

export default async function Invoice() {

  const invoiceData = await prisma.invoice.findFirst();
  // Format createdAt date to a string
  const formattedDate = invoiceData.createdAt
    ? format(new Date(invoiceData.createdAt), 'MMMM dd, yyyy') // Adjust the date format as per your requirements
    : '';
  
  const total = invoiceData.price 

  return (
    <main className="container mx-auto mt-8 bg-white text-black">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold">B A Schiller LTD.</h1>
      </div>

      <div className="flex">
        <div className="w-1/2 p-4">
          <p>Date: {formattedDate}</p>
          <p>Invoice Number: {invoiceData.invoiceNo}</p>
        </div>
        <div className="w-1/2 bg-gray-800 text-white p-4 text-right">
          <p>INVOICE</p>
          <p>Mobile: 07779643996</p>
          <p>Email: ben.a.schiller@gmail.com</p>
          <p>B A Schiller LTD</p>
          <p>7A Augustus Road</p>
          <p>Edgbaston</p>
          <p>Birmingham</p>
          <p>B15 3NB</p>
          <p>Companies No: 10713713</p>
        </div>
      </div>

      <table className="w-full mt-4">
        <tbody>
          <tr>
            <td>Expenses:{invoiceData.expenses}</td>
          </tr>
          <tr>
            <td>Fees:{invoiceData.expenses}</td>
          </tr>
          <tr>
            <td>Firm: {invoiceData.firm}</td>
          </tr>
          <tr>
            <td>Client: {invoiceData.clientName}</td>
          </tr>
          <tr>
            <td>Station: {invoiceData.policeStation}</td>
          </tr>
          <tr>
            <td>Price: {invoiceData.price}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4">
        <p>GRAND TOTAL: {total}</p>
      </div>
      {/* <div><Image width={500} height={100} src="public/signature.png" alt="Signature" className="w-20 h-auto mr-4" /></div> */}
      <div className="flex items-center mt-8">
        <div className="flex items-center mt-8">
          <p>Benjamin A Schiller</p>
          <p>(all cheques payable to B A Schiller Limited)</p>
          <p>Acc No: 12143550</p>
          <p>Sort Code: 60-83-71</p>
          <p>All payments must be made no later than 28 days after the issue date of this invoice (unless a shorter time frame has been agreed).</p>
        </div>
      </div>
    </main>
  );
};


