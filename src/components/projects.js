import React, { Component } from 'react'
import ProjectCard from './mu-project-card'
import Divider from 'material-ui/Divider';

export default class Projects extends Component {
  render() {
    return (
      <div id='projects' >
        <ProjectCard
          title={'National Parks'}
          subtitle={'Api for parks'}
          link={'https://shielded-plateau-63294.herokuapp.com/'}
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
