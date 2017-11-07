import React, { Component } from 'react'
import ProjectCard from './mu-project-card'
import Divider from 'material-ui/Divider';

export default class Projects extends Component {
  render() {
    return (
      <div id='projects' >
        {/* <div className='row'>
          <div className='project-container'>
            <div className='project-item'>
              <div className='project-col project-screen-shot'>
                <a href='https://rocky-cove-38909.herokuapp.com/' target='_blank'>
                  <img src='src/public/images/jason-laumeyer.09.46 PM.png' />
                </a>
              </div>
              <div className='project-col project-description'>
                <h3>Jason Laumeyer Photography Showcase</h3>
                <p>As I walk through the valley of the shadow of death
                  I take a look at my life and realize there's nothin' left
                  ‘Cause I've been blastin' and laughin' so long
                  That even my momma thinks that my mind is gone
                  But I ain't never crossed a man that didn't deserve it
                  Me be treated like a punk, you know that's unheard of
                  You better watch how you talkin' and where you walkin'
                  Or you and your homies might be lined in chalk
                  I really hate to trip, but I gotta loc
                  As they croak, I see myself in the pistol smoke
                  Fool, I'm the kinda G that little homies wanna be like
                  On my knees in the night, sayin' prayers in the street light</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className='row'>
          <div className='project-container'>
            <div className='project-item'>
              <div className='project-col project-description'>
                <h3>National Park Info and Maps</h3>
                <p>As I walk through the valley of the shadow of death
                  I take a look at my life and realize there's nothin' left
                  ‘Cause I've been blastin' and laughin' so long
                  That even my momma thinks that my mind is gone
                  But I ain't never crossed a man that didn't deserve it
                  Me be treated like a punk, you know that's unheard of
                  You better watch how you talkin' and where you walkin'
                  Or you and your homies might be lined in chalk
                  I really hate to trip, but I gotta loc
                  As they croak, I see myself in the pistol smoke
                  Fool, I'm the kinda G that little homies wanna be like
                  On my knees in the night, sayin' prayers in the street light</p>
              </div>
              <div className='project-col project-screen-shot'>
                <a href='https://rocky-cove-38909.herokuapp.com/' target='_blank'>
                  <img src='src/public/images/part-2.png' />
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <ProjectCard
          title={'National Parks'}
          subtitle={'Api for parks'}
          link={'https://rocky-cove-38909.herokuapp.com/'}
          image= {'src/public/images/part-2.png'}
          style={{backgroundColor: 'red'}}
        />
        <ProjectCard
          title={'Jason Laumeyer Photography'}
          subtitle={'A Photography showcase'}
          link={'https://rocky-cove-38909.herokuapp.com/'}
          image= {'src/public/images/jason-laumeyer.09.46 PM.png'}/>

      </div>
    )
  }
}

// props.link
// props.title
// props.subtitle
// props.projectPhoto
