import Header from '@/components/Header'
// import { Coffee } from '../typings'
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

// Get GET request from backend api call
async function getData() {
  const res = await fetch("https://7r7t215usd.execute-api.us-east-1.amazonaws.com/coffee/coffee-drinks", {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

return res.json()
}

export default async function Home() {
  // const response = await fetch("http://localhost:3000/api/coffee-drinks");
  // const products: Coffee[] = await response.json();
  const products = await getData()
  
  return (
    <main className="overflow-hidden mx-auto bg-[#1E1E1E] text-white">
      <Header />
      <ProductCard products = {products}/>
      <Footer />
    </main>
  );
}
