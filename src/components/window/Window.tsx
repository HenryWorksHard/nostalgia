'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useWindowStore, WindowState } from '@/stores/windowStore'

interface WindowProps {
  window: WindowState
  children: React.ReactNode
}

export function Window({ window: win, children }: WindowProps) {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, updateWindowPosition, activeWindowId } = useWindowStore()
  const [isDragging, setIsDragging] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)
  
  const isActive = activeWindowId === win.id

  if (win.isMinimized) return null

  const windowStyle = win.isMaximized ? {
    x: 0,
    y: 0,
    width: '100%',
    height: 'calc(100% - 40px)', // Leave room for taskbar
  } : {
    x: win.x,
    y: win.y,
    width: win.width,
    height: win.height,
  }

  return (
    <motion.div
      className="absolute"
      style={{
        zIndex: win.zIndex,
        ...(!win.isMaximized && { left: win.x, top: win.y, width: win.width, height: win.height }),
        ...(win.isMaximized && { left: 0, top: 0, width: '100%', height: 'calc(100% - 40px)' }),
      }}
      drag={!win.isMaximized}
      dragMomentum={false}
      dragListener={false}
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
        <motion.div
          className={`
            flex items-center justify-between px-1 py-0.5 cursor-move select-none
            ${isActive 
              ? 'bg-gradient-to-r from-[#0a246a] via-[#0a246a] to-[#a6caf0]' 
              : 'bg-gradient-to-r from-[#7a96df] via-[#7a96df] to-[#a6caf0]'
            }
          `}
          drag={!win.isMaximized}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={(_, info) => {
            setIsDragging(false)
            updateWindowPosition(win.id, win.x + info.offset.x, win.y + info.offset.y)
          }}
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
              className="w-5 h-5 bg-gradient-to-b from-[#fff] to-[#c4c4c4] border border-[#0a246a] rounded-sm flex items-center justify-center text-black text-xs font-bold hover:from-[#e8f4ff] hover:to-[#b0d0ff]"
            >
              _
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); maximizeWindow(win.id) }}
              className="w-5 h-5 bg-gradient-to-b from-[#fff] to-[#c4c4c4] border border-[#0a246a] rounded-sm flex items-center justify-center text-black text-xs font-bold hover:from-[#e8f4ff] hover:to-[#b0d0ff]"
            >
              □
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); closeWindow(win.id) }}
              className="w-5 h-5 bg-gradient-to-b from-[#c75050] to-[#a03030] border border-[#0a246a] rounded-sm flex items-center justify-center text-white text-xs font-bold hover:from-[#e87070] hover:to-[#c05050]"
            >
              ×
            </button>
          </div>
        </motion.div>

        {/* Window Content */}
        <div className="flex-1 overflow-hidden bg-white">
          {children}
        </div>
      </div>
    </motion.div>
  )
}
