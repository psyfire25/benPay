import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { prisma } from '@/prisma/db';
import { redirect } from 'next/navigation';

async function addF(formData) {
        "use server"
        const name = String(formData.get('firm'));
        await prisma.firm.create({ data: { name } });
        redirect("/edit");
}
    
async function addStation(formData) {
        "use server"
        const name = String(formData.get('station'));
        await prisma.station.create({ data: { name } });
        redirect("/edit");
}

async function addPrice(formData) {
        "use server"
        const price = String(formData.get('price'));
        await prisma.price.create({ data: { price } });
        redirect("/edit");
    }

export default async function Edit() {
    const firms = await prisma.firm.findMany();
    const stations = await prisma.station.findMany();
    const prices = await prisma.price.findMany();

  return (
      <div >
          <form action={addF}>
            <h1>Add Firms</h1>
            <div>
             <Label htmlFor="clientName">Add Firm:</Label>
             <Input
            id="firm"
            name="firm"
            />
            <Button>Add</Button>
            </div>
          </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {firms.map((firm) => (
          <form key={firm.id} className=" p-4 shadow rounded-lg flex items-center justify-between">
            <h2 className="text-lg font-semibold">{firm.name}</h2>
            <Button type="submit">Delete</Button>
          </form>
        ))}
          </div>
          <div className="container mx-auto p-4">
              <form action={addStation}>
          <h1 className="text-2xl font-bold mb-4">Add Station</h1>
          <div className=" p-4 shadow rounded-lg flex items-center justify-between">
          <Label htmlFor="clientName" className="block">Add Station:</Label>
          <Input
            id="station"
            name="station"
          />
              <Button>Add</Button>
              </div>
              </form>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stations.map((station) => (
          <div key={station.id} className="p-4 shadow rounded-lg flex items-center justify-between">
            <h2 className="text-lg font-semibold">{station.name}</h2>
            <Button>Delete</Button>
          </div>
        ))}
              </div>
        <div className="container mx-auto p-4">
              <form action={addPrice}>
          <h1 className="text-2xl font-bold mb-4">Add Price</h1>
          <div className=" p-4 shadow rounded-lg flex items-center justify-between">
          <Label htmlFor="clientName" className="block">Add Price:</Label>
          <Input
            id="price"
            name="price"
          />
              <Button>Add</Button>
              </div>
              </form>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {prices.map((price) => (
          <div key={price.id} className="p-4 shadow rounded-lg flex items-center justify-between">
            <h2 className="text-lg font-semibold">{price.price}</h2>
            <Button>Delete</Button>
          </div>
        ))}
          </div>
          </div>
          </div>
          </div>
  );
}
