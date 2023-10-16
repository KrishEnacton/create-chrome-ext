import { html, css, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'

@customElement('sidepanel-root')
export class Sidepanel extends LitElement {
  @state()
  countSync = 0

  private link = 'https://github.com/guocaoyi/create-chrome-ext'

  constructor() {
    super()
    chrome.storage.sync.get(['count'], (result) => {
      this.countSync = result.count || 0
    })

    chrome.runtime.onMessage.addListener((request) => {
      if (request.type === 'COUNT') {
        this.countSync = request.count || 0
      }
    })
  }

  render() {
    return html`
      <main>
        <h3>SidePanel Page</h3>
        <h4>Count from Popup: ${this.countSync}</h4>
        <a .href=${this.link} target="_blank"> generated by create-chrome-ext </a>
      </main>
    `
  }

  static styles = css`
    @media (prefers-color-scheme: light) {
      a:hover {
        color: #324fff;
      }
    }

    main {
      text-align: center;
      padding: 1em;
      margin: 0 auto;
    }

    h3 {
      color: #324fff;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 200;
      line-height: 1.2rem;
      margin: 2rem auto;
    }

    a {
      font-size: 0.5rem;
      margin: 0.5rem;
      color: #cccccc;
      text-decoration: none;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sidepanel-root': Sidepanel
  }
}
