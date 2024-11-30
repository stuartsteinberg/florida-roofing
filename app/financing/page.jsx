import AppLayout from '@/components/AppLayout'
import Link from 'next/link'
import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

const financingOptions = [
    {
        title: "In-House Financing",
        text: "Convenient and straightforward."
    },
    {
        title: "PACE Financing",
        text: "Convenient and straightforward."
    },
    {
        title: "Low-Rate Payment Plans",
        text: "Budget-friendly rates designed for you."
    },
    {
        title: "Retail Roof Financing",
        text: "Multiple forms available for commercial projects."
    },
    {
        title: "High Limit Loans",
        text: "Secure up to $100,000 for your roofing needs."
    }
];

const page = () => {
    return (
        <AppLayout>
            <div className="h-[60vh] w-full bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat relative text-white border-b-2 border-primary">
                <div className="bg-gradient-to-b to-black/90 from-black/50 absolute w-full h-full" />
                <div className="flex flex-col w-full h-full justify-center items-center z-10 relative  ">
                    <div className="flex flex-col gap-2 max-w-6xl mx-auto " >
                        <p className="font-bold text-primary" >Loan Solution</p>
                        <h1 className="text-5xl" >Roof Financing Made Simple with Florida Elite Roofing</h1>
                        <hr className="h-1 mt-2  border-none  bg-primary" />
                        <div className="max-w-4xl" >
                            <p className="" >Are you worried about the cost of getting a new roof? At Florida Elite Roofing, we get it. A roof is not just the top of your house; it is the shield that protects everything under it</p>
                        </div>
                    </div>
                </div>
            </div>
            <GridImageText
                data={
                    {
                        title: 'Local Experts with Easy Financing Solutions',
                        text: `As one of the leading local roofing companies that finance, we’re right here in your backyard to offer solutions personalized for you.Our team understands the Florida weather like no other. With our financing options, including in-house financing with low rates and even PACE financing, keeping your home safe doesn’t have to empty your wallet.`

                    }
                }
            />
            <section className=" bg-secondary text-white ">
                <div className="max-w-6xl mx-auto py-12 ">
                    <h2 className="text-4xl text-center text-primary font-semibold " >Our Financing Options</h2>
                    <p className='text-center text-lg my-6 ' >Unlock the possibilities with Florida Elite Roofings flexible financing solutions! We offer a range of options tailored to meet your budget and roofing needs</p>
                    <div className="grid grid-cols-3 gap-6 mt-10">
                    {financingOptions.map((option, index) => (
                            <div
                                key={index}
                                className="border border-transparent hover:border-primary transition-all duration-300 rounded-lg shadow-lg overflow-hidden  bg-black p-10"
                            >
                                <div className="mt-4 flex flex-col gap-2 text-center justify-center items-center ">
                                    <FaRegCheckCircle size={46} className='fill-primary' />
                                    <h2 className="text-xl font-bold">{option.title}</h2>
                                    <p>{option.text}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>




        </AppLayout>

    )
}

export default page


const GridImageTextList = ({ data }) => (
    <section className="max-w-6xl mx-auto py-16 px-6 gap-8 items-center flex text-white">
        {/* Text Content */}
        <div className="space-y-6">
            <h2 className="text-5xl font-bold text-primary">{data.title}</h2>

            {/* Dynamic List Rendering */}
            <ul className="list-disc pl-5  text">
                {data.points.map((point, index) => (
                    <li key={index}>
                        <strong className="text-primary text-2xl">{point?.title}</strong>
                        <p>{point.text} </p>

                    </li>
                ))}
            </ul>


            {/* CTA Button */}
            <div className="mt-20">
                <Link href={'/contact'} className="bg-primary py-3 px-6 rounded-full text-black font-bold">
                    Get In Touch With Us!
                </Link>
            </div>
        </div>

        {/* Image Content */}
        <div className="h-[600px] w-full bg-gray-200 rounded-lg shadow-lg">
            {/* Placeholder for the image */}
        </div>
    </section>
);
const GridImageText = ({ data }) => (
    <section className="max-w-6xl mx-auto py-16 px-6  gap-12 items-center grid grid-cols-2 text-white ">
        <div className={`${data.orientation == 'left' && 'order-2'} h-[600px] w-full bg-gray-200 rounded-lg shadow-lg`}></div>
        <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary">{data.title}</h2>
            <p>{data.text}</p>
            <div className="mt-20" >
                <Link href={'/contact'} className="bg-primary py-3 px-6 rounded-full text-black font-bold ">
                    Get In Touch With Us!
                </Link>
            </div>
        </div>
    </section>
);
const GridCards = ({ data }) => (
    <section className="bg-secondary py-12 relative ">
        <h3 className="text-primary text-center pb-8 text-3xl " >{data.title}</h3>
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto" >
            {
                data.points.map((i, z) => (
                    <div key={z} className="bg-black p-10 border border-transparent z-20 hover:border-primary transition-all duration-300 rounded-md text-center flex flex-col items-center" >
                        {/* <div className="flex-shrink-0 " >{IconSvg.RoofReplacement}</div> */}
                        <h3 className="text-2xl" >{i.title}</h3>
                        <p className="text-white/70 text-sm">{i.text}</p>
                    </div>
                ))
            }
        </div>
        <div className=" w-[300px] h-[300px] bg-primary/80 z-10 absolute -bottom-20 left-1/2 transform -translate-x-1/2 rounded-full blur-[200px]   " />
    </section>
)
const GridCardsImage = ({ data }) => (
    <section className="bg-secondary py-12 relative ">
        <h3 className="text-primary text-center pb-8 text-5xl " >{data.title}</h3>
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto" >
            {
                data.points.map((i, z) => (
                    <div key={z} className="bg-black  border border-transparent z-20 hover:border-primary transition-all duration-300 rounded-md text-center flex flex-col items-center" >
                        <div className=" h-[200px] w-full  rounded-md overflow-hidden relative" >
                            <Image src={'/images/shingles/shingle.webp'} layout="fill" className="p-4 rounded-3xl" alt="shingle" />
                        </div>
                        <div className="p-10">
                            <h3 className="text-2xl" >{i.title}</h3>
                            <p className="text-white/70 text-sm">{i.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className=" w-[300px] h-[300px] bg-primary/80 z-10 absolute -bottom-20 left-1/2 transform -translate-x-1/2 rounded-full blur-[200px]   " />
    </section>
)
const ParallaxImageText = ({ data }) => (
    <div
        className={`p-12 flex items-center  justify-center text-center text-white bg-cover bg-center bg-fixed bg-[url('/images/hero.jpg')] relative  `}>
        <div className="inset-0 absolute bg-black/80" />
        <div className="p-8 rounded-lg max-w-5xl z-10 ">
            <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
            <p className="text-lg">{data.text}</p>
        </div>
    </div>
);
const TextCentered = ({ data }) => (
    <div
        className={`p-12 flex items-center min-h-[40vh] justify-center text-center text-white bg-secondary relative  `}>

        <div className="p-8 rounded-lg max-w-5xl z-20  ">
            <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
            <p className="text-lg">{data.text}</p>
        </div>
        <div className=" w-[300px] h-[300px] bg-primary/80 z-10 absolute -bottom-32 left-1/2 transform -translate-x-1/2 rounded-full blur-[200px]   " />
    </div>
);
