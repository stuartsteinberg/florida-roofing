import NotFound from "@/components/NotFound";
import Services from "@/components/Services";
import TestimonialsSlider from "@/components/Testimonials";
import { pagesData } from "@/data/pages";
import Image from "next/image";
import Link from "next/link";


const IconSvg = {
  RoofRepair: (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width={'40'} height={'40'} className="fill-primary" viewBox="0 0 500 500">
      <path
        clip-rule="evenodd"
        d="m189.801 393.958h20.527c3.332 0 6.055 2.723 6.055 6.055v20.527c0 1.662-.682 3.176-1.78 4.275l.002.002c-1.097 1.097-2.611 1.778-4.277 1.778h-20.527c-3.326 0-6.055-2.729-6.055-6.055v-20.527c0-3.34 2.737-6.055 6.055-6.055zm217.42 7.716-178.609-178.609c-.329-.329-.866-.329-1.195 0l-178.609 178.609c-.165.165-.248.365-.248.598v23.478c0 .466.38.845.845.845h27.175c.233 0 .433-.083.598-.248l146.352-146.353c2.476-2.476 6.491-2.476 8.967 0l146.353 146.353c.165.165.365.248.598.248h27.175c.466 0 .845-.38.845-.845v-23.478c.001-.233-.082-.433-.247-.598zm-88.796-200.941c0-.466-.38-.845-.845-.845h-13.813c-.466 0-.845-.38-.845-.845v-19.209c0-5.028-4.101-9.129-9.129-9.129h-38.405c-6.058 0-27.093 1.608-38.591 8.399-.661.39-1.462-.24-1.239-.974 7.221-23.754 18.664-36.917 44.963-36.917h97.98c1.39 0 2.535 1.087 2.606 2.475 1.07 20.732 25.475 20.731 26.544 0 .071-1.388 1.216-2.475 2.606-2.475h17.515c3.465 0 6.3 2.835 6.3 6.3v46.075c0 3.465-2.835 6.3-6.3 6.3h-17.515c-1.39 0-2.535-1.087-2.606-2.475-1.069-20.731-25.474-20.732-26.544 0-.071 1.388-1.216 2.475-2.606 2.475h-8.346c-.466 0-.845.38-.845.845v123.056c0 .754-.91 1.131-1.443.598l-29.195-29.195c-.165-.165-.248-.365-.248-.598v-93.861zm90.505 94.05c-4.345-6.797-9.978-11.685-16.265-13.732-3.084-1.005-3.107-5.41 0-6.421 14.83-4.825 23.284-23.65 24.866-39.625.401-4.044 6.297-4.046 6.715-.032 1.674 16.082 9.968 34.8 24.871 39.657 3.084 1.005 3.107 5.41 0 6.42-14.831 4.826-23.285 23.65-24.867 39.628-.401 4.044-6.297 4.046-6.715.032-1.056-9.983-4.139-18.94-8.605-25.927zm-319.971-63.575c-5.582-8.733-12.838-15.018-20.955-17.661-3.084-1.005-3.107-5.41 0-6.42 19.038-6.194 29.896-30.179 31.924-50.666.4-4.043 6.297-4.047 6.715-.032 2.146 20.62 12.8 44.464 31.929 50.699 3.084 1.005 3.107 5.41 0 6.421-19.039 6.194-29.897 30.18-31.925 50.669-.4 4.043-6.297 4.046-6.715.032-1.344-12.715-5.276-24.13-10.973-33.042zm86.064-94.988c4.466 6.987 7.549 15.944 8.605 25.928.418 4.014 6.314 4.012 6.715-.032 1.581-15.976 10.037-34.802 24.867-39.628 3.107-1.011 3.084-5.415 0-6.42-14.903-4.857-23.197-23.576-24.871-39.657-.418-4.014-6.315-4.012-6.715.032-1.581 15.974-10.038 34.801-24.867 39.626-3.107 1.011-3.084 5.415 0 6.42 6.289 2.047 11.922 6.934 16.266 13.731zm70.679 201.837h20.527c3.333 0 6.055 2.723 6.055 6.6v20.527c0 3.333-2.723 6.055-6.055 6.055h-20.527c-3.326 0-6.055-2.729-6.055-6.055v-20.527c-.001-3.339 2.736-6.055 6.055-6.055z"
      />
    </svg>
  ),
  RoofReplacement: (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" width={'40'} height={'40'} className="fill-primary" viewBox="0 0 100 100"><path d="m61.102 27.149c-.092-.207-.145-.435-.145-.675 0-.924.756-1.681 1.68-1.681.942 0 1.697.756 1.697 1.681 0 .924-.756 1.68-1.697 1.68-.683 0-1.273-.415-1.535-1.005zm13.72 9.408-6.162 8.403h19.875c.928 0 1.681.752 1.681 1.681 0 .928-.753 1.68-1.681 1.68h-22.34l-3.193 4.355c-.33.449-.839.687-1.357.687-.345 0-.693-.106-.992-.325-.748-.549-.91-1.601-.362-2.35l1.736-2.367h-15.506c-.109 0-.216-.012-.32-.032l-1.42 1.76c.03.294.034.591.011.889l7.467 7.467h36.276c.928 0 1.681.753 1.681 1.681s-.753 1.681-1.681 1.681h-36.972-15.125c-.332 0-.64-.1-.9-.266l-.479.593 2.289 10.292c.062.228.125.577.179 1.145h51.008c.928 0 1.681.753 1.681 1.681s-.753 1.681-1.681 1.681h-50.86c.032 2.051.015 4.995-.087 9.257-.002.128-.02.256-.052.38-.04.153-.087.301-.139.447h51.139c.924 0 1.681.756 1.681 1.68s-.757 1.681-1.681 1.681h-77.071c-.638 0-1.243-.37-1.512-.959-.286-.588-.202-1.276.202-1.781l2.877-3.565 1.443-9.136-.947-14.704-.003-6.828c0-.025.006-.048.007-.074v-6.161c0-.925.74-1.681 1.664-1.681.003 0 .006.001.009.001.937.005 1.688.758 1.688 1.68v4.554h12.823v-2.085l-5.998-4.195c-2.667-1.41-4.073-4.428-3.424-7.384l1.052-5.158c.185-.909 1.071-1.493 1.983-1.31.683.14 1.183.674 1.312 1.317.043.213.045.439-.001.666l-1.058 5.182c-.334 1.523.393 3.053 1.764 3.746.072.036.14.078.206.123l4.163 2.912 1.68 1.175 1.681 1.175 5.85 4.093.26.182c.593.22 1.25.077 1.705-.33.166-.149.307-.331.406-.546.294-.641.146-1.373-.312-1.856-.144-.151-.315-.28-.516-.372-.082-.038-.153-.092-.228-.143-.045-.03-.096-.051-.138-.085l-7.027-5.762-1.681-1.378-1.235-1.013c-.192-.157-.341-.354-.446-.572-.114-.235-.175-.495-.169-.764l.161-7.447.008-.348c-.007-1.745-1.616-3.352-3.361-3.352l-.521-.084-4.74-1.58c-.621.101-1.73.756-2.588 1.748-1.008 1.092-1.663 2.571-1.613 3.26v2.185c0 .938-.751 1.675-1.688 1.68-.003 0-.006.001-.009.001-.924 0-1.664-.74-1.664-1.681v-2.167c.017-1.833.858-3.681 2.487-5.529 1.612-1.752 3.224-2.679 4.917-2.84-.469-1.67-.361-3.502.326-5.204.162-.402.356-.783.572-1.148-.199-.412-.235-.901-.051-1.358l.629-1.558c.672-1.666 1.952-2.97 3.604-3.672 1.652-.704 3.478-.719 5.145-.047l1.559.629c2.933 1.183 3.742 3.689 2.412 7.454l.667 1.568c.266.625.129 1.35-.348 1.835-.322.328-.757.503-1.199.503-.078 0-.156-.012-.234-.023-.082.285-.174.569-.287.848-.602 1.493-1.594 2.746-2.836 3.626 1.327 1.232 2.166 2.982 2.184 4.919v.036 7.129l9.008 7.385c.375.194.712.433 1.016.702l13.637-16.899c.554-.689 1.664-.806 2.369-.253 0 .001.001.001.002.002.352.286.57.689.62 1.125.034.454-.084.89-.37 1.243l-.977 1.21h14.736l3.697-5.042h-7.455c-.924 0-1.664-.756-1.664-1.68s.74-1.681 1.664-1.681h19.175c.924 0 1.681.756 1.681 1.681 0 .924-.757 1.68-1.681 1.68h-7.551l-3.697 5.042h11.248c.928 0 1.681.752 1.681 1.681 0 .928-.753 1.68-1.681 1.68h-13.713zm-40.741 36.618-1.72-7.737-.466-2.096-.468-2.105-1.377-6.193h-13.165v5.04l.955 14.781c.007.124.002.249-.017.371l-.563 3.554-.529 3.34-.465 2.938c-.009.102-.008.205.002.307.07.7.576 1.361 1.285 1.539.547.136 1.098.041 1.544-.274.411-.29.662-.716.707-1.198l.726-5.349.436-3.212.438-3.229.033-.238v-11.651c0-.928.752-1.68 1.681-1.68h2.512c.768 0 1.437.52 1.628 1.263l.981 3.836.522 2.039.519 2.03 1.095 4.277.234.916c.032.124.049.251.052.379l.046 2.066.168 7.548c.004.154-.014.308-.052.457-.107.416-.043.851.18 1.224.241.401.634.685 1.106.8.907.222 1.825-.258 2.123-1.08.073-3.139.103-6.49.075-8.95-.018-1.616-.063-2.838-.138-3.362-.005-.035-.009-.08-.015-.109-.03-.077-.054-.158-.073-.242zm-6.374 13.799c-.309-.852-.379-1.768-.195-2.668l-.165-7.415h-2.989l-1.214 8.934c-.036.392-.129.777-.264 1.149zm-2.1-18.527-.807-3.153v4.153zm.222 5.082h1.078l-.259-1.014zm8.296-15.638 2.687-3.33-3.734-2.613v1.23zm-2.664-43.988-1.558-.628c-.432-.175-.886-.254-1.338-.243-.419.01-.837.098-1.235.267-.826.351-1.466 1.003-1.802 1.835l.27.109 5.965 2.406c.081-.201.153-.391.217-.569.403-1.12.486-1.811.397-2.259-.116-.59-.528-.761-.916-.918zm-.597 7.008-6.108-2.465c-.144.237-.27.488-.377.753-.437 1.085-.491 2.237-.152 3.243.309.914.911 1.592 1.698 1.91.787.317 1.691.249 2.548-.197.943-.49 1.703-1.356 2.141-2.44.105-.265.189-.534.25-.804zm12.4 33.251c-.801.771-1.828 1.256-2.919 1.383l-2.308 2.859h9.47zm27.39-17.605h-14.983l-6.782 8.403h15.603zm-55.458 5.529c.003 0 .006-.001.009-.001.937-.004 1.688-.742 1.688-1.679 0-.922-.751-1.675-1.688-1.68-.003 0-.006 0-.009 0-.924 0-1.664.756-1.664 1.681 0 .939.74 1.679 1.664 1.679z"></path></svg>
  ),
};
const Page = ({ params }) => {

  const sectionsMap = {
    GridImageTextList,
    GridImageText,
    Testimonials,
    GridCards,
    ParallaxImageText,
    TextCentered,
    Faqs,
    Services,
    GridCardsImage
  }

  const normalizedSlug = `/${params.slug.join('/')}`;


  const pageData = pagesData.find((page) => page.slug === normalizedSlug);

  if (!pageData) {
    return (
      <NotFound/>
    )
  }

  return (
    <main className="text-white">
      <Header data={pageData} />
      {pageData.sections.map((section, index) => {
        const SectionComponent = sectionsMap[section.componentName];
        return SectionComponent ? (
          <SectionComponent key={index} data={section.data} />
        ) : null;
      })}

    </main>
  )
}

