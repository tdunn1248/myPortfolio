import React, {Component} from 'react'
import Divider from 'material-ui/Divider';

export default class ProjectsHeader extends Component {
  render() {
    return (
      <div className='project-heading'>
        <h2> Projects </h2>
        <Divider className='divider' style={{margin: '0 auto'}}/>
        <p className='span-divider'></p>
      </div>
    )
  }
}
