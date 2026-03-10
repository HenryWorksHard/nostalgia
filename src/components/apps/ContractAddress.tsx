'use client'

import { useState } from 'react'
import { CONTRACT_ADDRESS, IS_LAUNCHED } from '@/config/contract'

export function ContractAddress() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = CONTRACT_ADDRESS
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDexScreener = () => {
    if (IS_LAUNCHED) {
      window.open(`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`, '_blank')
    }
  }

  const handleBirdeye = () => {
    if (IS_LAUNCHED) {
      window.open(`https://birdeye.so/token/${CONTRACT_ADDRESS}?chain=solana`, '_blank')
    }
  }

  return (
    <div className="flex flex-col h-full bg-[#0a0a1a]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#0a0a1a] px-4 py-3 border-b border-[#3d3d5c]">
        <h1 className="text-[#00ff00] font-bold text-lg tracking-wide font-mono">
          $TRADITION Contract Address
        </h1>
        <p className="text-[#808080] text-xs mt-1">
          {IS_LAUNCHED ? 'Token is LIVE on Solana' : 'Coming Soon...'}
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* CA Display */}
        <div className="w-full max-w-md">
          <label className="text-[#00ff00] text-xs font-mono mb-2 block">
            CONTRACT ADDRESS (CA):
          </label>
          <div 
            className="bg-black border-2 border-[#00ff00] p-4 font-mono text-sm break-all cursor-pointer hover:bg-[#001100] transition-colors"
            onClick={handleCopy}
          >
            <span className="text-[#00ff00]">{CONTRACT_ADDRESS}</span>
          </div>
          
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`
              w-full mt-3 py-2 font-mono text-sm border-2 transition-all
              ${copied 
                ? 'bg-[#00ff00] text-black border-[#00ff00]' 
                : 'bg-transparent text-[#00ff00] border-[#00ff00] hover:bg-[#00ff00] hover:text-black'
              }
            `}
          >
            {copied ? '✓ COPIED TO CLIPBOARD' : '📋 CLICK TO COPY'}
          </button>
        </div>

        {/* Quick Links */}
        {IS_LAUNCHED && (
          <div className="mt-6 flex gap-3">
            <button
              onClick={handleDexScreener}
              className="px-4 py-2 bg-[#1a1a2e] border border-[#3d3d5c] text-white text-sm hover:bg-[#2d2d44] transition-colors"
            >
              📈 DexScreener
            </button>
            <button
              onClick={handleBirdeye}
              className="px-4 py-2 bg-[#1a1a2e] border border-[#3d3d5c] text-white text-sm hover:bg-[#2d2d44] transition-colors"
            >
              🦅 Birdeye
            </button>
          </div>
        )}

        {/* Status Indicator */}
        <div className="mt-8 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded ${IS_LAUNCHED ? 'bg-[#00ff00]/20' : 'bg-[#ffff00]/20'}`}>
            <span className={`w-2 h-2 rounded-full ${IS_LAUNCHED ? 'bg-[#00ff00] animate-pulse' : 'bg-[#ffff00]'}`} />
            <span className={`text-sm font-mono ${IS_LAUNCHED ? 'text-[#00ff00]' : 'text-[#ffff00]'}`}>
              {IS_LAUNCHED ? 'LIVE ON SOLANA' : 'AWAITING LAUNCH'}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1a1a2e] border-t border-[#3d3d5c] px-4 py-2 text-xs text-[#808080] text-center">
        Always verify the CA before buying • DYOR • NFA
      </div>
    </div>
  )
}
