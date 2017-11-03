import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ProjectCard = () => (
  <Card
    expanable={true}
    showExpandableButton={true}
    className='project-card'>
    <CardMedia

    >
      <a href='https://rocky-cove-38909.herokuapp.com/' target='_blank'>
        <img src="src/public/images/part-2.png" alt="" />
      </a>
    </CardMedia>
    <CardTitle
      title="National Park & Weather Api"
      subtitle="Find Current Information on your Favorite National Parks!" />
    <CardText>
      {/* <div className='project-item'>
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
            <img src='' />
          </a>
        </div>
      </div> */}

    </CardText>
  </Card>
);

export default ProjectCard;
