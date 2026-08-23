import type { Metadata } from 'next'
import GameClient from './GameClient'

export const metadata: Metadata = {
  title: 'Game Virtual — Rizki Habibi Portfolio',
  description: 'Jelajahi portofolio Rizki Habibi dalam mode game 3D interaktif. Kendarai kendaraan, jelajahi peta Indonesia, dan temukan achievement tersembunyi.',
}

export default function GamePage() {
  return <GameClient />
}
