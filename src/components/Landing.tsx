'use client'

import { useEffect } from 'react'
import { useAppStore } from '@/stores/appStore'

export function Landing() {
  const { setPhase } = useAppStore()

  // Preload video and desktop background while on landing page
  useEffect(() => {
    const video = document.createElement('video')
    video.preload = 'auto'
    video.src = '/video/intro.mp4'
    video.load()
    
    // Preload desktop background
    const img = new Image()
    img.src = '/images/bliss.jpg'
  }, [])

  return (
    <div 
      className="w-full h-screen bg-black flex flex-col items-center justify-center cursor-pointer"
      onClick={() => setPhase('video')}
    >
      {/* Preload video in hidden element */}
      <link rel="preload" href="/video/intro.mp4" as="video" type="video/mp4" />
      
      {/* TRADITION Logo */}
      <div className="mb-16 text-center">
        <img 
          src="/images/tradition-logo.png" 
          alt="TRADITION" 
          className="h-24 md:h-32 mx-auto"
        />
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
