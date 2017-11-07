import React, { Component } from 'react'
import Mailto from 'react-mailto'
import MailIcon from 'material-ui/svg-icons/content/mail'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div  id='contact' className='contact-contain'>
          <img className='profile-pic' src='src/public/images/profile-pic.jpg' />
          <div className='social-container'>
            <Mailto email="tdunn1248@gmail.com" obfuscate={true} >
              <img className='social' src='src/public/images/email.png' />
            </Mailto>
            <a href=''>
              <img className='social' src='src/public/images/GitHub-Mark-64px.png' />
            </a>
            <a href=''>
              <img className='social' src='src/public/images/linked-in.jpg' />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
