'use client'

// XP-style X (Twitter) icon - pixelated retro look
function XIcon() {
  return (
    <svg 
      width="48" 
      height="48" 
      viewBox="0 0 48 48" 
      className="drop-shadow-md"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Outer border - dark */}
      <rect x="8" y="8" width="32" height="32" fill="#1a1a2e" rx="4" />
      {/* Inner background - slightly lighter */}
      <rect x="10" y="10" width="28" height="28" fill="#16213e" rx="3" />
      {/* X letter - white with slight 3D effect */}
      <path 
        d="M16 14 L22 22 L16 32 L19 32 L24 25 L29 32 L32 32 L26 22 L32 14 L29 14 L24 20 L19 14 Z" 
        fill="#ffffff"
      />
      {/* Highlight on top-left for XP 3D effect */}
      <rect x="10" y="10" width="28" height="2" fill="#2a4a7a" opacity="0.5" rx="1" />
      <rect x="10" y="10" width="2" height="28" fill="#2a4a7a" opacity="0.3" rx="1" />
    </svg>
  )
}

interface SocialLink {
  name: string
  icon: React.ReactNode
  url: string | null
  label: string
}

const socialLinks: SocialLink[] = [
  { 
    name: 'X (Twitter)', 
    icon: <XIcon />, 
    url: null, // Link coming soon
    label: 'Follow us on X'
  },
]

export function Socials() {
  const handleClick = (url: string | null) => {
    if (url) {
      window.open(url, '_blank')
    }
  }

  return (
    <div className="flex flex-col h-full bg-[#ece9d8]">
      {/* Title bar content area */}
      <div className="p-4 flex-1">
        <div className="bg-white border-2 border-[#848484] rounded p-4 shadow-inner">
          <h2 className="text-sm font-bold text-[#003087] mb-4 border-b border-[#848484] pb-2">
            Connect with $DREAMCORE
          </h2>
          
          <div className="flex flex-col gap-3">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => handleClick(social.url)}
                className="flex items-center gap-3 p-2 hover:bg-[#316ac5] hover:text-white rounded transition-colors group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#ece9d8] rounded border border-[#848484] group-hover:border-white">
                  {social.icon}
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">{social.name}</div>
                  <div className="text-xs text-[#808080] group-hover:text-white">
                    {social.label}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="bg-[#ece9d8] border-t border-[#848484] px-2 py-1 text-xs text-[#808080]">
        Click to open in new window
      </div>
    </div>
  )
}
