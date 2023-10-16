
export async function formOps() {
    
    const firms = await prisma.firm.findMany();
    const stations = await prisma.station.findMany();
    const prices = await prisma.price.findMany();

    return {firms, stations, prices}
    
}