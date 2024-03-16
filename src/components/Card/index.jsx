import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
function Card({image, title, price, style}) {
  return (
    <>
    <div className={`card flex flex-col w-44 h-44 mt-5 md:w-72 md:h-80 ${style}`}>
      <div className="overflow-hidden text-white shadow-md flex justify-center w-full h-full">
      <Link to={`/${title.toLowerCase()}`}>
        <img src={image} alt="image" className='w-full h-full'/>
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
      <div className="mt-3">
      <div className="flex items-center justify-between">
        <p className="block font-sans antialiased font-sns leading-snug tracking-normal text-blue-gray-900">
          {title}
        </p>
        <p className="flex items-center font-sans font-normal text-blue-gray-900">
          Rs {price}
        </p>
      </div>
      </div>
    </div>
    </>
  )
}

export default Card