'use client'
import { FcGoogle } from "react-icons/fc";
import Slider from "react-slick";

  
 export default function TestimonialsSlider() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="slider-container  ">
        <Slider {...settings}>
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="bg-secondary px-4 py-6 " >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">Alex Jones</p>
                  <p className="font-extralight text-xs text-white/30 ">June 13, 2024</p>
                </div>
                <FcGoogle size={24} />
              </div>
              <p className="text-sm mt-6" >Jared was very efficient with getting my insurance claim filed. He is great to work with.</p>
            </div>
          ))}
  
        </Slider>
      </div>
    );
  }
  
  
  