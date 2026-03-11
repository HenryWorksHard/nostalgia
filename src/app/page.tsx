'use client'

// Set to false to show the full site
const COMING_SOON_MODE = false

import { useAppStore } from '@/stores/appStore'
import { Landing } from '@/components/Landing'
import { VideoScreen } from '@/components/VideoScreen'
import { Desktop } from '@/components/desktop/Desktop'

function ComingSoonOverlay() {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/images/tradition-logo.png" 
            alt="2024" 
            className="h-24 md:h-32 mx-auto"
          />
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-block mb-8">
          <div className="bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-black font-bold text-2xl md:text-4xl px-8 py-4 rounded-lg shadow-2xl transform -rotate-2">
            🚧 COMING SOON 🚧
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Return to 2024
        </p>

        {/* Animated dots */}
        <div className="flex justify-center gap-2">
          <span className="w-3 h-3 bg-[#ffd700] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-3 h-3 bg-[#ffd700] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-3 h-3 bg-[#ffd700] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>

        {/* Subtext */}
        <p className="text-gray-600 text-sm mt-8">
          Something legendary is brewing...
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  const { phase } = useAppStore()

  // Show coming soon overlay when in maintenance mode
  if (COMING_SOON_MODE) {
    return <ComingSoonOverlay />
  }

  return (
    <main className="w-full h-screen overflow-hidden">
      {phase === 'landing' && <Landing />}
      {phase === 'video' && <VideoScreen />}
      {phase === 'desktop' && <Desktop />}
    </main>
  )
}
