import { GameController } from '@/components/GameController'
import { GameDisplay } from '@/components/GameDisplay'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <GameDisplay />
      <GameController />
    </>
  )
}
