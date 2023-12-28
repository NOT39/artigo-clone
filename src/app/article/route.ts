import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import natural from 'natural'

import { articleMock } from '../../../mock/article'
import { normalizeText } from '@/utils/formatter'

export async function GET(req: NextApiRequest) {
  const stemmer = natural.PorterStemmerPt

  const articleContent = articleMock.content.map((chunk) => {
    const normalizedChunk = normalizeText(chunk)

    return {
      type: chunk.type,
      text: normalizedChunk.text.map((alpha) => {
        return { ...alpha, token: stemmer.stem(alpha.text) }
      }),
    }
  })

  return NextResponse.json({
    title: articleMock.title,
    content: articleContent,
  })
}
