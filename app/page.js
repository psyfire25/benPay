import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { redirect } from 'next/navigation';
import { prisma } from '@/prisma/db';

async function addInvoice(formData) {
    "use server"
  const clientName = String(formData.get('clientName'));
  const firm = String(formData.get('firm'));
  const policeStation = String(formData.get('policeStation'));
  const price = String(formData.get('price'));
  const mileage = String(formData.get('mileage'));
  const expenses = String(formData.get('expenses'));

  const lastInvoice = await prisma.invoice.findFirst();
  
  const lastInvoiceNumber = lastInvoice.invoiceNo ? lastInvoice.invoiceNo : 0;
  const newInvoiceNumber = lastInvoiceNumber + 1;
 
  await prisma.invoice.create({
    data: {
      invoiceNo: newInvoiceNumber,
      clientName,
      firm,
      policeStation,
      price,
      mileage,
      expenses,
    }
  });
    redirect("/invoice");
}


export default async function Home() {
  const firms = await prisma.firm.findMany();
  const stations = await prisma.station.findMany();
  const price = await prisma.price.findMany();

  // console.log(invNo)

  return (
    <main className='flex w-full justify-center'>
      <form action={addInvoice} className='w-2/3'>
        {/* <div>
          <Label htmlFor='invoiceNumber'>Invoice Number</Label>
          <p>{newInvoiceNumber}</p>
        </div> */}
        <div>
          <Label htmlFor="clientName">Client Name:</Label>
          <Input
            required type="text"
            id="clientName"
            name="clientName"
          />
          </div>
          <div className="mb-4">
            <Label htmlFor="firm">Firm:</Label>
            <Select required name="firm">
              <SelectTrigger>
                <SelectValue placeholder="Firm" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                      {firms.map((firm) => (
              <SelectItem key={firm.id} value={firm.name}>
                {firm.name}
              </SelectItem>
            ))}
                </SelectGroup>
              </SelectContent>
            </Select>
        </div>
        <div className="mb-4">
          <Label htmlFor="policeStation">Police Station:</Label>
          <Select required name="policeStation">
              <SelectTrigger>
                <SelectValue placeholder="Station" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {stations.map((station) => (
              <SelectItem key={station.id} value={station.name}>
                {station.name}
              </SelectItem>
            ))}
                </SelectGroup>
              </SelectContent>
            </Select>
        </div>
        <div className="mb-4">
          <Label htmlFor="price">Prices:</Label>
          <Select required name="price">
              <SelectTrigger>
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {price.map((price) => (
              <SelectItem key={price.id} value={price.price}>
                {price.price}
              </SelectItem>
            ))}
                </SelectGroup>
              </SelectContent>
            </Select>
        </div>
        <div className="mb-4">
          <Label htmlFor="mileage">Mileage (@45p a mile):</Label>
          <Input
            required type="number"
            id="mileage"
            name="mileage"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="expenses">Expenses:</Label>
          <Input
            required type="number"
            id="expenses"
            name="expenses"
          />
        </div>
        <Button type="submit" className='self-center' >
          Submit
        </Button>
      </form>
    </main>
  )
}
