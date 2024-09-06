import type {HTMLAttributes} from 'astro/types';

export enum SocialLinkId {
  Email = 'EMAIL',
  GitHub = 'GIT_HUB',
  LinkedIn = 'LINKED_IN',
  Twitter = 'TWITTER',
}

export interface SocialLink {
  readonly id: SocialLinkId;
  readonly url: string;
  readonly name: string;
  readonly alt: string;
  readonly image: ImageMetadata;
}

export enum WorkEntryId {
  NotreDame = 'NOTRE_DAME',
  Microsoft = 'MICROSOFT',
  Firebase = 'FIREBASE',
  // Google is currently merged into the Firebase entry.
  // Google = 'GOOGLE',
  FloatingHouseStudios = 'FLOATING_HOUSE_STUDIOS',
  Shortwave = 'SHORTWAVE',
}

export interface WorkEntry {
  readonly id: WorkEntryId;
  readonly name: string;
  readonly role: string;
  readonly startMonth: string;
  readonly startYear: number;
  readonly endMonth: string;
  readonly endYear: number;
  readonly image: ImageMetadata;
  readonly alt: string;
  readonly url?: string;
}

export enum ProjectId {
  NotreDame = 'NOTRE_DAME',
  Running2016 = 'RUNNING_2016',
  RusticCitrus = 'RUSTIC_CITRUS',
  SixDegreesOfWikipedia = 'SIX_DEGREES_OF_WIKIPEDIA',
  Seer = 'SEER',
  TicTacTicTacToe = 'TIC_TAC_TIC_TAC_TOE',
  WorldwideTripMicroblog = 'WORLDWIDE_TRIP_MICROBLOG',
  YouTubeChannel = 'YOUTUBE_CHANNEL',
}

export interface Project {
  readonly id: ProjectId;
  readonly name: string;
  readonly description: string;
  readonly url: string;
  /** A screenshot / image of the actual project. */
  readonly screenshot: ImageMetadata;
  /** An avatar representing the project. */
  readonly avatar?: ImageMetadata;
  readonly alt: string;
}

export interface FlexProps extends HTMLAttributes<'div'> {
  readonly gap?: number | {mobile: number; desktop: number};
  readonly wrap?: boolean;
  readonly align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  readonly justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  readonly flex?: string | number | boolean;
}
