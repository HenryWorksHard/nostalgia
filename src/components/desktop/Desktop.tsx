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
import { useWindowStore } from '@/stores/windowStore'
import { useAppStore } from '@/stores/appStore'

const desktopIcons = [
  { id: 'manifesto', icon: '📜', label: 'manifesto.exe' },
  { id: 'games', icon: '🎮', label: 'tradition_games' },
  { id: 'chart', icon: '📈', label: 'chart.exe' },
  { id: 'gallery', icon: '🖼️', label: 'gallery.jpg' },
  { id: 'readme', icon: '📝', label: 'README.txt' },
  { id: 'recycle', icon: '🗑️', label: 'Recycle Bin' },
  { id: 'socials', icon: '💬', label: 'socials.exe' },
]

const appConfigs: Record<string, { title: string; icon: string; width: number; height: number }> = {
  manifesto: { title: 'manifesto.exe - Notepad', icon: '📜', width: 500, height: 400 },
  readme: { title: 'README.txt - Notepad', icon: '📝', width: 450, height: 350 },
  games: { title: 'Tradition Games', icon: '🎮', width: 300, height: 200 },
  minesweeper: { title: 'Minesweeper - $TRADITION Edition', icon: '💣', width: 320, height: 420 },
  snake: { title: 'Snake - $TRADITION Edition', icon: '🐍', width: 420, height: 480 },
  paint: { title: 'Paint - $TRADITION', icon: '🎨', width: 600, height: 500 },
  chart: { title: 'chart.exe - Internet Explorer', icon: '📈', width: 800, height: 600 },
  socials: { title: 'socials.exe - Follow $TRADITION', icon: '💬', width: 350, height: 320 },
  gallery: { title: 'Hall of Tradition - 2024 Legends', icon: '🖼️', width: 600, height: 550 },
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

const manifestoContent = `RETURN TO TRADITION
══════════════════════════════════

The memecoin space is broken. You already know this.

But what if the fix isn't forward. What if it's back?

There was a time when this meant something. Not the charts. Not the ticker. Not the 47th clone of a clone launched at 3am by a dev who'll vanish by sunrise.

There was a time when holding a memecoin meant you were part of something. You weren't exit liquidity. You were family.

Remember that?

Remember when a community would rally around a coin not because some KOL told them to, but because they genuinely believed in each other? When dips weren't a reason to panic sell. They were a reason to post memes, buy more, and tell the paper hands they'd regret it. When "diamond hands" wasn't a joke. It was an identity.

That world is gone. And what replaced it is a wasteland.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THE WRECKAGE

Let's not sugarcoat it. The average memecoin hold time has collapsed to 100 seconds. Not minutes. Not hours. Seconds. You don't even finish reading the chart before someone's already dumped.

Bots front-run every launch. Snipers take their cut before a single real human gets to click "buy." Cabals coordinate pumps in private Telegrams, then leave retail holding bags that were worthless before they were even purchased.

In 2025, 98% of tokens launched on Pump.fun collapsed within 24 hours. The platform went from 250,000 daily active users to barely 20,000 by summer. Interest in memecoins dropped over 80%. Six billion dollars gone to rug pulls in the first months of the year alone.

The space didn't just cool off. It cannibalized itself.

Every launch became a speed contest between bots. Every community became a temporary coalition of strangers trying to dump on each other. The term "community" became a punchline. Something you said in the Telegram to keep the marks holding while you exited.

This is what PvP culture built. A graveyard of tokens and a generation of traders who trust nothing and no one.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT WE LOST

Here's what nobody talks about: it didn't have to be this way. And you don't even have to go back that far to remember when it worked.

2024 was proof. The golden year. The year that showed what memecoins could be when community actually meant something.

Look at dogwifhat. A picture of a dog in a pink beanie. Literally nothing else. No utility. No roadmap. No VC backing. Just a community that decided the hat stays on. WIF went from $0.07 in January to $4.85 by March. It became the third largest memecoin on earth.

And what did that community do with their momentum? They raised $690,000 in four days. Four days. To put their dog on the Las Vegas Sphere. They knitted WIF hats and put them on the Wall Street bull statue. They weren't trading. They were building a culture.

BONK was born even earlier out of pure love for the Solana ecosystem. When FTX collapsed and Solana was left for dead, 22 anonymous devs airdropped 50% of the supply to the community on Christmas Day 2022. For free. No VCs. No private sales. Just people giving tokens to the builders, artists, and degens who stuck around when everyone else left.

Some of those early holders used their BONK to pay rent during the crypto winter. The ones who held? Their $300 in airdropped tokens became worth over a million dollars by late 2024. BONK didn't just survive. It revived an entire blockchain's culture.

And PEPE. A frog. A meme from the early internet that the crypto world decided to resurrect into a billion dollar token in three weeks flat. No team. No promises. Just the collective, irrational, beautiful energy of millions of people saying this means something to us.

These weren't products. They weren't protocols. They were movements.

DOGE funded a NASCAR car and sent a satellite to space. SHIB's community burned tokens, built a DEX, and launched an entire L2. All on pure conviction. The total memecoin market cap hit $150 billion in December 2024 because people believed in each other.

Movements don't run on sniping bots and sixty second holds. They run on conviction. On shared identity. On the insane, irrational decision to hold when everyone says you're a fool. And to post a meme about it while you do.

That energy. That was the magic. And we traded it for a PvP arena where the house always wins and the players always lose.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THE DISEASE HAS A NAME

It's not "the market." It's not "the cycle." It's the systematic destruction of trust.

When infrastructure providers make more money than traders, the game is rigged. When KOLs get paid to shill tokens they'll dump within minutes, the game is rigged. When bots control 60 to 80% of trading volume on a given token before any real person even loads the page, the game is rigged.

The Galaxy Research report said it plainly: memecoin trading is a zero sum game with negative expected value for the average participant. The only winners are the platforms, the bots, and the insiders. Everyone else? They're the product.

This isn't a market. It's an extraction machine. And the fuel it runs on is the last shred of trust people have left.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THE WAY BACK

So here's the question: is it over? Are memecoins just... done? Just another crypto relic, like ICOs and yield farming, that burned bright and burned out?

No.

Because the thing that made memecoins powerful in the first place hasn't changed. People still want to belong to something. They still want to believe. They still want that feeling of being early to something real, of holding alongside people who get it, of watching a community grow from nothing into something the whole market has to respect.

That impulse didn't die. It just got buried under a mountain of rugs, scams, and 100 second hold times.

The fix isn't a new mechanism. It's not a new chain. It's not AI integration or utility or any of the buzzwords people bolt onto tokens to make them feel legitimate. It's not FARTCOIN. It's not an AI chatbot spamming jokes that somehow spawns a billion dollar token that crashes 90% and leaves everyone holding air. That's not culture. That's a punchline with a price tag.

The fix is a return to what worked.

A return to conviction. A return to community that means something beyond a Telegram group with a countdown timer. A return to holding as an act of belief, not a position you manage for ninety seconds before rotating into the next launch.

The fix is a return to Tradition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

$TRADITION

This isn't a token with a roadmap full of promises nobody will keep. It's not a utility play. It's not an AI powered, cross chain, DeFi integrated anything.

It's a simple bet: that the old way still works.

That if you gather people who actually believe, who actually hold, who actually show up for each other, the rest takes care of itself.

Every cycle, the coins that survive aren't the ones with the best tech. They're the ones with the strongest communities. The ones where people don't just hold the token. They hold the line.

$TRADITION is for the ones who remember what this was supposed to be. For the ones who are tired of the PvP arena. For the ones who know that a memecoin isn't just a ticker. It's a tribe.

No sniping. No cabals. No ninety second exits.

Just people. Believing. Holding. Together.

The way it was always supposed to be.

The market forgot what made memecoins matter. We didn't.

Welcome back to Tradition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CA: [CONTRACT ADDRESS HERE]
`

const readmeContent = `README.txt
──────────

2024 was the golden year.

WIF went from nothing to billions. A dog in a hat on the Vegas Sphere.
BONK revived Solana when everyone left it for dead.
PEPE became a billion dollar frog in three weeks.

communities that held together.
diamond hands that meant something.
memes that became movements.

then came 2025.
100 second hold times. bots everywhere. trust destroyed.
the magic died.

but we remember.

$TRADITION is for the ones who miss what memecoins used to be.
not the rugs. not the snipers. not the cabals.
the conviction. the community. the belief.

the old way worked.
it's time to go back.

return to tradition.
`
