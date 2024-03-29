// import React from 'react'
import { useParams } from "react-router-dom"
import Navbar from "../../components/NavBar";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
function Product() {
  useEffect(() => {
    window.scroll(0,0)
  },[])

  var { id } = useParams();
  const selector = useSelector(state => state.product.value);
  const product = selector.product ?? {};
  
  return (
    <div>
      <Navbar />
      <div className="flex mt-6 product p-0 md:p-3 mb-6">
        {/* left container  */}
        <div className="product-left relative mx-4 mt-4 overflow-hidden text-white flex justify-center">
          <img src={product[id]?.image} alt="image" className="h-2/4 w-2/4"/>
        </div>

        {/* middle container  */}
        <div className="product-middle mx-0 md:mx-5 flex flex-col justify-center">
          <h1 className="text-xl font-bold">{product[id]?.name.toUpperCase()}</h1>
          <br />
          <p className="text-lg w-3/4">{product[id]?.description}</p>
          <br />

          <div className="flex buttons w-2/4">
            <p className="text-lg p-3 w-full">Rs. {product[id]?.price}</p>
            <Button style="w-fit h-fit flex items-center me-3">Add To Wishlist</Button>
          </div>
        </div>

        {/* right container  */}
      </div>
    </div>
  )
}

export default Product