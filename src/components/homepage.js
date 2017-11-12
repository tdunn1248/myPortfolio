import React, { Component } from 'react'
import KeyBoardRightArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

export default class HomePageBackground extends Component {
  render() {
    return (
      <div className='homepage-background'>
        <div className='homepage-welcome'>
          <div className='welcome-container'>
            <h1>Full Stack Software Developer</h1>
            <h6>
              Based out of the San Francisco Bay Area,
              I enjoy working across the stack to bring ideas and useful services to life.
            </h6>
          </div>
        </div>
      </div>
    )
  }
}
