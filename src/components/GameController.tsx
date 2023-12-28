'use client'

import { articleContext } from '@/contexts/ArticleContext'
import { ThickArrowRightIcon } from '@radix-ui/react-icons'
import { useContext, useState } from 'react'

export function GameController() {
  const [guess, setGuess] = useState('')

  const { changeTextVisibility, guesses, canGuess } = useContext(articleContext)

  const handleGuess = () => {
    const punctuationList =
      '{}()\\[\\]\\\\.…,;:!¡?¿/@#%\\^&*_—~+\\-=<>«»"\'’\\s'

    if (!guess.match(punctuationList)) {
      changeTextVisibility(guess)
    }
  }

  return (
    <aside className="sticky bottom-0 bg-zinc-800 p-1">
      <div className="flex items-center justify-center gap-2 md:mr-60">
        <input
          type="text"
          readOnly={!canGuess}
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className={`cursor-not-allowed rounded-md border border-zinc-400 bg-zinc-700 p-2 text-zinc-50 outline-none placeholder:text-zinc-400 hover:border-white focus:border-blue-400 ${
            !canGuess ? 'cursor-not-allowed' : 'cursor-text'
          }`}
          placeholder="palpite uma palavra"
        />
        <button
          onClick={canGuess ? handleGuess : undefined}
          className={`rounded-full p-2 hover:bg-zinc-700 ${
            !canGuess ? 'cursor-not-allowed' : ''
          }`}
        >
          <ThickArrowRightIcon color="#E4E4E7" width={24} height={24} />
        </button>
      </div>
      <div className="mt-1 h-96 bg-zinc-900 p-3 text-zinc-50 md:fixed md:right-0 md:top-0 md:mt-0 md:h-screen md:w-60 md:bg-zinc-650">
        {guesses.length === 1 ? (
          <p>1 palpite</p>
        ) : (
          <p>{guesses.length} palpites</p>
        )}

        <ul>
          {guesses.map((guess, index) => {
            return (
              <li
                key={index}
                className={`flex items-center justify-between py-2 ${
                  guess.amount ? 'text-green-400' : 'text-red-400'
                }`}
              >
                <span>{guess.text}</span>
                <span>{guess.amount}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
