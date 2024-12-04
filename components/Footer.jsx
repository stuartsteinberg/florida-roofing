import { FaFacebookF, FaInstagram, FaYelp } from "react-icons/fa";
import Logo from "./Logo";
const { MdPhone } = require("react-icons/md");

export default function Footer() {
  const navigationItems = [
    {
      parent: "Services",
      children: [
        { label: "Residential Roofing", href: "/services/residential-roofing" },
        { label: "Commercial Roofing", href: "/services/commercial-roofing" },
        { label: "Insurance Claims", href: "/services/insurance-claims" },
        { label: "Gutters", href: "/services/gutters" },
        { label: "Storm Damage Restoration", href: "/services/storm-damage-restoration" },
      ],
    },
    {
      parent: "Locations",
      children: [
        { label: "Greater Orlando", href: "/locations/greater-orlando" },
        { label: "Brevard County", href: "/locations/brevard-county" },
        { label: "Lake County", href: "/locations/lake-county" },
        { label: "Orange County", href: "/locations/orange-county" },
        { label: "Osceola County", href: "/locations/osceola-county" },
        { label: "Polk County", href: "/locations/polk-county" },
        { label: "Seminole County", href: "/locations/seminole-county" },
        { label: "Sumter County", href: "/locations/sumter-county" },
        { label: "Volusia County", href: "/locations/volusia-county" },
      ],
    },
    {
      parent: "Company",
      children: [
        { label: "About Us", href: "/company/about-us" },
        { label: "Roof Types", href: "/company/roof-types" },
        { label: "Financing", href: "/company/financing" },
        { label: "Gallery", href: "/company/gallery" },
        { label: "Blog", href: "/company/blog" },
        { label: "Free Estimate", href: "/company/free-estimate" },
        { label: "Careers", href: "/company/careers" },
      ],
    },
  ];
  return (
    <footer className="bg-secondary text-white py-12" >
      <div className="max-w-6xl mx-auto flex justify-center gap-20 " >
        <div className="flex justify-start  items-center flex-col gap-2 text-white p-6  ">
          <Logo />
          <div>
            <p className="text-center text-sm font-semibold mt-2">
              7801 N Federal Hwy
              Bldg11-501
              Boca Raton, FL
              33487
            </p>
          </div>
          <div className="text-center">
            <a href="tel:" className="hover:underline font-semibold text-sm flex items-center gap-2">
              <MdPhone size={16} className='' />   1 (903) 699-6871
            </a>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              className=" "
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              className=" "
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>

            {/* Yelp */}
            <a
              href="https://yelp.com"
              className=" "
              aria-label="Yelp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYelp size={20} />
            </a>
          </div>
        </div>
        <div className="flex justify-start gap-20 w-full" >
          {
            navigationItems.map((category) => (
              <div className=" w-fit" key={category.parent}>
                <h2 className="font-bold text-lg mb-2 underline underline-offset-2  ">{category.parent}</h2>
                <ul>
                  {category.children.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="hover:">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>

      </div>
    </footer>

  )
}