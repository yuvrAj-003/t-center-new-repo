import React from 'react'

function Button({style,children, handleClick}) {
  return (
    <>
    <button className={`p-2.5 bg-yellow-500 w-full shadow-md cursor-pointer hover:shadow-none hover:bg-yellow-300 active:bg-yellow-300 flex justify-center font-bold ${style}`} onClick={handleClick}>{children}</button>
    </>
    
  )
}

export default Button;