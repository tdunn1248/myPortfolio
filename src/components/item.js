import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='item'>
        {this.props.children}
      </div>
    )
  }
}
