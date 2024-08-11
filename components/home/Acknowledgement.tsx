import React from 'react'

const Acknowledgement = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 gap-y-3" data-aos="fade-up">
      <h1 className="text-center text-5xl font-extrabold text-BLACK_LABEL_TEXT">
        Powered by
        <br/>
        <span className="text-BLACK_LABEL_TEXT text-6xl">
          <a href="https://finnhub.io/" target="_blank" rel="noreferrer">Finnhub Stock API</a>
        </span>
      </h1>
      <div className="w-[90%] lg:w-[70%]">
        <p className="text-BLACK_INFO_TEXT xl:pl-3 text-start lg:text-center">
          This assessment project is powered by the Finnhub Stock API. 
          Democratize Financial Data with the most powerful stock API on the market.
          Access real-time stock API, institutional-grade fundamental and alternative data to supercharge your investment for FREE.
        </p>
      </div>
    </div>
  )
}

export default Acknowledgement