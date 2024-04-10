import React, {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
    modeContainer: 'darkModeContainer',
    modeHeading: 'lightHeading',
    modeButton: 'lightButtonStyle',
  }

  modeSwitch = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
      modeContainer: prevState.isDarkMode
        ? 'lightModeContainer'
        : 'darkModeContainer',
      modeHeading: prevState.isDarkMode ? 'darkHeading' : 'lightHeading',
      modeButton: prevState.isDarkMode ? 'darkButtonStyle' : 'lightButtonStyle',
    }))
  }

  render() {
    const {modeContainer, modeHeading, modeButton} = this.state
    return (
      <div className="container">
        <div className={modeContainer}>
          <h1 className={modeHeading}>Click To Change Mode</h1>
          <button onClick={this.modeSwitch} className={modeButton}>
            {this.state.isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