export default Page

function Header({ data }) {
  return (
    <div className="h-[60vh] w-full bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat relative text-white border-b-2 border-primary">
      <div className="bg-gradient-to-b to-black/90 from-black/50 absolute w-full h-full" />
      <div className="flex flex-col w-full h-full justify-center items-center z-10 relative  ">
        <div className="flex flex-col gap-2 max-w-6xl mx-auto " >
          <p className="font-bold " >{data.slug.slice(1).toUpperCase()}</p>
          <h1 className="text-5xl" >{data.title}</h1>
          <hr className="h-1 mt-2  border-none  bg-primary" />
          <div className="max-w-4xl" >
            <p className="" >{data.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
const GridImageTextList = ({ data }) => (
  <section className="max-w-6xl mx-auto py-16 px-6 gap-8 items-center grid grid-cols-2 text-white">
    {/* Text Content */}
    <div className="space-y-6">
      <h2 className="text-5xl font-bold ">{data.title}</h2>

      {/* Dynamic List Rendering */}
      <ul className="list-disc pl-5  text">
        {data.points.map((point, index) => (
          <li key={index}>
            <strong className=" text-2xl">{point?.title}</strong>
            <p>{point.text} </p>

          </li>
        ))}
      </ul>


      {/* CTA Button */}
      <div className="mt-20">
        <Link href={'/contact'} className="bg-primary py-3 px-6 rounded-full  font-bold">
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
      <h2 className="text-4xl font-bold ">{data.title}</h2>
      <p>{data.text}</p>
      <div className="mt-20" >
        <Link href={'/contact'} className="bg-primary py-3 px-6 rounded-full  font-bold ">
          Get In Touch With Us!
        </Link>
      </div>
    </div>
  </section>
);
const Testimonials = () => (
  <section className="py-12 max-w-6xl mx-auto  flex flex-col " >
    <TestimonialsSlider />
  </section>
)
const GridCards = ({ data }) => (
  <section className="bg-secondary py-12 relative ">
    <h3 className=" text-center pb-8 text-3xl " >{data.title}</h3>
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
    <h3 className=" text-center pb-8 text-5xl " >{data.title}</h3>
    <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto" >
      {
        data.points.map((i, z) => (
          <div key={z} className="bg-black  border border-transparent z-20 hover:border-primary transition-all duration-300 rounded-md text-center flex flex-col items-center" >
            <div className=" h-[200px] w-full  rounded-md overflow-hidden relative" >
              <Image  src={'/images/shingles/shingle.webp'}  layout="fill"  className="p-4 rounded-3xl" alt="shingle" />
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
const Faqs = ({ data }) => (
  <div className="max-w-6xl mx-auto p-6">
    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
    <div className="grid md:grid-cols-2 gap-6 ">
      {data.points.map((item, index) => (
        <div
          key={index}
          className="faq-item border rounded-lg p-4 bg-primary  cursor-pointer transition-all duration-300  hover:text-white "
          data-faq-index={index}
        >
          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">{item.question}</span>
            <svg
              className="faq-icon w-6 h-6 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
          <div className="faq-content mt-3 text-gray-700 hidden">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
    <script dangerouslySetInnerHTML={{ __html: `
      document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.faq-item').forEach((item) => {
          item.addEventListener('click', () => {
            const content = item.querySelector('.faq-content');
            const icon = item.querySelector('.faq-icon');
            const isOpen = content.classList.contains('hidden');
            
            if (isOpen) {
              content.classList.remove('hidden');
              icon.style.transform = 'rotate(180deg)';
            } else {
              content.classList.add('hidden');
              icon.style.transform = 'rotate(0)';
            }
          });
        });
      });
    ` }} />
  </div>
);