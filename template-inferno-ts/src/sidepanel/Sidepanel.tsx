import { Component } from 'inferno'
import './Sidepanel.css'

interface State {
  countSync: number
}

export class Sidepanel extends Component<unknown, State> {
  link = 'https://github.com/guocaoyi/create-chrome-ext'
  state: State

  constructor(props: unknown) {
    super(props)
    this.state = {
      countSync: 0,
    }
  }

  componentDidMount() {
    chrome.storage.sync.get(['count'], (result) => {
      this.setState({ countSync: result.count || 0 })
    })

    chrome.runtime.onMessage.addListener((request) => {
      if (request.type === 'COUNT') {
        this.setState({ countSync: request.count || 0 })
      }
    })
  }

  render() {
    return (
      <main>
        <h3>SidePanel Page</h3>
        <h4>Count from Popup: {this?.state?.countSync ?? 0}</h4>
        <a href={this.link} target="_blank">
          generated by create-chrome-ext
        </a>
      </main>
    )
  }
}

export default Sidepanel
