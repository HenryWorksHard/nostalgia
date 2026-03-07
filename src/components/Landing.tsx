'use client'

import { useAppStore } from '@/stores/appStore'

export function Landing() {
  const { setPhase } = useAppStore()

  return (
    <div 
      className="w-full h-screen bg-black flex flex-col items-center justify-center cursor-pointer"
      onClick={() => setPhase('video')}
    >
      {/* Logo placeholder - replace with actual logo */}
      <div className="mb-16 text-center">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-red-500">N</span>
          <span className="text-yellow-500">O</span>
          <span className="text-green-500">S</span>
          <span className="text-blue-500">T</span>
          <span className="text-purple-500">A</span>
          <span className="text-pink-500">L</span>
          <span className="text-cyan-500">G</span>
          <span className="text-orange-500">I</span>
          <span className="text-lime-500">A</span>
        </h1>
        <div className="text-4xl mt-4">🖥️</div>
      </div>

      {/* Click to Enter */}
      <div className="text-gray-400 text-lg tracking-widest animate-pulse">
        [ CLICK TO ENTER ]
      </div>

      {/* Tagline */}
      <p className="text-gray-500 mt-4 text-sm">
        Remember when computers felt like magic?
      </p>

      {/* Contract Address */}
      <p className="text-green-500 mt-8 text-xs font-mono">
        CA: [CONTRACT ADDRESS HERE]
      </p>
    </div>
  )
}
