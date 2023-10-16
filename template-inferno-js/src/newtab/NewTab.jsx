import { Component } from 'inferno'
import './NewTab.css'

export class NewTab extends Component {
  link = 'https://github.com/guocaoyi/create-chrome-ext'
  intervalId = null

  constructor(props) {
    super(props)
    this.state = { time: this.getTime() }
  }

  getTime = () => {
    const date = new Date()
    const hour = String(date.getHours()).padStart(2, '0')
    const minute = String(date.getMinutes()).padStart(2, '0')
    return `${hour}:${minute}`
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: this.getTime() })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    return (
      <section>
        <span></span>
        <h1>{this.state.time}</h1>
        <a href={this.link} target="_blank">
          generated by create-chrome-ext
        </a>
      </section>
    )
  }
}

export default NewTab