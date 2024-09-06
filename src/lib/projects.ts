import notreDameAvatar from '../images/home/projectAvatars/notreDame.png';
import rusticCitrusAvatar from '../images/home/projectAvatars/rusticCitrus.png';
import sdowAvatar from '../images/home/projectAvatars/sdow.png';
import notreDameScreenshot from '../images/home/projectScreenshots/notreDame.png';
import running2016Screenshot from '../images/home/projectScreenshots/running2016.jpg';
import rusticCitrusScreenshot from '../images/home/projectScreenshots/rusticCitrus.jpg';
import sdowScreenshot from '../images/home/projectScreenshots/sdow.jpg';
import seerScreenshot from '../images/home/projectScreenshots/seer.jpg';
import ticTacTicTacToeScreenshot from '../images/home/projectScreenshots/ticTacTicTacToe.jpg';
import worldwideTripMicroblogScreenshot from '../images/home/projectScreenshots/worldwideTripMicroblog.jpg';
import youTubeChannelScreenshot from '../images/home/projectScreenshots/youTubeChannel.png';
import {ProjectId, type Project} from '../lib/types';

export const ALL_PROJECTS: Record<ProjectId, Project> = {
  [ProjectId.RusticCitrus]: {
    id: ProjectId.RusticCitrus,
    name: 'Rustic Citrus',
    description: 'Word game which makes sense out of alphabet stew',
    url: 'https://rusticcitrus.com/',
    screenshot: rusticCitrusScreenshot,
    alt: 'Screenshot of the "Rustic Citrus" website',
    avatar: rusticCitrusAvatar,
  },
  [ProjectId.TicTacTicTacToe]: {
    id: ProjectId.TicTacTicTacToe,
    name: 'Tic-tac-tic-tac-toe',
    description: 'Tic-tac-toe with a multiplayer twist',
    url: 'https://tic-tac-tic-tac-toe.firebaseapp.com/',
    screenshot: ticTacTicTacToeScreenshot,
    alt: 'Screenshot of the "Tic-tac-tic-tac-toe" website',
  },
  [ProjectId.WorldwideTripMicroblog]: {
    id: ProjectId.WorldwideTripMicroblog,
    name: 'Worldwide Trip Microblog',
    description: 'Documenting my 2017-18 travels across the globe',
    url: 'https://jwn.gr/microblog/',
    screenshot: worldwideTripMicroblogScreenshot,
    alt: 'Screenshot of the "Worldwide Microblog" website',
  },
  [ProjectId.Running2016]: {
    id: ProjectId.Running2016,
    name: 'Running 2016',
    description: 'Catalogging 850 miles of running during 2016',
    url: 'https://running-2016.firebaseapp.com/',
    screenshot: running2016Screenshot,
    alt: 'Screenshot of the "Running 2016" website',
  },
  [ProjectId.SixDegreesOfWikipedia]: {
    id: ProjectId.SixDegreesOfWikipedia,
    name: 'Six Degrees of Wikipedia',
    description: 'Find the shortest path between any pages on Wikipedia',
    url: 'https://www.sixdegreesofwikipedia.com/',
    screenshot: sdowScreenshot,
    alt: 'Screenshot of the "Six Degrees of Wikipedia" website',
    avatar: sdowAvatar,
  },
  [ProjectId.Seer]: {
    id: ProjectId.Seer,
    name: 'Seer',
    description: 'Manage issue and PR freshness for GitHub repos',
    url: 'https://github.com/jwngr/seer',
    screenshot: seerScreenshot,
    alt: 'Screenshot of the "Seer" website',
  },
  [ProjectId.NotreDame]: {
    id: ProjectId.NotreDame,
    name: 'notreda.me',
    description: 'Notre Dame Fighting Irish football stats and schedules',
    url: 'https://notreda.me/',
    screenshot: notreDameScreenshot,
    alt: 'Screenshot of the "notreda.me" website',
    avatar: notreDameAvatar,
  },
  [ProjectId.YouTubeChannel]: {
    id: ProjectId.YouTubeChannel,
    name: 'YouTube channel',
    description: 'Experimenting with a new media format',
    url: 'https://www.youtube.com/channel/UCndkjnoQawp7Tjy1uNj53yQ/',
    screenshot: youTubeChannelScreenshot,
    alt: "Screenshot of Jacob Wenger's YouTube channel",
  },
} as const;
