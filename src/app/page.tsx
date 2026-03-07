'use client'

import { useAppStore } from '@/stores/appStore'
import { Landing } from '@/components/Landing'
import { VideoScreen } from '@/components/VideoScreen'
import { Desktop } from '@/components/desktop/Desktop'

export default function Home() {
  const { phase } = useAppStore()

  return (
    <main className="w-full h-screen overflow-hidden">
      {phase === 'landing' && <Landing />}
      {phase === 'video' && <VideoScreen />}
      {phase === 'desktop' && <Desktop />}
    </main>
  )
}
