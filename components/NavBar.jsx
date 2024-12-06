'use client';
import Link from "next/link";
import Logo from "./Logo";
import { CrossIcon, MenuIcon } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const navigation_links = [
    {
      href: '/about-us',
      label: 'About Us',
      sub_menu: [
        { href: '/faq', label: 'FAQ' },
        { href: '/our-team', label: 'Our Team' },
        { href: '/careers', label: 'Careers' },
      ],
    },
    {
      href: '/services',
      label: 'Services',
      sub_menu: [
        { href: '/services/residential-roofing', label: 'Residential Roofing' },
        { href: '/services/commercial-roofing', label: 'Commercial Roofing' },
        { href: '/services/gutters', label: 'Gutters' },
        { href: '/services/insurance-claims', label: 'Insurance Claims' },
        { href: '/services/storm-damage-restoration', label: 'Storm Damage Restoration' },
      ],
    },
    {
      href: '/roof-types',
      label: 'Roof Types',
    },
    {
      href: '/locations',
      label: 'Locations',
      sub_menu: [
        { href: '/locations/brevard-county', label: 'Brevard County' },
        { href: '/locations/orange-county', label: 'Orange County' },
        // { href: '/locations/greater-orlando', label: 'Greater Orlando' },
        // { href: '/locations/volusia-county', label: 'Volusia County' },
        // { href: '/locations/osceola-county', label: 'Osceola County' },
        // { href: '/locations/polk-county', label: 'Polk County' },
        // { href: '/locations/lake-county', label: 'Lake County' },
        // { href: '/locations/seminole-county', label: 'Seminole County' },
        // { href: '/locations/sumter-county', label: 'Sumter County' },
      ],
    },
    {
      href: '/gallery',
      label: 'Gallery',
    },
    {
      href: '/financing',
      label: 'Financing',
    },
    {
      href: '/blogs',
      label: 'Blog',
    },
  ];

  const [open, setOpen] = useState(false)
  return (
    <div className=" text-white top-0 left-0 h-26  absolute w-full z-50  p-2 " >
      <nav className="flex justify-between max-w-6xl mx-auto items-center  relative mt-20 gap-2  ">
        <Logo />

        <ul className={`
          md:flex md:flex-row md:w-full md:overflow-visible md:translate-y-0   md:translate-x-0  md:h-full md:static md:bg-transparent md:text-white md:gap-x-4 lg:gap-x-8 
            rounded-md  gap-y-6  items-center flex absolute  -translate-y-[-60%] left-1/2 -translate-x-[50%]   flex-col justify-center w-full transition-all duration-300 ${open ?  'min-h-fit p-2 bg-white' : 'h-0 w-0 p-0' }   text-black overflow-hidden`}>
          {navigation_links.map((item, index) => (
           <li key={index} className="text-sm group relative w-full md:w-fit whitespace-nowrap">
           {/* Parent Link */}
           <Link
             href={item.href}
             className="hover:underline underline-offset-1 decoration-black lg:font-bold block"
           >
             {item.label}
           </Link>
         
           {/* Submenu */}
           {item.sub_menu && (
             <div className="absolute md:left-0 mt-2 z-10 ">
               <ul className="opacity-0 group-hover:opacity-100 rounded-md shadow-md mt-2 transition-all duration-300 bg-secondary border border-white/10">
                 {item.sub_menu.map((subItem, subIndex) => (
                   <li key={subIndex}>
                     <Link
                       href={subItem.href}
                       className="px-6 py-2 block text-start hover:text-primary hover:bg-white/15 whitespace-nowrap font-bold text-white"
                     >
                       {subItem.label}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>
           )}
         </li>
          ))}
        </ul>


        
        <div className="flex gap-2 items-center" >
          <button className="md:hidden block" onClick={() => { setOpen(!open) }} >
            {
              open ?
              <CrossIcon className="rotate-45" />:
              <MenuIcon /> 
            }
          </button>
          <Link href={'tel:+9233553455'} className="text-sm font-semibold px-4 py-2 rounded-full bg-primary whitespace-nowrap   " >
            Call Us
          </Link>

        </div>
      </nav>
    </div>
  )
}