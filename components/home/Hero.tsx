import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full
                    lg:justify-between lg:items-center lg:px-16
                    gap-y-5 lg:gap-y-0 h-fit lg:h-[calc(90vh-1rem)]">
      <section className="w-full lg:w-1/2 space-y-3 lg:space-y-1" data-aos="fade-up">
        <h1 className="text-4xl lg:text-6xl xl:text-8xl font-extrabold text-BLACK_LABEL_TEXT text-center lg:text-left">
          Track the Stock Market with Confidence
        </h1>
        <p className="text-BLACK_INFO_TEXT xl:pl-3 text-center lg:text-left">
          Effortlessly track and analyze stock performance with our real-time lookup tool. 
          Simply enter the stock symbol you're interested in, and get instant access to up-to-the-minute data!
        </p>
      </section>

      {/* Right side section */}
      <section className="hidden lg:flex" data-aos="fade-down">
        <Image 
          src={'/Icons/upward-trend.png'}
          alt={'Hero Image'}
          height={'400'}
          width={'400'}
          className="filter grayscale brightness-0 contrast-100"
        />
      </section>
    </div>
  )
}

export default Hero