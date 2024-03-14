import React from 'react'
import Input from '../Input'
import Button from '../Button'
function Search() {
  return (
    <div className='w-3/4 flex mt-5 items-center justify-between relative left-2/4 -translate-x-2/4'>
        <Input text="search" style="w-full text-sm"/>
    </div>
  )
}

export default Search