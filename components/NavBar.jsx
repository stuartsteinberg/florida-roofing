import Link from "next/link";
import Logo from "./Logo";

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
      // {
      //   href: '/free-estimate',
      //   label: 'Free Estimate',
      // },
    ];
    return (
      <div className=" text-white  absolute  top-20 w-full z-50 " >
        <nav className="flex justify-between max-w-6xl mx-auto items-center ">
          <Logo />
          <ul className="flex items-center gap-8 justify-center">
            {navigation_links.map((item, index) => (
              <li key={index} className="text-sm group relative">
                {/* Parent Link */}
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
  
                {/* Submenu */}
                {item.sub_menu && (
                  <div className="absolute left-0 mt-2 z-10 ">
                    <ul className=" opacity-0 min-w-fit group-hover:opacity-100 rounded-md  shadow-md mt-2 transition-all duration-300 bg-secondary border border-white/10  ">
                      {item.sub_menu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="px-6 py-2 block text-start  hover:text-primary hover:bg-white/15 whitespace-nowrap "
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
          <Link href={'tel:+9233553455'} className="text-sm font-semibold px-4 py-2 rounded-full bg-primary text-black" >
            Call Us
          </Link>
        </nav>
      </div>
    )
  }