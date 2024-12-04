import AppLayout from '@/components/AppLayout'
import React from 'react'

const page = () => {
    return (
        <AppLayout>
            <div className="h-[60vh] w-full bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat relative text-white border-b-2 border-primary">
                <div className="bg-gradient-to-b to-black/90 from-black/50 absolute w-full h-full" />
                <div className="flex flex-col w-full h-full justify-center items-center z-10 relative  ">
                    <div className="flex flex-col gap-2 max-w-6xl mx-auto " >
                        <p className="font-bold " > Excellence in Every Roof</p>
                        <h1 className="text-5xl" >Florida Elite Roofing Gallery</h1>
                        <hr className="h-1 mt-2  border-none  bg-primary" />
                        <div className="max-w-4xl" >
                            <p className="" >A picture is worth a thousand words, and our roofing photo gallery tells a story of enduring excellence. At Florida Elite Roofing, every roof we build, repair, or maintain in Florida is a testament to our pledge of quality and resilience.Browse our comprehensive gallery and witness the transformative power of expert roofing through the eyes of our satisfied residential and commercial clients. These visuals showcase the exceptional workmanship and attention to detail that define our commitment to delivering outstanding results.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className='max-w-6xl mx-auto grid grid-cols-4 p-4 gap-6   ' >
                <div className='border border-primary h-[300px] rounded-md '  />
                <div className='border border-primary h-[300px] rounded-md '  />
                <div className='border border-primary h-[300px] rounded-md '  />
                <div className='border border-primary h-[300px] rounded-md '  />
                <div className='border border-primary h-[300px] rounded-md '  />
                <div className='border border-primary h-[300px] rounded-md '  />
                <div className='border border-primary h-[300px] rounded-md '  />
                <div className='border border-primary h-[300px] rounded-md '  />
                <div className='border border-primary h-[300px] rounded-md '  />
                <div className='border border-primary h-[300px] rounded-md '  />
                <div className='border border-primary h-[300px] rounded-md '  />
                <div className='border border-primary h-[300px] rounded-md '  />
            </section>

        </AppLayout>

    )
}

export default page
