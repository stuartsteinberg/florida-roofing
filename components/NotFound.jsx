import React from 'react'

const NotFound = ({title="Something missing."}) => {
    return (
        <div className='h-screen flex flex-col justify-center items-center text-white'>
            <section className=" ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl ">{title}</p>
                        <p className="mb-4 text-lg font-light ">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                        <a href="#" className="inline-flex  bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotFound