import natural from 'natural'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const stemmer = natural.PorterStemmerPt

  const data = await req.json()

  const { word } = data

  return NextResponse.json({
    stemmedWord: stemmer.stem(word),
  })
}
