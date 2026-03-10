'use client'

export function Socials() {
  const handleXClick = () => {
    // URL coming soon
    // window.open('https://x.com/tradition', '_blank')
  }

  return (
    <div className="flex flex-col h-full bg-[#c0c0c0] items-center justify-center p-6">
      {/* Globe Icon */}
      <div className="mb-6">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="none" stroke="#4a9eda" strokeWidth="2" />
          <ellipse cx="24" cy="24" rx="8" ry="20" fill="none" stroke="#4a9eda" strokeWidth="2" />
          <line x1="4" y1="24" x2="44" y2="24" stroke="#4a9eda" strokeWidth="2" />
          <ellipse cx="24" cy="14" rx="16" ry="6" fill="none" stroke="#4a9eda" strokeWidth="1.5" />
          <ellipse cx="24" cy="34" rx="16" ry="6" fill="none" stroke="#4a9eda" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-8">
        $TRADITION Socials
      </h1>

      {/* X Link */}
      <button
        onClick={handleXClick}
        className="flex items-center gap-2 bg-white border-2 border-[#808080] px-6 py-2 mb-4 hover:bg-[#e8e8e8] active:border-[#404040] shadow-[inset_-1px_-1px_0_#404040,inset_1px_1px_0_#fff]"
      >
        <span className="text-lg">x</span>
        <span className="text-[#0066cc] font-medium">@traditionXP on X</span>
      </button>

      {/* Tagline */}
      <div className="mt-8 text-center text-[#404040] text-sm">
        <p>Remember the feeling</p>
      </div>
    </div>
  )
}
