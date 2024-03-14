// import React from 'react'
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { getLocalData } from "./local";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productData } from "./reduux/productSlice";
function App() {
  
  const dispatch = useDispatch();
  // getdata
  useEffect(() => {
    getLocalData().then(v => {
      // send data to product slice
      dispatch(productData({product: v}))
    })
  },[dispatch])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App