import React, { Component } from 'react'
import Mailto from 'react-mailto'
import MailIcon from 'material-ui/svg-icons/content/mail'

export default class Footer extends Component {
  render() {
    return (
      <footer id='contact'>
        <img className='profile-pic' src='src/public/images/profile-pic.jpg' />
        <div className='contact-contain'>
          <div className='social-container'>
            <a className='a-resume' href= 'src/public/Resume - TDunn.pdf' target='_blank'>
              <span className='social resume-social'>Resume</span>
            </a>
            <Mailto email="tdunn1248@gmail.com" obfuscate={true} >
              <img className='social' src='src/public/images/email.png' />
            </Mailto>
            <a href='https://www.linkedin.com/in/thomas-dunn-4ab0445b/' target='_blank'>
              <img className='social' src='src/public/images/linked-in.jpg' />
            </a>
            <a href='https://github.com/tdunn1248' target='_blank'>
              <img className='social' src='src/public/images/GitHub-Mark-64px.png' />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
