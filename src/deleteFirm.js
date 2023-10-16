export default async function deleteFirm(id) {
  try {
    await prisma.firm.delete({
      where: {
        id: {
          equals: id,
        },
      },
    });
    redirect("/edit");
    // Handle successful deletion, e.g., show a success message
  } catch (error) {
    // Handle errors, e.g., show an error message to the user
    console.error('Error deleting firm:', error);
    // Optionally, you can rethrow the error if you want to propagate it further
    throw error;
  }
}