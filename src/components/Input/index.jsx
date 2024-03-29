import React from 'react'

function Input({style, text}) {
  return (
    <>
    <input type='text' className={`p-2 shadow-md outline-none ${style}`} placeholder={text} />
    </>
  )
}

export default Input