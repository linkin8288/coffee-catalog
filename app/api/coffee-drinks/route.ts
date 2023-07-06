import { Coffee } from "@/typings"
import { NextResponse } from "next/server"

const COFFEE_URL = "https://7r7t215usd.execute-api.us-east-1.amazonaws.com/coffee/coffee-drinks"

export async function GET() {
  const res = await fetch(COFFEE_URL)

  const products: Coffee[] = await res.json()

  return NextResponse.json(products, {status: 200})
}