'use client';

import Link from "next/link";
import { MdLocationPin, MdPhone, MdRoofing } from "react-icons/md";
import { BiSolidTimer } from "react-icons/bi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import TestimonialsSlider from "@/components/Testimonials";
import AppLayout from "@/components/AppLayout";
import Services from "@/components/Services";


export default function Home() {
  return (
    <AppLayout> 
    <main className="bg-black">
      <Hero />
      <section className=" text-white border-b-2 border-primary">
        <div className=" max-w-6xl mx-auto  py-20 " >
          <div className="grid grid-cols-2 gap-10 items-center" >
            <div className="w-full h-full p-10" >
              <div className="border w-full h-full rounded-lg bg-gray-100 relative ">
                <div className="absolute -bottom-10 -right-10 h-[200px] w-[200px] bg-gray-100 rounded-lg shadow-2xl " />
              </div>
            </div>

            <div className="flex flex-col gap-4  ">
              <h2 className="text-4xl text-primary leading-loose  " >Here’s Our Pledge To You...</h2>

              <p>We are Florida Elite Roofing, and we’re leaders in keeping roofs over heads with a comprehensive service. We have protected many homes and businesses in Florida from harsh weather conditions. These conditions include strong sun, storms, and heavy rain that hit our roofs all year.</p>

              <p>From sturdy, hurricane-resistant roof installations to prompt roof repairs in Florida, we’ve mastered the art of maintaining and mending your first line of defense against the elements.</p>

              <p>Our family’s military background means discipline and precision in every shingle we lay and every nail we drive. Proudly certified by NRCA, Roofing and Solar Reform Alliance, IKO Craftsman Premier, and as a Guild Quality Member, our work is more than a job—it’s a commitment to excellence.</p>

              <p>Don’t just take our word for it—hear it from satisfied clients who found reliability and peace of mind with our skilled roof contractors.</p>

            </div>

          </div>

          <div className="my-20" >
            <TestimonialsSlider />
          </div>


        </div>
      </section>
      <Services/>
      <section className="max-w-6xl mx-auto py-16 px-6  gap-8 items-center flex text-white">
        {/* Text Content */}
        <div className="space-y-6">
          {/* Heading */}
          <h2 className="text-5xl font-bold text-primary">Your Ultimate Roofing Advantage</h2>
          {/* Subheading */}
          <p className="text-lg">
            With our expert services, you get a comprehensive approach to roof care that guides you from initial roof inspection to flawless finish. Here&apos;s what you secure when you choose us:
          </p>

          {/* List of Items */}
          <ul className="list-disc pl-5 space-y-2 flex flex-col gap-3">
            <li>
              <strong className="text-primary text-2xl" >Solid Guidance Every Step of the Way</strong> <br />
              Our team walks you through the entire roof installation or repair process, so you’re never in the dark.
            </li>
            <li>
              <strong className="text-primary text-2xl" >A Circle of Professionals at Your Service</strong> <br />
              We bring together top roof contractors in Florida, each one ready to pitch in and ensure swift, efficient service.
            </li>
            <li>
              <strong className="text-primary text-2xl" >Your Personalized Roof Success Plan</strong> <br />
              Armed with our insight, you’ll have the blueprint you need to guarantee the longevity and durability of your roof.
            </li>
          </ul>

          {/* Subtext */}
          <p>
            Every roof has its day, and with Florida Elite Roofing, that day is secured with professional workmanship, a skilled team, and unwavering commitment to you and your home.
          </p>

          {/* CTA Button */}
          <div className="mt-20" >
            <Link href={'/contact'} className="bg-primary py-3 px-6 rounded-full text-black font-bold ">
              Get In Touch With Us!
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="h-[600px] w-full bg-gray-200 rounded-lg shadow-lg">

        </div>
      </section>
      <section className="bg-secondary  py-16 px-6  text-white relative z-30 ">
        <div className="max-w-6xl mx-auto  ">
          <div className="text-center flex flex-col gap-4  ">
            <h3 className="text-primary text-5xl font-semibold ">Cities We Serve</h3>
            <p>Florida Elite Roofing has got you covered! Whether you need a roof installation or an <br /> essential roof inspection, we are just a call away. Check out our service areas:</p>
          </div>
          <div className="w-full mt-10 border-primary border" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.6616348917264!2d-80.10984582389793!3d26.36980398320971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91e04de21270b%3A0x51a0e41699a363a5!2sW%20University%20Dr%2C%20Boca%20Raton%2C%20FL%2033431%2C%20USA!5e0!3m2!1sen!2s!4v1732343642540!5m2!1sen!2s" className="w-full filter invert  saturate-[0.2] " height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="grid grid-cols-6 mt-10 gap-4">
            <div className="border border-white/20 hover:border-primary bg-black  rounded-lg shadow-lg p-6 flex  gap-4 col-span-2">
              <div className="text-primary">
                <MdLocationPin size={56} />
              </div>
              <div className=" ">
                <h3 className="text-xl font-bold">Orange County</h3>
                <p className=" mt-2">
                  Secure your home in Orlando, Apopka, Lake Buena Vista, and Maitland against Central Florida&apos;s occasional severe storms and high humidity levels.
                </p>
              </div>
            </div>
            <div className="border border-white/20 hover:border-primary bg-black rounded-lg shadow-lg p-6 flex gap-4 col-span-2">
              {/* Icon */}
              <div className="text-primary">
                <MdLocationPin size={56} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold">Volusia County</h3>
                <p className="mt-2">
                  Safeguard your property in Daytona Beach, Port Orange, Edgewater, and New Smyrna Beach along Florida&apos;s East Coast from both Atlantic storms and the area&apos;s subtropical climate with our resilient roofing solutions.
                </p>
              </div>
            </div>
            <div className="border border-white/20 hover:border-primary bg-black rounded-lg shadow-lg p-6 flex gap-4 col-span-2">
              {/* Icon */}
              <div className="text-primary">
                <MdLocationPin size={56} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold">Brevard County</h3>
                <p className="mt-2">
                  Protect your home in Titusville, Melbourne, and Cape Canaveral on Florida&apos;s Space Coast from coastal winds and occasional hurricanes with our durable roofing options.
                </p>
              </div>
            </div>
            <div className="border border-white/20 hover:border-primary bg-black rounded-lg shadow-lg p-6 flex gap-4 col-span-3 ">
              {/* Icon */}
              <div className="text-primary">
                <MdLocationPin size={56} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold">Polk County</h3>
                <p className="mt-2">
                  Ensure your home in Auburndale and Davenport withstands Central Florida&apos;s hot summers and occasional thunderstorms with our reliable roofing services.
                </p>
              </div>
            </div>
            <div className="border border-white/20 hover:border-primary bg-black rounded-lg shadow-lg p-6 flex gap-4 col-span-3">
              {/* Icon */}
              <div className="text-primary">
                <MdLocationPin size={56} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold">Osceola County</h3>
                <p className="mt-2">
                  Fortify your home in Kissimmee and St.Cloud against Central Florida&apos;s diverse weather patterns, from heavy rains to strong winds, with our customized roofing solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-primary ">Don&apos;t see your town listed?</h2>
            <p className="mt-4 text-lg">
              Reach out! We stretch our services across the Sunshine State, bringing professional roof repairs and installations to your doorstep.
            </p>
          </div>
        </div>
        <div className=" w-[300px] h-[300px] bg-primary/80 -z-10 absolute -bottom-20 left-1/2 transform -translate-x-1/2 rounded-full blur-[200px]  " />
      </section>
    </main>
    </AppLayout>
  );
}



