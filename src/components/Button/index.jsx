import React from 'react'

function Button({style,text, handleClick}) {
  return (
    <>
    <button className={`p-2.5 bg-yellow-500 w-full rounded-lg shadow-lg cursor-pointer hover:shadow-none hover:bg-yellow-400 active:bg-yellow-300 flex justify-center font-bold ${style}`} onClick={handleClick}>{text}</button>
    </>
    
  )
}

export default Button;