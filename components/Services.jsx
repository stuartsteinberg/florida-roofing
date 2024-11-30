import Link from "next/link"

const Services = () => {
  return (
    <section className=" bg-secondary text-white ">
    <div className="max-w-6xl mx-auto py-12 ">
      <h2 className="text-4xl text-center text-primary font-semibold " >Florida Roofing Company for Your Roofing Services</h2>
      <div className="grid grid-cols-6 gap-6 mt-10">
        <div className="border border-transparent hover:border-primary transition-all duration-300 rounded-lg shadow-lg overflow-hidden col-span-3 bg-black p-10">
          {/* Image Placeholder */}
          <div className="h-[200px] border rounded-lg bg-white">
            {/* Replace this with an actual image */}
          </div>

          {/* Card Content */}
          <div className="mt-4 flex flex-col gap-2 ">
            {/* Heading */}
            <h2 className="text-xl font-bold ">Residential Roofing</h2>
            {/* Subheading */}
            <p className="">
              Turn to us for bespoke solutions that ensure your home stands sturdy
              against Florida’s wild weather:
            </p>

            {/* List of Items */}
            <ul className="list-disc pl-5 space-y-2">
              <li>Know your home is well-fortified.</li>
              <li>Get the best roofing system for your home.</li>
              <li>Enjoy seamless guidance through every step.</li>
              <li>
                Save with our flexible financing options, including in-house, PACE,
                and low-rate payments.
              </li>
            </ul>
            <Link href={'/'} className="bg-primary py-2 px-4 w-fit rounded-full text-black mt-10" >
              Learn More
            </Link>
          </div>
        </div>
        <div className="border border-transparent hover:border-primary transition-all duration-300 rounded-lg shadow-lg overflow-hidden col-span-3 bg-black p-10">
          {/* Image Placeholder */}
          <div className="h-[200px] border rounded-lg bg-gray-200">
            {/* Replace this with an actual image */}
          </div>

          {/* Card Content */}
          <div className="mt-4 flex flex-col gap-2">
            {/* Heading */}
            <h2 className="text-xl font-bold">Commercial Roofing</h2>
            {/* Subheading */}
            <p>Protect your business with our specialized commercial roofing expertise:</p>

            {/* List of Items */}
            <ul className="list-disc pl-5 space-y-2">
              <li>Utilize state-of-the-art roofing techniques.</li>
              <li>Ensure peace of mind for your establishment.</li>
              <li>Sidestep common roofing project challenges.</li>
              <li>Negotiate confidently for the best options.</li>
              <li>Avoid unnecessary overhead with our expert guidance.</li>
            </ul>

            {/* Learn More Link */}
            <Link href={'/'} className="bg-primary py-2 px-4 w-fit rounded-full text-black mt-10">
              Learn More
            </Link>
          </div>
        </div>
        <div className="border border-transparent hover:border-primary transition-all duration-300 rounded-lg shadow-lg overflow-hidden col-span-2 bg-black p-6">
          {/* Image Placeholder */}
          <div className="h-[200px] border rounded-lg bg-gray-200">
            {/* Replace this with an actual image */}
          </div>

          {/* Card Content */}
          <div className="mt-4 flex flex-col gap-2">
            {/* Heading */}
            <h2 className="text-xl font-bold">Insurance Claims</h2>
            {/* Subheading */}
            <p>Navigating insurance claims is easier with our help:</p>

            {/* List of Items */}
            <ul className="list-disc pl-5 space-y-2">
              <li>Ensure you receive maximum benefits from your claim.</li>
              <li>Navigate the claims process smoothly and cost-effectively.</li>
              <li>Overcome typical challenges in insurance claims effortlessly.</li>
              <li>Gain valuable advice on dealing with insurance agents.</li>
              <li>Save significantly by leveraging our expertise in claims management.</li>
            </ul>

            {/* Learn More Link */}
            <Link href={'/'} className="bg-primary py-2 px-4 w-fit rounded-full text-black mt-10">
              Learn More
            </Link>
          </div>
        </div>
        <div className="border border-transparent hover:border-primary transition-all duration-300 rounded-lg shadow-lg overflow-hidden col-span-2 bg-black p-6">
          {/* Image Placeholder */}
          <div className="h-[200px] border rounded-lg bg-gray-200">
            {/* Replace this with an actual image */}
          </div>

          {/* Card Content */}
          <div className="mt-4 flex flex-col gap-2">
            {/* Heading */}
            <h2 className="text-xl font-bold">Gutters</h2>
            {/* Subheading */}
            <p>Our gutter services ensure proper water management and protection for your home:</p>

            {/* List of Items */}
            <ul className="list-disc pl-5 space-y-2">
              <li>Choose the most effective gutters tailored to your needs.</li>
              <li>Protect your home from rainwater damage.</li>
              <li>Avoid common installation mistakes with our expertise.</li>
              <li>Negotiate for gutter materials that fit your unique needs.</li>
              <li>Save with a job done right the first time, reducing future maintenance costs.</li>
            </ul>

            {/* Learn More Link */}
            <Link href={'/'} className="bg-primary py-2 px-4 w-fit rounded-full text-black mt-10">
              Learn More
            </Link>
          </div>
        </div>
        <div className="border border-transparent hover:border-primary transition-all duration-300 rounded-lg shadow-lg overflow-hidden col-span-2 bg-black p-6">
          {/* Image Placeholder */}
          <div className="h-[200px] border rounded-lg bg-gray-200">
            {/* Replace this with an actual image */}
          </div>

          {/* Card Content */}
          <div className="mt-4 flex flex-col gap-2">
            {/* Heading */}
            <h2 className="text-xl font-bold">Storm Damage Restoration</h2>
            {/* Subheading */}
            <p>After harsh weather hits, rely on us to restore your home to its former glory:</p>

            {/* List of Items */}
            <ul className="list-disc pl-5 space-y-2">
              <li>Restore your roof to withstand any weather.</li>
              <li>Navigate storm aftermath hassle-free.</li>
              <li>Expertly bypass recovery roadblocks for quick restoration.</li>
              <li>Negotiate for high-quality repairs your home deserves.</li>
              <li>Keep costs low with durable repairs, avoiding frequent fixes.</li>
            </ul>

            {/* Learn More Link */}
            <Link href={'/'} className="bg-primary py-2 px-4 w-fit rounded-full text-black mt-10">
              Learn More
            </Link>
          </div>
        </div>


      </div>
    </div>
  </section>
  )
}

export default Services
