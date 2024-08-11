"use server"

import { finnhubBaseURL } from "@/constants/api"

interface Props {
  symbol: string
}

export default async function fetchStockSymbol(prop: Props) {
  const baseURL = finnhubBaseURL

  try {
    const res = await fetch(`${baseURL}/search?q=${prop.symbol}&token=${process.env.API_KEY}`)

    if (!res.ok) {
      return null
    }

    const data = await res.json()

    // Since the data gives multiple results, we should get the stock with the corresponding displaySymbol
    const nearestMatch = data.result.find((stock: any) => stock.displaySymbol === prop.symbol)

    if (!nearestMatch) {
      return null
    }

    return nearestMatch

  } catch (error) {
    console.error(error)

    return null
  }
}