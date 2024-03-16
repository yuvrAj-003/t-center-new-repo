import React from 'react'
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Card from "../../components/Card";
import CarouselDefault from "../../components/CarouselDefault";
import { useSelector } from "react-redux";
function Home() {
  const selector = useSelector(state => state.product.value);
  const productObj = selector.product ?? {};
  const products = Object.values(productObj)
  // const products = Object.values(selector.product.products);

  return (
    <>
    <Navbar />
    <CarouselDefault />
    <Search />
    <div className="grid grid-cols-2 justify-items-center xl:grid-cols-4 md:grid-cols-3">
      {products.map((v,i) => <Card key={i} title={v.name} image={v.image} price={v.price}/>)}
    </div>
    </>
    
  )
}

export default Home