import React, { Component } from 'react'
import ProjectCard from './mu-project-card'
import Divider from 'material-ui/Divider';

export default class Projects extends Component {
  render() {
    return (
      <div id='projects' >
        <ProjectCard
          className='hover-blue'
          title={'National Parks'}
          subtitle={'Find current National Park information including park descriptions, weather info, and sunset times. Check out your favorite parks from above with the Google Satellite map'}
          link={'https://shielded-plateau-63294.herokuapp.com/'}
          image= {'src/public/images/part-2.png'}
          style={{backgroundColor: 'red'}}
        />
        <ProjectCard
          className='hover-blue'
          title={'Jason Laumeyer Photography'}
          subtitle={'a photography showcase for a local photographer'}
          link={'https://rocky-cove-38909.herokuapp.com/'}
          image= {'src/public/images/jason-laumeyer.09.46 PM.png'}/>
        <ProjectCard
          title={'Washee'}
          subtitle={'a React Native mobile app connecting car washers with customers using Redux for handling state and Google\'s Cloud Firestore for storing data'}
          subtitleStyle={{}}
          image= {'src/public/images/wip.jpg'}
          />

      </div>
    )
  }
}
