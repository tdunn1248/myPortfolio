import React, { Component } from 'react'
import {blueGrey500} from 'material-ui/styles/colors'

const style = {
  backgroundColor: blueGrey500
};

export default class StackLogos extends Component {
  render() {
    return (
      <div className='stack-container' style={style}>
        <div className='stack-logo-container'>
          <img className='js-logo' src='src/public/images/JavaScript-logo.png' />
          <img className='stack-logo' src='src/public/images/react-redux.png' />
          <img className='stack-logo' src='src/public/images/nodejs.png' />
          <img className='stack-logo' src='src/public/images/postgresql.jpg' />
        </div>
      </div>
    )
  }
}
