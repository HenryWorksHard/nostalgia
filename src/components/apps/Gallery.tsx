'use client'

import { useState } from 'react'

interface MemeItem {
  id: string
  name: string
  year: string
  description: string
  placeholder: string // Will be replaced with actual images later
}

const memeCollection: MemeItem[] = [
  { id: '1', name: 'Dancing Baby', year: '1996', description: 'The original viral sensation', placeholder: 'dancing_baby.gif' },
  { id: '2', name: 'All Your Base', year: '2001', description: 'All your base are belong to us', placeholder: 'all_your_base.jpg' },
  { id: '3', name: 'Badger Badger', year: '2003', description: 'Mushroom mushroom', placeholder: 'badger.gif' },
  { id: '4', name: 'Numa Numa', year: '2004', description: 'Gary Brolsma changed everything', placeholder: 'numa_numa.jpg' },
  { id: '5', name: 'Star Wars Kid', year: '2002', description: 'The force was strong with this one', placeholder: 'starwars_kid.jpg' },
  { id: '6', name: 'Peanut Butter Jelly Time', year: '2002', description: 'Its peanut butter jelly time', placeholder: 'pbj_time.gif' },
  { id: '7', name: 'End of the World', year: '2003', description: 'But I am le tired', placeholder: 'end_of_world.jpg' },
  { id: '8', name: 'Hampster Dance', year: '1998', description: 'Dee da dee da dee da doh doh', placeholder: 'hampster.gif' },
  { id: '9', name: 'Dramatic Chipmunk', year: '2007', description: 'Dun dun dunnn', placeholder: 'chipmunk.gif' },
  { id: '10', name: 'Leroy Jenkins', year: '2005', description: 'At least I have chicken', placeholder: 'leroy.jpg' },
  { id: '11', name: 'Charlie the Unicorn', year: '2005', description: 'Candy mountain Charlie', placeholder: 'charlie.jpg' },
  { id: '12', name: 'Keyboard Cat', year: '2007', description: 'Play him off', placeholder: 'keyboard_cat.gif' },
]

export function Gallery() {
  const [selectedMeme, setSelectedMeme] = useState<MemeItem | null>(null)

  return (
    <div className="flex flex-col h-full bg-[#1a1a2e]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2d2d44] to-[#1a1a2e] px-4 py-3 border-b border-[#3d3d5c]">
        <h1 className="text-[#c9a227] font-bold text-lg tracking-wide">THE MEME MUSEUM</h1>
        <p className="text-[#808080] text-xs mt-1">Ancient artifacts from the old internet (2000-2007)</p>
      </div>

      {/* Gallery Grid */}
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          {memeCollection.map((meme) => (
            <button
              key={meme.id}
              onClick={() => setSelectedMeme(meme)}
              className="group relative bg-[#2d2d44] border-4 border-[#c9a227] p-1 hover:border-[#ffd700] transition-colors"
              style={{
                boxShadow: '4px 4px 0 rgba(0,0,0,0.5), inset 0 0 20px rgba(201,162,39,0.1)'
              }}
            >
              {/* Frame */}
              <div className="aspect-square bg-[#0d0d1a] flex items-center justify-center overflow-hidden">
                {/* Placeholder - will be replaced with actual images */}
                <div className="text-center p-2">
                  <div className="text-4xl mb-2 opacity-50">🖼</div>
                  <div className="text-[#808080] text-xs">{meme.name}</div>
                </div>
              </div>
              
              {/* Plaque */}
              <div className="bg-[#c9a227] text-[#1a1a2e] text-center py-1 mt-1">
                <div className="text-xs font-bold truncate px-1">{meme.name}</div>
                <div className="text-[10px]">{meme.year}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Info Panel - shows when meme selected */}
      {selectedMeme && (
        <div className="bg-[#2d2d44] border-t border-[#3d3d5c] px-4 py-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[#c9a227] font-bold">{selectedMeme.name}</h3>
              <p className="text-[#808080] text-sm">{selectedMeme.description}</p>
              <p className="text-[#606060] text-xs mt-1">Acquired: {selectedMeme.year}</p>
            </div>
            <button 
              onClick={() => setSelectedMeme(null)}
              className="text-[#808080] hover:text-white text-xl"
            >
              x
            </button>
          </div>
        </div>
      )}

      {/* Status bar */}
      <div className="bg-[#1a1a2e] border-t border-[#3d3d5c] px-2 py-1 text-xs text-[#606060]">
        {memeCollection.length} artifacts preserved | Click to inspect
      </div>
    </div>
  )
}
