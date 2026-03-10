'use client'

interface RecycleItem {
  ticker: string
  name: string
  ath: string
  current: string
  downPercent: string
  athDate: string
}

const recycleItems: RecycleItem[] = [
  { ticker: '$WIF', name: 'dogwifhat', ath: '$4.83', current: '$0.17', downPercent: '-96%', athDate: 'Mar 2024' },
  { ticker: '$BONK', name: 'Bonk', ath: '$0.0000582', current: '$0.00000606', downPercent: '-90%', athDate: 'Nov 2024' },
  { ticker: '$POPCAT', name: 'Popcat', ath: '$2.05', current: '$0.052', downPercent: '-97%', athDate: 'Nov 2024' },
  { ticker: '$MEW', name: 'cat in a dogs world', ath: '$0.0129', current: '$0.00061', downPercent: '-95%', athDate: 'Nov 2024' },
  { ticker: '$MOTHER', name: 'Mother Iggy', ath: '$0.23', current: '$0.0012', downPercent: '-99%', athDate: 'Jun 2024' },
  { ticker: '$DADDY', name: 'Daddy Tate', ath: '$0.29', current: '$0.0062', downPercent: '-98%', athDate: 'Jun 2024' },
  { ticker: '$PNUT', name: 'Peanut the Squirrel', ath: '$2.44', current: '$0.046', downPercent: '-98%', athDate: 'Nov 2024' },
  { ticker: '$GOAT', name: 'Goatseus Maximus', ath: '$1.35', current: '$0.019', downPercent: '-99%', athDate: 'Nov 2024' },
  { ticker: '$FARTCOIN', name: 'Fartcoin', ath: '$2.48', current: '$0.16', downPercent: '-94%', athDate: 'Jan 2025' },
  { ticker: '$SLERF', name: 'Slerf', ath: '$1.30', current: '$0.0042', downPercent: '-99.7%', athDate: 'Mar 2024' },
  { ticker: '$TREMP', name: 'Doland Tremp', ath: '$1.51', current: '$0.0059', downPercent: '-99.6%', athDate: '2024' },
]

export function RecycleBin() {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Menu Bar */}
      <div className="flex items-center bg-[#ece9d8] border-b border-[#848484] px-1 py-0.5 text-xs">
        <button className="px-2 py-0.5 hover:bg-[#316ac5] hover:text-white">File</button>
        <button className="px-2 py-0.5 hover:bg-[#316ac5] hover:text-white">Edit</button>
        <button className="px-2 py-0.5 hover:bg-[#316ac5] hover:text-white">View</button>
        <button className="px-2 py-0.5 hover:bg-[#316ac5] hover:text-white">Help</button>
      </div>

      {/* Title */}
      <div className="bg-[#ffffc8] border-b border-[#808080] p-2 text-xs">
        <p className="font-bold">🗑️ Deleted Gains - 2024 Memecoins</p>
        <p className="text-[#808080]">All-Time Highs vs Now. RIP.</p>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-[80px_1fr_90px_90px_70px] bg-[#ece9d8] border-b border-[#848484] text-xs font-semibold">
        <div className="px-2 py-1 border-r border-[#848484]">Ticker</div>
        <div className="px-2 py-1 border-r border-[#848484]">Name</div>
        <div className="px-2 py-1 border-r border-[#848484]">ATH</div>
        <div className="px-2 py-1 border-r border-[#848484]">Now</div>
        <div className="px-2 py-1">Loss</div>
      </div>

      {/* Items List */}
      <div className="flex-1 overflow-auto">
        {recycleItems.map((item, index) => (
          <div 
            key={index}
            className="grid grid-cols-[80px_1fr_90px_90px_70px] text-xs border-b border-[#e5e5e5] hover:bg-[#316ac5] hover:text-white group cursor-default"
          >
            <div className="px-2 py-1.5 font-bold text-[#316ac5] group-hover:text-white truncate">
              {item.ticker}
            </div>
            <div className="px-2 py-1.5 truncate" title={item.name}>
              {item.name}
            </div>
            <div className="px-2 py-1.5 text-[#008000] group-hover:text-white font-mono">
              {item.ath}
            </div>
            <div className="px-2 py-1.5 text-[#808080] group-hover:text-white font-mono">
              {item.current}
            </div>
            <div className="px-2 py-1.5 text-[#cc0000] group-hover:text-white font-bold">
              {item.downPercent}
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-[#ffffc8] border-t border-[#808080] p-2 text-xs">
        <p className="font-bold">These gains cannot be recovered.</p>
        <p className="text-[#808080]">They exist only in our memories now. Return to Tradition.</p>
      </div>

      {/* Status Bar */}
      <div className="bg-[#ece9d8] border-t border-[#848484] px-2 py-1 text-xs text-[#808080]">
        {recycleItems.length} coins - billions of dollars of unrealized gains
      </div>
    </div>
  )
}
