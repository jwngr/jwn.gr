import emailIcon from '../images/home/social/email.svg';
import gitHubIcon from '../images/home/social/gitHub.svg';
import linkedInIcon from '../images/home/social/linkedIn.svg';
import xIcon from '../images/home/social/x.svg';
import {SocialLinkId, type SocialLink} from './types';

export const SOCIAL_LINKS: Record<SocialLinkId, SocialLink> = {
  [SocialLinkId.Email]: {
    id: SocialLinkId.Email,
    url: 'mailto:wenger.jacob@gmail.com',
    name: 'Email',
    alt: 'Send me an email',
    image: emailIcon,
  },
  [SocialLinkId.GitHub]: {
    id: SocialLinkId.GitHub,
    url: 'https://github.com/jwngr',
    name: 'GitHub',
    alt: 'View GitHub profile',
    image: gitHubIcon,
  },
  [SocialLinkId.LinkedIn]: {
    id: SocialLinkId.LinkedIn,
    url: 'https://linkedin.com/in/jwngr/',
    name: 'LinkedIn',
    alt: 'View LinkedIn profile',
    image: linkedInIcon,
  },
  [SocialLinkId.Twitter]: {
    id: SocialLinkId.Twitter,
    url: 'https://x.com/_jwngr',
    name: 'X / Twitter',
    alt: 'View X / Twitter profile',
    image: xIcon,
  },
} as const;
