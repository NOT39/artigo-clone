'use client'

import { articleContext } from '@/contexts/ArticleContext'
import React, { useContext } from 'react'
import { Alpha } from './components/Alpha'

export function GameDisplay() {
  const { article, isWon, loading } = useContext(articleContext)

  if (loading) {
    return <h1 className="text-zinc-50">CARREGANDO...</h1>
  }

  return (
    <main className="min-h-screen overflow-y-auto p-4 text-zinc-200 md:mr-60">
      <h2 className="my-4 text-2xl font-bold uppercase">
        <Alpha alpha={article.title} visible={isWon} />
      </h2>

      {article.content.map((chunk, index) => {
        return chunk.type === 'paragraph' ? (
          <p className="text-base" key={index}>
            {chunk.text.map((text, i) => {
              return (
                <Alpha
                  alpha={text.text}
                  key={i}
                  visible={text.isVisible || isWon}
                />
              )
            })}
          </p>
        ) : (
          <h3 className="my-4 text-xl font-bold" key={index}>
            {chunk.text.map((text, i) => {
              return (
                <Alpha
                  alpha={text.text}
                  key={i}
                  visible={text.isVisible || isWon}
                />
              )
            })}
          </h3>
        )
      })}
    </main>
  )
}
