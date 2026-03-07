'use client'

import { useEffect, useState } from 'react'
import { useWindowStore } from '@/stores/windowStore'
import { useAppStore } from '@/stores/appStore'
import { StartMenu } from '../start-menu/StartMenu'

export function Taskbar() {
  const { windows, activeWindowId, focusWindow, restoreWindow, minimizeWindow } = useWindowStore()
  const { startMenuOpen, setStartMenuOpen } = useAppStore()
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleTaskClick = (winId: string, isMinimized: boolean) => {
    if (isMinimized) {
      restoreWindow(winId)
    } else if (activeWindowId === winId) {
      minimizeWindow(winId)
    } else {
      focusWindow(winId)
    }
  }

  return (
    <>
      {startMenuOpen && <StartMenu />}
      
      <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-b from-[#245edb] via-[#3f8cf3] to-[#245edb] border-t-2 border-[#5fb3ff] flex items-center">
        {/* Start Button */}
        <button
          onClick={(e) => { e.stopPropagation(); setStartMenuOpen(!startMenuOpen) }}
          className={`
            flex items-center gap-1 h-[34px] px-3 mx-1 rounded-r-lg
            bg-gradient-to-b from-[#5cb85c] to-[#3d8b3d]
            border border-[#fff]/30
            text-white font-bold text-sm
            hover:from-[#6cc86c] hover:to-[#4d9b4d]
            ${startMenuOpen ? 'from-[#4aa84a] to-[#2d7b2d]' : ''}
          `}
        >
          <span className="text-lg">🪟</span>
          <span>Start</span>
        </button>

        {/* Quick Launch Divider */}
        <div className="w-px h-[28px] bg-[#1c4db8] mx-1" />

        {/* Running Apps */}
        <div className="flex-1 flex items-center gap-1 px-1 overflow-hidden">
          {windows.map((win) => (
            <button
              key={win.id}
              onClick={() => handleTaskClick(win.id, win.isMinimized)}
              className={`
                flex items-center gap-1 h-[28px] px-2 min-w-[120px] max-w-[180px]
                text-white text-sm truncate
                border border-[#fff]/20 rounded
                ${activeWindowId === win.id && !win.isMinimized
                  ? 'bg-[#1c4db8] border-[#fff]/40'
                  : 'bg-[#3d7df5] hover:bg-[#4d8dff]'
                }
              `}
            >
              <span>{win.icon}</span>
              <span className="truncate">{win.title.split(' - ')[0]}</span>
            </button>
          ))}
        </div>

        {/* System Tray */}
        <div className="flex items-center gap-2 px-3 h-full bg-gradient-to-b from-[#0f8eff] to-[#0b6fcd] border-l border-[#fff]/20">
          <span className="text-white/80 text-sm">🔊</span>
          <span className="text-white/80 text-sm">🌐</span>
          <span className="text-white text-sm font-medium">{time}</span>
        </div>
      </div>
    </>
  )
}
