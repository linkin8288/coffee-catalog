import { Coffee } from "@/typings"
import { NextResponse } from "next/server"

const COFFEE_URL = "https://7r7t215usd.execute-api.us-east-1.amazonaws.com/coffee/coffee-drinks"

type Props = {
  params: {
    id: string
  }
}
export async function GET(request: Request, { params: { id }}: Props) {
  // const id = request.url.slice(request.url.lastIndexOf('/') +1 )

  const res = await fetch(`${COFFEE_URL}/${id}`, {
    cache: "no-store"
  })

  const product: Coffee = await res.json()
  if (!product.id) return NextResponse.json({"message": "Coffee not found"})
  return NextResponse.json(product, { status: 200 })
}