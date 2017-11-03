import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav-menu">
        <ul className='nav-list'>
          <li><a href="#app">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
}
