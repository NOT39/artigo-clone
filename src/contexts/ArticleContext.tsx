'use client'

import React, { createContext, useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { ArticleContentChunk } from '@/models/article'

type ArticleContextDataType = {
  loading: boolean
  isWon: boolean
  canGuess: boolean
  article: {
    title: string
    content: ArticleContentChunk[]
  }
  guesses: {
    text: string
    token: string
    amount: number
  }[]

  changeTextVisibility: (word: string) => void
}

export const articleContext = createContext({} as ArticleContextDataType)

export function ArticleContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [article, setArticle] = useState<{
    title: string
    content: ArticleContentChunk[]
  }>()
  const [loading, setLoading] = useState(true)
  const [canGuess, setCanGuess] = useState(true)
  const [guesses, setGuesses] = useState([])
  const [isWon, setIsWon] = useState(false)

  useEffect(() => {
    const _article = JSON.parse(localStorage.getItem('article') || '{}')
    const _guesses = JSON.parse(localStorage.getItem('guesses') || '[]')
    setIsWon(JSON.parse(localStorage.getItem('won') || '{"won": false}').won)

    setGuesses(_guesses)

    if (_article.title) {
      setArticle(_article)
      setLoading(false)
      return
    }

    localStorage.setItem('won', JSON.stringify({ won: false }))
    ;(async () => {
      const { data } = await axios.get('/article')
      setArticle(data)
      setLoading(false)

      localStorage.setItem('article', JSON.stringify(data))
    })()
  }, [])

  const changeTextVisibility = useCallback(async (word: string) => {
    setCanGuess(false)
    const { data } = await axios.post('/stem', { word })
    const { stemmedWord } = data

    setArticle((prevArticle) => {
      if (word.toLowerCase() === prevArticle.title.toLowerCase()) {
        setIsWon(true)
        localStorage.setItem('won', JSON.stringify({ won: true }))
        return prevArticle
      }

      const wordAmount = prevArticle.content.reduce(
        (total, value) =>
          total +
          value.text.reduce(
            (tot, val) => (val.token === stemmedWord ? tot + 1 : tot),
            0,
          ),
        0,
      )

      setGuesses((prevGuesses) => {
        const hasGuess = prevGuesses.find(
          (guess) => guess.token === stemmedWord,
        )

        if (hasGuess) return prevGuesses

        const newGuesses = [
          { text: word, token: stemmedWord, amount: wordAmount },
          ...prevGuesses,
        ]

        localStorage.setItem('guesses', JSON.stringify(newGuesses))

        return newGuesses
      })

      setCanGuess(true)

      if (!wordAmount) {
        return prevArticle
      }

      const newArticle = {
        ...prevArticle,
        content: prevArticle.content.map((chunk) => {
          return {
            ...chunk,
            text: chunk.text.map((alpha) => {
              return alpha.token !== stemmedWord
                ? alpha
                : { ...alpha, isVisible: true }
            }),
          }
        }),
      }

      localStorage.setItem('article', JSON.stringify(newArticle))

      return newArticle
    })
  }, [])

  return (
    <articleContext.Provider
      value={{
        article,
        isWon,
        loading,
        canGuess,
        guesses,
        changeTextVisibility,
      }}
    >
      {children}
    </articleContext.Provider>
  )
}
