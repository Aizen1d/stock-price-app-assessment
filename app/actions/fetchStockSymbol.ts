"use server"

import { finnhubBaseURL } from "@/constants/api"

interface Props {
  symbol: string
}

export default async function fetchStockSymbol(prop: Props) {
  const baseURL = finnhubBaseURL

  try {
    const res = await fetch(`${baseURL}/quote?symbol=${prop.symbol}&token=${process.env.API_KEY}`)

    if (!res.ok) {
      return null
    }

    const data = await res.json()
    return data

  } catch (error) {
    console.error(error)

    return null
  }
}