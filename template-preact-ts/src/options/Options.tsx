import { useState } from 'preact/hooks'
import './Options.css'

export const Options = () => {
  const [crx, setCrx] = useState('chrome-extension-boilerplate-vite-svelte')

  return (
    <main>
      <h3>Options Page!</h3>

      <h6>v 0.0.1</h6>

      <a
        href="https://github.com/guocaoyi/chrome-extension-boilerplate-vite-svelte"
        target="_blank"
      >
        Power by {crx}
      </a>
    </main>
  )
}

export default Options
