import firebaseLogo from '../images/home/experience/firebaseLogo.png';
import floatingHouseStudiosLogo from '../images/home/experience/floatingHouseStudiosLogo.png';
// import googleLogo from '../images/home/experience/googleLogo.png';
import microsoftLogo from '../images/home/experience/microsoftLogo.png';
import notreDameLogo from '../images/home/experience/notreDameLogo.png';
import shortwaveLogo from '../images/home/experience/shortwaveLogo.png';
import {WorkEntryId, type WorkEntry} from './types';

export const WORK_HISTORY: Record<WorkEntryId, WorkEntry> = {
  [WorkEntryId.Shortwave]: {
    id: WorkEntryId.Shortwave,
    name: 'Shortwave',
    role: 'Cofounder & Head of Product',
    startMonth: 'January',
    startYear: 2020,
    endMonth: 'June',
    endYear: 2024,
    image: shortwaveLogo,
    alt: 'Shortwave logo',
    url: 'https://shortwave.com',
  },
  [WorkEntryId.FloatingHouseStudios]: {
    id: WorkEntryId.FloatingHouseStudios,
    name: 'Floating House Studios',
    role: 'Founder & Firebase Consultant',
    startMonth: 'May',
    startYear: 2018,
    endMonth: 'January',
    endYear: 2020,
    image: floatingHouseStudiosLogo,
    alt: 'Floating House Studios logo',
  },
  // Note: Google is currently merged into the Firebase entry.
  // [WorkEntryId.Google]: {
  //   id: WorkEntryId.Google,
  //   name: 'Google',
  //   role: 'Senior Software Engineer',
  //   startMonth: 'October',
  //   startYear: 2014,
  //   endMonth: 'April',
  //   endYear: 2017,
  //   image: googleLogo,
  //   alt: 'Google logo',
  //   url: 'https://www.google.com',
  // },
  [WorkEntryId.Firebase]: {
    id: WorkEntryId.Firebase,
    name: 'Firebase / Google',
    role: 'Senior Software Engineer',
    startMonth: 'April',
    startYear: 2014,
    endMonth: 'April',
    endYear: 2017,
    image: firebaseLogo,
    alt: 'Firebase logo',
    url: 'https://firebase.google.com',
  },
  [WorkEntryId.Microsoft]: {
    id: WorkEntryId.Microsoft,
    name: 'Microsoft',
    role: 'Software Engineer',
    startMonth: 'August',
    startYear: 2012,
    endMonth: 'March',
    endYear: 2014,
    image: microsoftLogo,
    alt: 'Microsoft logo',
    url: 'https://microsoft.com',
  },
  [WorkEntryId.NotreDame]: {
    id: WorkEntryId.NotreDame,
    name: 'Notre Dame',
    role: 'BS, Computer Science',
    startMonth: 'August',
    startYear: 2008,
    endMonth: 'May',
    endYear: 2012,
    image: notreDameLogo,
    alt: 'Notre Dame logo',
    url: 'https://nd.edu/',
  },
} as const;
