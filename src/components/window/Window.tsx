'use client'

import { useRef, useState, useEffect } from 'react'
import { useWindowStore, WindowState } from '@/stores/windowStore'

interface WindowProps {
  window: WindowState
  children: React.ReactNode
}

export function Window({ window: win, children }: WindowProps) {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, updateWindowPosition, activeWindowId } = useWindowStore()
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [windowStart, setWindowStart] = useState({ x: 0, y: 0 })
  
  const isActive = activeWindowId === win.id

  if (win.isMinimized) return null

  const handleMouseDown = (e: React.MouseEvent) => {
    if (win.isMaximized) return
    e.preventDefault()
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
    setWindowStart({ x: win.x, y: win.y })
    focusWindow(win.id)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    const deltaX = e.clientX - dragStart.x
    const deltaY = e.clientY - dragStart.y
    updateWindowPosition(win.id, windowStart.x + deltaX, windowStart.y + deltaY)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragStart, windowStart])

  return (
    <div
      className="absolute"
      style={{
        zIndex: win.zIndex,
        left: win.isMaximized ? 0 : win.x,
        top: win.isMaximized ? 0 : win.y,
        width: win.isMaximized ? '100%' : win.width,
        height: win.isMaximized ? 'calc(100% - 40px)' : win.height,
      }}
      onMouseDown={() => focusWindow(win.id)}
    >
      <div className={`
        flex flex-col h-full
        bg-[#ece9d8] 
        border-t-[3px] border-l-[3px] border-[#fff]
        border-r-[3px] border-b-[3px] border-r-[#848484] border-b-[#848484]
        shadow-xl
        ${isActive ? '' : 'opacity-95'}
      `}>
        {/* Title Bar */}
        <div
          className={`
            flex items-center justify-between px-1 py-0.5 select-none
            ${win.isMaximized ? 'cursor-default' : 'cursor-move'}
            ${isActive 
              ? 'bg-gradient-to-r from-[#0a246a] via-[#0a246a] to-[#a6caf0]' 
              : 'bg-gradient-to-r from-[#7a96df] via-[#7a96df] to-[#a6caf0]'
            }
          `}
          onMouseDown={handleMouseDown}
          onDoubleClick={() => maximizeWindow(win.id)}
        >
          <div className="flex items-center gap-1">
            <span className="text-sm">{win.icon}</span>
            <span className="text-white text-sm font-bold truncate max-w-[200px]">
              {win.title}
            </span>
          </div>
          
          {/* Window Controls */}
          <div className="flex gap-0.5">
            <button
              onClick={(e) => { e.stopPropagation(); minimizeWindow(win.id) }}
              onMouseDown={(e) => e.stopPropagation()}
              className="w-5 h-5 bg-gradient-to-b from-[#fff] to-[#c4c4c4] border border-[#0a246a] rounded-sm flex items-center justify-center text-black text-xs font-bold hover:from-[#e8f4ff] hover:to-[#b0d0ff]"
            >
              _
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); maximizeWindow(win.id) }}
              onMouseDown={(e) => e.stopPropagation()}
              className="w-5 h-5 bg-gradient-to-b from-[#fff] to-[#c4c4c4] border border-[#0a246a] rounded-sm flex items-center justify-center text-black text-xs font-bold hover:from-[#e8f4ff] hover:to-[#b0d0ff]"
            >
              □
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); closeWindow(win.id) }}
              onMouseDown={(e) => e.stopPropagation()}
              className="w-5 h-5 bg-gradient-to-b from-[#c75050] to-[#a03030] border border-[#0a246a] rounded-sm flex items-center justify-center text-white text-xs font-bold hover:from-[#e87070] hover:to-[#c05050]"
            >
              ×
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div className="flex-1 overflow-hidden bg-white">
          {children}
        </div>
      </div>
    </div>
  )
}
