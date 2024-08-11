import Hero from "@/components/home/Hero"
import Data from "@/components/stock-data/Data"
import Acknowledgement from "@/components/home/Acknowledgement"

export default async function page() {
  return (
    <main className="lg:p-10 lg:pt-5 w-full my-7 lg:my-0">
      {/* Hero section */}
      <div id="hero-section" className="flex justify-center items-center w-full">
        <Hero/>
      </div>
      
      <div id="data-section" className="flex justify-center items-center mt-5 pt-20" data-aos="fade-up">
        <h1 className="text-center text-5xl font-extrabold text-BLACK_LABEL_TEXT">Real-time Stock Price Search</h1>
      </div>

      {/* Search input, data displays */}
      <div className="mt-5">
        <Data/>
      </div>
      
      <div id="acknowledgement-section">
        <Acknowledgement/>
      </div>
    </main>
  )
}