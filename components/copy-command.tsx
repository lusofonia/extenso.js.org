'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="install-command">
      <span aria-hidden="true">$</span>
      <code>{command}</code>
      <button type="button" onClick={copy} aria-label={copied ? 'Comando copiado' : 'Copiar comando de instalação'}>
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        <span>{copied ? 'Copiado' : 'Copiar'}</span>
      </button>
    </div>
  )
}
