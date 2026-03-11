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
import { Gallery } from '../apps/Gallery'
import { ContractAddress } from '../apps/ContractAddress'
import { useWindowStore } from '@/stores/windowStore'
import { useAppStore } from '@/stores/appStore'
import { CONTRACT_ADDRESS } from '@/config/contract'

const desktopIcons = [
  { id: 'ca', icon: '📋', label: 'CA.exe' },
  { id: 'manifesto', icon: '📜', label: 'manifesto.exe' },
  { id: 'games', icon: '🎮', label: 'tradition_games' },
  { id: 'chart', icon: '📈', label: 'chart.exe' },
  { id: 'gallery', icon: '🖼️', label: 'gallery.jpg' },
  { id: 'readme', icon: '📝', label: 'README.txt' },
  { id: 'recycle', icon: '🗑️', label: 'Recycle Bin' },
  { id: 'socials', icon: '💬', label: 'socials.exe' },
]

const appConfigs: Record<string, { title: string; icon: string; width: number; height: number }> = {
  ca: { title: 'CA.exe - Contract Address', icon: '📋', width: 450, height: 400 },
  manifesto: { title: 'manifesto.exe - Notepad', icon: '📜', width: 500, height: 400 },
  readme: { title: 'README.txt - Notepad', icon: '📝', width: 450, height: 350 },
  games: { title: '2024 Games', icon: '🎮', width: 300, height: 200 },
  minesweeper: { title: 'Minesweeper - $2024 Edition', icon: '💣', width: 320, height: 420 },
  snake: { title: 'Snake - $2024 Edition', icon: '🐍', width: 420, height: 480 },
  paint: { title: 'Paint - $2024', icon: '🎨', width: 600, height: 500 },
  chart: { title: 'chart.exe - Internet Explorer', icon: '📈', width: 800, height: 600 },
  socials: { title: 'socials.exe - Follow $2024', icon: '💬', width: 350, height: 320 },
  gallery: { title: 'Hall of 2024 - Legends', icon: '🖼️', width: 600, height: 550 },
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
      case 'ca':
        return <ContractAddress />
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
      case 'gallery':
        return <Gallery />
      default:
        return <div className="p-4">Coming soon...</div>
    }
  }

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/images/bliss.jpg')",
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

const manifestoContent = `Return to 2024


You missed it, didn't you?

We all did. Some of us were there but sold too early. Some of us watched from the sidelines. Some of us didn't even know what Solana was.

2024 happened. And nothing will ever be like it again.


THE GOLDEN YEAR

Let's talk about what you missed.

A dog in a pink beanie went from zero to four billion dollars. WIF. The hat stays on. They put it on the Vegas Sphere. They knitted hats and put them on the Wall Street bull. A community so unhinged, so devoted, that they willed a shiba in headwear into the top ten tokens on earth.

BONK was an airdrop on Christmas Day. Free tokens for anyone who stuck around Solana when FTX collapsed and everyone else ran. Some people used it to pay rent during the crypto winter. The ones who held? Their $300 became a million.

POPCAT. A clicking cat meme from 2020 that somehow became a two billion dollar token. No utility. No roadmap. Just a cat that goes pop.

MEW started a whole cat season. GOAT launched the AI agent meta. PNUT went viral because New York officials killed a pet squirrel and the internet decided to make it immortal on the blockchain.

FARTCOIN. Literally called Fartcoin. Two and a half billion dollars. Because why not.

MOTHER and DADDY had celebrities fighting through their tokens. SLERF's dev accidentally burned the LP and the community turned the mistake into the meme. TREMP rode election season to nine figures.

This wasn't supposed to happen. None of it made sense. That was the point.


WHAT MADE IT DIFFERENT

Here's the thing about 2024: people believed.

Not in utility. Not in tech. Not in roadmaps or tokenomics or any of the words VCs use to make themselves sound smart.

They believed in each other.

When WIF dipped, the community posted memes. When BONK crashed, holders bought more. When some random coin with a ridiculous name launched and somehow caught fire, people didn't ask "what's the use case?" They asked "are we holding or what?"

Diamond hands meant something. Community meant something. The collective delusion that a picture of a dog or a frog or a squirrel could change your life... that was real. And sometimes it did.

The total memecoin market cap hit $150 billion in December 2024. People got rich. People got rekt. But everyone was playing the same game, and the game was fun.


THEN 2025 HAPPENED

And everything broke.

Hold times collapsed to 100 seconds. Bots front-ran every launch. Cabals coordinated in private Telegrams and dumped on retail before the chart even loaded. pump.fun went from 250,000 daily users to barely 20,000. Six billion dollars gone to rugs in the first few months.

The trust disappeared. The magic disappeared. What replaced it was a PvP arena where everyone was trying to exit on everyone else, and the only winners were the bots and the platforms.

2024 became a memory. A story you tell people who weren't there. "You should have seen it, man. WIF hit four billion. BONK saved Solana. We put a dog on the Sphere."


$2024

This is for everyone who missed it.

For the ones who sold WIF at $0.50. For the ones who saw BONK at $0.000001 and said "that's stupid." For the ones who were busy, or broke, or skeptical, or just not paying attention.

For the ones who watched from the sidelines while their friends made life-changing money on tokens named after animals and internet jokes.

For the ones who finally showed up in 2025 and found nothing but rugs and snipers and a wasteland where the magic used to be.

$2024 is a second chance.

Not to go back. You can't go back. But to remember what made it special. To gather people who actually hold. Who actually believe. Who post memes when the chart is red and buy dips instead of panic selling.

No sniping. No cabals. No ninety second exits.

Just a community that remembers what this was supposed to feel like.

The year that changed everything. The coins that made legends. The feeling of being early to something that mattered.

We can't relive 2024. But we can honor it.

We can return to 2024.


CA: ${CONTRACT_ADDRESS}
`

const readmeContent = `README.txt

2024 was the golden year.

WIF went from nothing to billions. A dog in a hat on the Vegas Sphere.
BONK revived Solana when everyone left it for dead.
POPCAT hit two billion. MEW started cat season.
GOAT launched the AI agent meta. PNUT made a squirrel immortal.
FARTCOIN did two and a half billion. Because why not.

communities that held together.
diamond hands that meant something.
memes that became movements.

then came 2025.
100 second hold times. bots everywhere. trust destroyed.
the magic died.

but we remember.

$2024 is for everyone who missed it.
for the ones who sold too early.
for the ones who showed up too late.
for the ones who want a second chance.

no sniping. no cabals. no ninety second exits.
just people who actually hold.

return to 2024.
`
