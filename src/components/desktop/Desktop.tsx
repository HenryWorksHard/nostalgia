'use client'

import { DesktopIcon } from './DesktopIcon'
import { Taskbar } from '../taskbar/Taskbar'
import { Window } from '../window/Window'
import { Notepad } from '../apps/Notepad'
import { Minesweeper } from '../apps/Minesweeper'
import { Snake } from '../apps/Snake'
import { Paint } from '../apps/Paint'
import { RecycleBin } from '../apps/RecycleBin'
import { Socials } from '../apps/Socials'
import { useWindowStore } from '@/stores/windowStore'
import { useAppStore } from '@/stores/appStore'

const desktopIcons = [
  { id: 'manifesto', icon: '📜', label: 'manifesto.exe' },
  { id: 'games', icon: '🎮', label: 'dreamcore_games' },
  { id: 'chart', icon: '📈', label: 'chart.exe' },
  { id: 'gallery', icon: '🖼️', label: 'gallery.jpg' },
  { id: 'readme', icon: '📝', label: 'README.txt' },
  { id: 'recycle', icon: '🗑️', label: 'Recycle Bin' },
  { id: 'socials', icon: '💬', label: 'socials.exe' },
]

const appConfigs: Record<string, { title: string; icon: string; width: number; height: number }> = {
  manifesto: { title: 'manifesto.exe - Notepad', icon: '📜', width: 500, height: 400 },
  readme: { title: 'README.txt - Notepad', icon: '📝', width: 450, height: 350 },
  games: { title: 'Dreamcore Games', icon: '🎮', width: 300, height: 200 },
  minesweeper: { title: 'Minesweeper - $DREAMCORE Edition', icon: '💣', width: 320, height: 420 },
  snake: { title: 'Snake - $DREAMCORE Edition', icon: '🐍', width: 420, height: 480 },
  paint: { title: 'Paint - $DREAMCORE', icon: '🎨', width: 600, height: 500 },
  chart: { title: 'chart.exe - Internet Explorer', icon: '📈', width: 800, height: 600 },
  socials: { title: 'Socials', icon: '💬', width: 300, height: 250 },
  gallery: { title: 'Gallery', icon: '🖼️', width: 600, height: 500 },
  recycle: { title: 'Recycle Bin - Deleted Dreams', icon: '🗑️', width: 500, height: 450 },
}

export function Desktop() {
  const { windows, openWindow } = useWindowStore()
  const { setStartMenuOpen } = useAppStore()

  const handleIconDoubleClick = (id: string) => {
    const config = appConfigs[id]
    if (!config) return

    openWindow({
      id,
      title: config.title,
      icon: config.icon,
      component: id,
      x: 100 + Math.random() * 200,
      y: 50 + Math.random() * 100,
      width: config.width,
      height: config.height,
    })
  }

  const renderWindowContent = (component: string) => {
    switch (component) {
      case 'manifesto':
        return <Notepad content={manifestoContent} />
      case 'readme':
        return <Notepad content={readmeContent} />
      case 'minesweeper':
        return <Minesweeper />
      case 'snake':
        return <Snake />
      case 'paint':
        return <Paint />
      case 'games':
        return <GamesMenu onOpenGame={(game) => handleIconDoubleClick(game)} />
      case 'recycle':
        return <RecycleBin />
      case 'socials':
        return <Socials />
      default:
        return <div className="p-4">Coming soon...</div>
    }
  }

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/images/background.jpg')",
        backgroundColor: '#3a6ea5', // Fallback XP blue
        backgroundSize: 'cover',
      }}
      onClick={() => setStartMenuOpen(false)}
    >
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-1">
        {desktopIcons.map((item) => (
          <DesktopIcon
            key={item.id}
            icon={item.icon}
            label={item.label}
            onDoubleClick={() => handleIconDoubleClick(item.id)}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map((win) => (
        <Window key={win.id} window={win}>
          {renderWindowContent(win.component)}
        </Window>
      ))}

      {/* Taskbar */}
      <Taskbar />
    </div>
  )
}

function GamesMenu({ onOpenGame }: { onOpenGame: (game: string) => void }) {
  return (
    <div className="p-4 space-y-2">
      <button 
        onClick={() => onOpenGame('minesweeper')}
        className="flex items-center gap-2 w-full p-2 hover:bg-[#316ac5] hover:text-white"
      >
        <span>💣</span> Minesweeper
      </button>
      <button 
        onClick={() => onOpenGame('snake')}
        className="flex items-center gap-2 w-full p-2 hover:bg-[#316ac5] hover:text-white"
      >
        <span>🐍</span> Snake
      </button>
      <button 
        onClick={() => onOpenGame('paint')}
        className="flex items-center gap-2 w-full p-2 hover:bg-[#316ac5] hover:text-white"
      >
        <span>🎨</span> Paint
      </button>
    </div>
  )
}

const manifestoContent = `DREAMCORE - THE MANIFESTO
══════════════════════════════════

We remember.

The startup chime. The loading bars that meant something.
The desktop that felt like home.

Before notifications ruled us.
Before algorithms decided what we see.
Before everything became "content."

$DREAMCORE isn't just a token.
It's a time machine.
It's the feeling of simpler times.
It's proof that sometimes, going back is moving forward.

No roadmap. No utility. No promises.
Just vibes. Just memories. Just us.

Welcome home.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CA: [CONTRACT ADDRESS HERE]
`

const readmeContent = `README.txt
──────────

if you're reading this, you're early. or late.
doesn't matter.
you're here now and that's what counts.

$DREAMCORE is for those who remember.
remember what? you already know.

the dial-up sound.
the AIM away messages.
the feeling of your first computer.

try to explain this to someone who wasn't there.
go ahead. we'll wait.

you can't vamp dreamcore.
you can't fake memories.
you either remember or you don't.

welcome back.
`
