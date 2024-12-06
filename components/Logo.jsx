import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='text-4xl font-extrabold px-4 w-fit flex-shrink-0  '>
      <Image src={'/logo.jpg'} width={150} height={20}  />
    </div>
  )  
}

export default Logo
