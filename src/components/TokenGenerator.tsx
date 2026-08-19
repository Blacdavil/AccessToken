import { useState } from 'react'
import { Copy, Check, Shield, KeyRound } from 'lucide-react'

export default function TokenGenerator() {
  const [token, setToken] = useState('')
  const [result, setResult] = useState('')
  const [copied, setCopied] = useState(false)

  const generate = () => {
    if (!token.trim()) {
      setResult('Please enter an authorized token.')
      return
    }

    // Safe local demo: no token is sent to any server.
    setResult(token.trim())
  }

  const copyToken = async () => {
    if (!result) return
    await navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section className="token-generator">
      <div className="token-card">
        <div className="token-icon">
          <KeyRound size={24} />
        </div>

        <h1>LEJITUBOSS TOKEN GENERATOR</h1>
        <p className="token-subtitle">
          Secure utility for your own authorized tokens
        </p>

        <label>Authorized Token</label>

        <textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste your own authorized token here..."
          rows={5}
        />

        <button onClick={generate}>
          GENERATE / VIEW TOKEN
        </button>

        {result && (
          <div className="token-result">
            <div className="result-header">
              <span>Result</span>

              <button className="copy-btn" onClick={copyToken}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <code>{result}</code>
          </div>
        )}

        <div className="security-note">
          <Shield size={18} />
          <span>
            Your token is processed locally by this demo and is not uploaded
            to an admin panel.
          </span>
        </div>
      </div>
    </section>
  )
}

