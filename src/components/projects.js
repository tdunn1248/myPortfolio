import React, { Component } from 'react'
import ProjectCard from './mu-project-card'
import Divider from 'material-ui/Divider';

export default class Projects extends Component {
  render() {
    return (
      <div id='projects' >
        <ProjectCard
          title={'National Parks'}
          subtitle={'Find current National Park information including park descriptions, weather info, and sunset times. Check out your favorite parks from above with the Google Satellite map'}
          link={'https://shielded-plateau-63294.herokuapp.com/'}
          image= {'src/public/images/part-2.png'}
          style={{backgroundColor: 'red'}}
        />
        <ProjectCard
          title={'Jason Laumeyer Photography'}
          subtitle={'a photography showcase for a local photographer'}
          link={'https://rocky-cove-38909.herokuapp.com/'}
          image= {'src/public/images/jason-laumeyer.09.46 PM.png'}/>

      </div>
    )
  }
}
