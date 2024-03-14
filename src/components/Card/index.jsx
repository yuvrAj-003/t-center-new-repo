import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
function Card({image, title, price, style}) {
  return (
    <>
    <div className={`mt-5 relative flex flex-col rounded-xl shadow-lg w-44 h-72 m-3 md:w-72 md:h-96 ${style}`}>
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl flex justify-center">
      <Link to={`/${title.toLowerCase()}`}>
        <img src={image} alt="image" className='h-full w-full'/>
      </Link>
      <button
      className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      >
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
        </svg>
      </span>
      </button>
      </div>
      <div className="p-3 px-6">
      <div className="flex items-center justify-between">
      <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
        {title}
      </h5>
      <p className="flex items-center gap-1.5 font-sans text-base font-normal text-blue-gray-900">
        Rs {price}
      </p>
      </div>
      </div>
      <div className="p-3">
      <Button text="ADD TO CART"/>
      </div>
    </div>
    </>
  )
}

export default Card