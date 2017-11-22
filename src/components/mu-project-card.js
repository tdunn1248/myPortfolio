import React from 'react'

const ProjectCard = (props) => (
  <div className='project-card'>
    <a className='a-project-card' href={props.link} target='_blank'>
      <div className='card-info'>
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </div>
    </a>
  </div>
);

export default ProjectCard
