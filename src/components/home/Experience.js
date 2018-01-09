import React, {Component} from 'react';
import classNames from 'classnames';

import './Experience.css';

import {addVisibilitySensor} from './utils';

import notreDameLogo from '../../images/home/experience/notreDameLogo.png';
import microsoftLogo from '../../images/home/experience/microsoftLogo.png';
import firebaseLogo from '../../images/home/experience/firebaseLogo.png';
import googleLogo from '../../images/home/experience/googleLogo.png';

const experienceItems = {
  notreDame: {
    role: 'BS, Computer Science',
    dates: 'August 2008 - May 2012',
    image: notreDameLogo,
    alt: 'Notre Dame logo',
  },
  microsoft: {
    role: 'Software Development Engineer',
    dates: 'August 2012 - March 2014',
    image: microsoftLogo,
    alt: 'Microsoft logo',
  },
  firebase: {
    role: 'Core Developer',
    dates: 'April 2014 - April 2017',
    image: firebaseLogo,
    alt: 'Firebase logo',
  },
  google: {
    role: 'Senior Software Engineer',
    dates: 'October 2014 - April 2017',
    image: googleLogo,
    alt: 'Google logo',
  },
};

const ExperienceItem = ({experienceItemId}) => {
  const {role, dates, image, alt} = experienceItems[experienceItemId];

  return (
    <div className="experience-item">
      <div className="experience-item-logo-container">
        <img className="experience-item-logo" src={image} alt={alt} />
      </div>
      <p className="experience-item-role">{role}</p>
      <p className="experience-item-years">{dates}</p>
    </div>
  );
};

class Experience extends Component {
  render() {
    const experienceClassNames = classNames({
      experience: true,
      visible: this.props.isVisible,
    });

    return (
      <div className={experienceClassNames}>
        <ExperienceItem experienceItemId="notreDame" />
        <ExperienceItem experienceItemId="microsoft" />
        <ExperienceItem experienceItemId="firebase" />
        <ExperienceItem experienceItemId="google" />
      </div>
    );
  }
}

export default addVisibilitySensor(Experience);