function Hero() {
  return (
    <div className="h-screen w-full bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat relative text-white border-b-2 border-primary">
      <div className="bg-gradient-to-b to-black/90 from-black/40 absolute w-full h-full " />
      <div className="flex w-full h-full justify-center items-center">
        <div className="grid grid-cols-2 z-10  max-w-6xl mx-auto p-4 ">
          <div className="flex flex-col p-2 gap-4 justify-center  ">
            <h1 className="text-6xl font-bold text-primary">
              Meet The Best Roofing Company in Florida!
            </h1>
            <p >
              For a reliable roofing company in Florida that provides quality roofing, pay attention here. Reach your goals quickly while feeling safe and calm throughout the     process.
            </p>
            <div className="grid grid-cols-3 text-lg">
              <div className="flex-col flex  text-center items-center  ">
                <MdRoofing size={46} className="text-primary" />
                <p>Maximize your<br /> Roof&apos;s Value</p>
              </div>
              <div className="flex-col flex  text-center items-center ">
                <BiSolidTimer size={52} className="text-primary" />
                <p>Get it Done <br /> Quickly!</p>
              </div>
              <div className="flex-col flex  text-center items-center ">
                <RiVerifiedBadgeFill size={46} className="text-primary" />
                <p>Keep Your <br />Peace of Mind!</p>
              </div>

            </div>

          </div>
          <div className="justify-center items-center flex   text-white  backdrop-blur-lg rounded-lg " >
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

function Form() {
  return (
    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md  ">
      <p className="text-xl text-center ">Get A Free Roof Inspection</p>
      <form
        // onSubmit={(e) => e.preventDefault()}
        className="space-y-5"
      >
        <div>
          <label className="font-medium">
            Full name
          </label>
          <input
            type="text"
            required
            className="w-full mt-2 px-3 py-2  bg-transparent outline-none border  shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-primary  shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">
            Phone
          </label>
          <input
            type="text"
            required
            className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-primary  shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">
            Address
          </label>
          <textarea required className="w-full mt-2  px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-primary  shadow-sm rounded-lg"></textarea>
        </div>
        <button
          className="w-full px-4 py-2  text-black font-medium bg-primary  hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
        >
          Submit
        </button>
      </form>
    </div>
  )
}



