import React from 'react';

const ProjectCard = (props) => (
  <div className='project-card'>
    <div className='card-info'>
      <a href={props.link} target='_blank'>
        <img src={props.image} alt="" />
      </a>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  </div>
);

export default ProjectCard;
