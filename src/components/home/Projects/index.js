import Link from 'gatsby-link';
import classNames from 'classnames';
import React, {Component} from 'react';

import './index.css';

import {addVisibilitySensor} from '../utils';

import seerImage from '../../../images/home/projects/seer.jpg';
import openSourceImage from '../../../images/home/projects/gitHubProfile.jpg';
import running2016Image from '../../../images/home/projects/running2016.jpg';
import rusticCitrusImage from '../../../images/home/projects/rusticCitrus.jpg';
import presentationsImage from '../../../images/home/projects/presentations.jpg';
import ticTacTicTacToeImage from '../../../images/home/projects/ticTacTicTacToe.jpg';
import worldwideTripMicroblogImage from '../../../images/home/projects/worldwideTripMicroblog.jpg';

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
    relativeLink: '/microblog/',
    image: worldwideTripMicroblogImage,
    alt: 'Worldwide Trip Microblog screenshot',
  },
  running2016: {
    name: 'Running 2016',
    description: 'Catalogging 850 miles of running.',
    href: 'https://running-2016.firebaseapp.com/',
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
  const {name, description, href, relativeLink, image, alt} = projects[projectId];

  let imageContent = <img src={image} alt={alt} />;
  let hoverContent = (
    <div className="hover-content">
      <p className="project-name">{name}</p>
      <p className="project-tagline">{description}</p>
    </div>
  );

  let linkContent;
  if (typeof href !== 'undefined') {
    linkContent = (
      <a href={href} target="_blank" rel="noopener">
        {imageContent}
        {hoverContent}
      </a>
    );
  } else {
    linkContent = (
      <Link to={relativeLink}>
        {imageContent}
        {hoverContent}
      </Link>
    );
  }

  return <div className="project">{linkContent}</div>;
};

class Projects extends Component {
  render() {
    const projectsClassNames = classNames({
      projects: true,
      visible: this.props.isVisible,
    });

    return (
      <div className={projectsClassNames}>
        <Project projectId="rusticCitrus" />
        <Project projectId="ticTacTicTacToe" />
        <Project projectId="worldwideTripMicroblog" />
        <Project projectId="running2016" />
        <Project projectId="seer" />
        <Project projectId="openSource" />
        <Project projectId="presentations" />

        {/* Empty flex box items to ensure the last row left-aligns itself */}
        <div className="empty-project" />
        <div className="empty-project" />
        <div className="empty-project" />
      </div>
    );
  }
}

export default addVisibilitySensor(Projects);