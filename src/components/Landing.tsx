'use client'

import { useEffect, useRef } from 'react'
import { useAppStore } from '@/stores/appStore'
import { CONTRACT_ADDRESS } from '@/config/contract'

export function Landing() {
  const { setPhase } = useAppStore()
  const videoRef = useRef<HTMLVideoElement>(null)

  // Aggressively preload video on page load
  useEffect(() => {
    // Preload desktop background
    const img = new Image()
    img.src = '/images/bliss.jpg'
    
    // Force video to buffer by loading it
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [])

  return (
    <div 
      className="w-full h-screen bg-black flex flex-col items-center justify-center cursor-pointer"
      onClick={() => setPhase('video')}
    >
      {/* Hidden video element to force preloading */}
      <video 
        ref={videoRef}
        src="/video/intro.mp4" 
        preload="auto"
        muted
        playsInline
        className="hidden"
      />
      
      {/* Preload hints */}
      <link rel="preload" href="/video/intro.mp4" as="video" type="video/mp4" />
      <link rel="preload" href="/images/bliss.jpg" as="image" />
      
      {/* Tradition Logo */}
      <div className="mb-16 text-center">
        <img 
          src="/images/tradition-logo.png" 
          alt="Tradition" 
          className="h-24 md:h-32 mx-auto"
        />
      </div>

      {/* Click to Enter */}
      <div className="text-gray-400 text-lg tracking-widest animate-pulse">
        [ CLICK TO ENTER ]
      </div>

      {/* Tagline */}
      <p className="text-gray-500 mt-4 text-sm">
        Return to Tradition
      </p>

      {/* Contract Address */}
      <p className="text-green-500 mt-8 text-xs font-mono">
        CA: {CONTRACT_ADDRESS}
      </p>
    </div>
  )
}
