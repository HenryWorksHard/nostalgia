'use client'

import { useAppStore } from '@/stores/appStore'

export function VideoScreen() {
  const { setPhase, isMuted, toggleMute } = useAppStore()

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative">
      {/* Video placeholder - replace with actual video */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-gray-600 text-lg">
          {/* Placeholder for video - add actual video element here */}
          <div className="w-[640px] h-[360px] bg-gray-900 flex items-center justify-center border border-gray-800">
            <span className="text-gray-500">🎬 Video placeholder</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 flex gap-4">
        <button
          onClick={toggleMute}
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
        >
          <span>{isMuted ? '🔇' : '🔊'}</span>
          <span className="text-sm">{isMuted ? 'UNMUTE' : 'MUTE'}</span>
        </button>
        <button
          onClick={() => setPhase('desktop')}
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
        >
          <span>⏭️</span>
          <span className="text-sm">SKIP</span>
        </button>
      </div>
    </div>
  )
}
