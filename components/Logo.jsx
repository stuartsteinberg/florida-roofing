import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='text-4xl font-extrabold px-4 w-fit flex-shrink-0 flex flex-col '>
      <Image src={'/logo.jpg'} width={150} height={20} alt='berg-roofing-contractor'  />
      <p className='text-xl tracking-widest '>CCC 1336268</p>
    </div>
  )  
}

export default Logo
