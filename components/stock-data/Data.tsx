"use client"

import { useState } from "react"

import { Input as ShadcnInput } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Card from "./Card"

import fetchStockInfo from "@/app/actions/fetchStockInfo"
import fetchStockSymbol from "@/app/actions/fetchStockSymbol"

// Expected datatypes from the api response
interface StockDataProps {
  symbol: string
  description: string
  type: string
  currentPrice: number
  change: number
  percentChange: number
  high: number
  low: number
  open: number
  previousClose: number
}

const Data = () => {
  const [query, setQuery] = useState<string>("")
  const [isFirstTimeSearch, setIsFirstTimeSearch] = useState<boolean>(true)
  const [stockData, setStockData] = useState<StockDataProps | null>(null)
  const [notFound, setNotFound] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const getCurrentDate = () => {
    // Format example: August 11, 2024 at 12:00AM

    const date = new Date()
    const month = date.toLocaleString('default', { month: 'long' })
    const day = date.getDate()
    const year = date.getFullYear()
    const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    return `${month} ${day}, ${year} at ${time}`
  }

  const handleSubmit = async (event?: React.FormEvent) => {
    // Could be submitted through search, or refreshed
    event?.preventDefault()

    const symbol = query.toUpperCase()

    if (symbol === "" || symbol === null) {
      return
    }

    setIsFirstTimeSearch(false) // No longer first time search, we display the Card UI for the data
    setStockData(null) // Reset the stock data before hydrating in.
    setNotFound(false)

    // Waiting for data to be fetched
    setLoading(true)
    const getStockInfo = await fetchStockInfo({ symbol })
    const getStockData = await fetchStockSymbol({ symbol })
    setLoading(false)
    
    if (getStockInfo === null || getStockData === null) {
      setNotFound(true)
      return
    }

    setStockData({
      symbol: getStockInfo.symbol,
      description: getStockInfo.description,
      type: getStockInfo.type,
      currentPrice: getStockData.c,
      change: getStockData.d,
      percentChange: getStockData.dp,
      high: getStockData.h,
      low: getStockData.l,
      open: getStockData.o,
      previousClose: getStockData.pc
    })
  }

  return (
    <main className="lg:h-[calc(65vh-1rem)]" data-aos="fade-up">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <div className="bg-CARD_BG w-full lg:w-fit pl-5 pr-5 py-5 rounded-xl shadow-md space-y-2">
            <label className="text-sm text-BLACK_INFO_TEXT">
              Search a stock price e.g., {'(AAPL)'}
            </label>

            <div className="flex flex-col lg:flex-row gap-y-5 gap-x-5 lg:gap-y-0">
              <ShadcnInput
                className=" border-[#7b7b7b] placeholder:text-BLACK_INFO_TEXT"
                placeholder="Enter stock symbol.."
                name="symbol"
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button className="bg-BLACK_LABEL_TEXT hover:bg-[#242323]" type="submit">
                Search
              </Button>
            </div>

          </div>
        </div>
      </form>

      {isFirstTimeSearch ? (
        <div className="flex justify-center items-center mt-7">
          <div className="bg-CARD_BG w-full lg:w-[70%] h-[300px] p-5 rounded-xl shadow-md">
            <div className="flex justify-center items-center h-full">
              <p className="text-3xl font-bold text-BLACK_INFO_TEXT">Search to display data now..</p>
            </div>
          </div>     
        </div>                   
      ) : ( 
      <div className="flex justify-center items-center mt-7">
        <div className="bg-CARD_BG w-full lg:w-[70%] p-5 rounded-xl shadow-md">
          {loading && (
            <>
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-6 w-1/6" />
              </div>
              <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5 mt-7">
                <Skeleton className="h-[150px] w-1/3" />
                <Skeleton className="h-[150px] w-1/3" />
                <Skeleton className="h-[150px] w-1/3" />
              </div>
            </>
          )}

          {notFound && (
            <div className="flex justify-center items-center">
              <div className="bg-none w-full lg:w-[70%] h-[300px] p-5 rounded-xl">
                <div className="flex justify-center items-center h-full">
                  <p className="text-3xl font-bold text-BLACK_LABEL_TEXT">Stock not found</p>
                </div>
              </div>     
            </div>                   
          )}

          {!notFound && !loading && (
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col lg:flex-row justify-between w-full">
                <div className="flex flex-col w-1/2">
                  <h1 className="text-4xl font-bold text-BLACK_LABEL_TEXT">{stockData?.description}</h1>
                  <label className="text-md text-BLACK_INFO_TEXT">{stockData?.symbol}</label>
                </div>
                <div className="flex flex-col lg:items-end w-fit lg:w-1/2 mt-2 lg:mt-0">
                  <label className="text-sm text-BLACK_INFO_TEXT lg:text-end">Result as of {getCurrentDate()}</label>
                  <Button 
                    className="bg-BLACK_LABEL_TEXT hover:bg-[#242323] mt-2 w-fit"
                    onClick={() => handleSubmit()}
                  >
                    Refresh
                  </Button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5">
                <Card
                  label="Current Price"
                  value={stockData?.currentPrice}
                  sign="$"
                />
                <Card
                  label="Change"
                  value={stockData?.change}
                  sign="$"
                />
                <Card
                  label="Percent Change"
                  value={stockData?.percentChange}
                  sign="%"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5">
                <Card
                  label="High price of the day"
                  value={stockData?.high}
                  sign="$"
                />
                <Card
                  label="Low price of the day"
                  value={stockData?.low}
                  sign="$"
                />
                <Card
                  label="Open price of the day"
                  value={stockData?.open}
                  sign="$"
                />
              </div>
            </div>
          )} 
        </div>
      </div>
      )}
    </main>
  )
}

export default Data