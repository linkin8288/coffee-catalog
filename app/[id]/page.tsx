import { notFound } from "next/navigation";

async function getData(id: any) {
  const res = await fetch(
    `http://localhost:3000/api/coffee-drinks/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return notFound();
  }

  const product = await res.json();
  return product;
}

const CoffeeDetail = async ({ params }: any) => {
  const product = await getData(params.id);
  
  return (
    <div>Hello
      <h1>{product.name}</h1>
      <p>{product.id}</p>
      <p>{product.sizes}</p>
    </div>
  );
};

export default CoffeeDetail;