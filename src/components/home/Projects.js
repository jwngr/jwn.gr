import React, { Component } from 'react';
import classNames from 'classnames';

import './Projects.css';

import {addVisibilitySensor} from './utils';

import seerImage from '../../images/home/projects/seer.jpg';
import openSourceImage from '../../images/home/projects/gitHubProfile.jpg';
import running2016Image from '../../images/home/projects/running2016.jpg';
import rusticCitrusImage from '../../images/home/projects/rusticCitrus.jpg';
import presentationsImage from '../../images/home/projects/presentations.jpg';
import ticTacTicTacToeImage from '../../images/home/projects/ticTacTicTacToe.jpg';
import worldwideTripMicroblogImage from '../../images/home/projects/worldwideTripMicroblog.jpg';


const projects = {
  rusticCitrus: {
    name: 'Rustic Citrus',
    description: 'Make sense out of alphabet stew.',
    href: 'https://rusticcitrus.com/',
    image: rusticCitrusImage,
    alt: 'Rustic Citrus screenshot',
  },
  ticTacTicTacToe: {
    name: 'Tic-tac-tic-tac-toe',
    description: 'Tic-tac-toe with a multiplayer twist.',
    href: 'https://tic-tac-tic-tac-toe.firebaseapp.com/',
    image: ticTacTicTacToeImage,
    alt: 'Tic-tac-tic-tac-toe screenshot',
  },
  worldwideTripMicroblog: {
    name: 'Worldwide Trip Microblog',
    description: 'Documenting my trip around the world.',
    href: 'https://jwn.gr/microblog/',
    image: worldwideTripMicroblogImage,
    alt: 'Worldwide Trip Microblog screenshot',
  },
  running2016: {
    name: 'Running 2016',
    description: 'Catalogging 850 miles of running.',
    href: 'https://jwngr-5cb4b.firebaseapp.com/',
    image: running2016Image,
    alt: 'Running 2016 screenshot',
  },
  seer: {
    name: 'Seer',
    description: `Freshen up your GitHub org's repos.`,
    href: 'https://seer.firebaseapp.com/',
    image: seerImage,
    alt: 'Seer screenshot',
  },
  openSource: {
    name: 'Open Source',
    description: 'Making and maintaining software.',
    href: 'https://github.com/jwngr',
    image: openSourceImage,
    alt: 'GitHub profile screenshot',
  },
  presentations: {
    name: 'Presentations',
    description: 'Speaking on development and life.',
    href: 'https://github.com/jwngr/presentations',
    image: presentationsImage,
    alt: 'Google I/O 2016 presentation',
  },
};


const Project = ({projectId}) => {
  const {name, description, href, image, alt} = projects[projectId];

  return (
    <div className='project'>
      <a href={href} target='_blank'>
        <img src={image} alt={alt} />
        <div className='hover-content'>
          <p className='project-name'>{name}</p>
          <p className='project-tagline'>{description}</p>
        </div>
      </a>
    </div>
  );
};


class Projects extends Component {
  render() {
    const projectsClassNames = classNames({
      projects: true,
      visible: this.props.isVisible,
    });

    return (
      <div className={projectsClassNames}>
        <Project projectId='rusticCitrus' />
        <Project projectId='ticTacTicTacToe' />
        <Project projectId='worldwideTripMicroblog' />
        <Project projectId='running2016' />
        <Project projectId='seer' />
        <Project projectId='openSource' />
        <Project projectId='presentations' />

        {/* Empty flex box items to ensure the last row left-aligns itself */}
        <div className='empty-project'></div>
        <div className='empty-project'></div>
        <div className='empty-project'></div>
      </div>
    );
  }
}

export default addVisibilitySensor(Projects);
