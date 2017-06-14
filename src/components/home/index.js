import React, { Component } from 'react';
import {Link as ScrollLink} from'react-scroll';

import './index.css';

import Projects from './Projects';
import Signature from './Signature';
import Experience from './Experience';
import SocialIcons from './SocialIcons';
import NewsletterSignupForm from './NewsletterSignupForm';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <SocialIcons />

        <div id='main-section' className='section'>
          <Signature />
          <div className='nav-container'>
            <h2 className='tagline'>Experience Builder</h2>
            <svg className='hash' viewBox='0 0 71 90'>
              <g>
                <line y2='68' x2='53' y1='18' x1='3' />
                <line y2='53' x2='68' y1='3' x1='18' />
                <line y2='3' x2='53' y1='53' x1='3' />
                <line y2='18' x2='68' y1='68' x1='18' />
              </g>
            </svg>
            <div className='nav'>
              <ScrollLink to='experience-section' smooth={true} duration={500}>
                Where I've Been
              </ScrollLink>

              <p className='nav-separator'>|</p>

              <ScrollLink to='projects-section' smooth={true} duration={500}>
                What I've Built
              </ScrollLink>

              <p className='nav-separator'>|</p>

              <ScrollLink to='newsletter-section' smooth={true} duration={500}>
                Where I'm Going
              </ScrollLink>
            </div>
          </div>
        </div>

        <div id='experience-section' className='section'>
          <p className='section-header'>Where I've Been</p>
          <Experience />
        </div>

        <div id='projects-section' className='section'>
          <p className='section-header'>What I've Built</p>
          <Projects />
        </div>

        <div id='newsletter-section' className='section'>
          <p className='section-header'>Where I'm Going</p>
          <NewsletterSignupForm />
        </div>
      </div>
    );
  }
}

export default Home;
