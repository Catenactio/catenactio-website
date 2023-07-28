import { Features } from './components/features/features'
import { Hero } from './components/hero/hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Features />
    </main>
  )
}
