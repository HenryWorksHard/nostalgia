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

  return (
    <div className="flex flex-col h-full bg-[#c0c0c0] items-center justify-center p-6">
      {/* Icon */}
      <div className="mb-6">
        <span className="text-5xl">📋</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-8">
        $2024 Contract Address
      </h1>

      {/* CA Display Box */}
      <div 
        className="flex items-center gap-2 bg-white border-2 border-[#808080] px-6 py-3 mb-4 cursor-pointer hover:bg-[#f0f0f0] transition-colors"
        style={{ boxShadow: 'inset -1px -1px 0 #404040, inset 1px 1px 0 #fff' }}
        onClick={handleCopy}
        title="Click to copy"
      >
        <span className="text-sm font-mono text-[#1a1a1a]">{CONTRACT_ADDRESS}</span>
      </div>

      {/* Copied indicator */}
      {copied && (
        <p className="text-[#008000] text-sm mb-4">
          ✓ Copied to clipboard
        </p>
      )}

      {/* Status */}
      <div className="mt-4 text-center text-[#404040] text-sm">
        <p>{IS_LAUNCHED ? '🟢 Live on Solana' : '🟡 Awaiting Launch'}</p>
      </div>

      {/* Tagline */}
      <div className="mt-8 text-center text-[#404040] text-sm">
        <p>Remember the feeling</p>
      </div>
    </div>
  )
}
