import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";



export default function AppLayout({ children }) {
  return (
    <>
      <header>
        <TopBar />
        <NavBar />
      </header>
      {children}
      <section className="py-12 relative text-white">
        <div className="absolute inset-0  bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat filter brightness-[0.3] h-full " />
        <div className="max-w-6xl mx-auto flex z-30 relative gap-10 ">
          <div className="h-[300px]  bg-gray-100 w-[600px] rounded-2xl ">
          </div>
          <div className="border border-transparent hover:border-primary bg-black/70 rounded-lg shadow-lg p-6 flex flex-col gap-4  transition-all duration-300">
            {/* Heading */}
            <h3 className="text-2xl font-bold">Secure Your Spot with Florida Elite Roofing!</h3>

            {/* Subheading */}
            <p className="text-lg">
              Ready to give your home the roofing company advantage it deserves? Great! Just fill out our quick form and we’ll take it from there. Don’t let another storm season pass by without the superior protection of Florida Elite Roofing.
            </p>

            {/* CTA Button */}
            <button className="bg-primary hover:bg-primary-dark text-black font-bold py-3 px-6 rounded-full w-fit mt-4">
              Contact us Now!
            </button>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}
