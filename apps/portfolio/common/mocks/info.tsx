import { SocialFacebookOutIcon, SocialGithubOutIcon, SocialLinkedinOutIcon } from '@styles/ui-mui/icons';

export const InfoMocks = {
  color: 'rgb(165, 180, 252)',
  name: 'Matthew Nguyen',
  role: 'Frontend Developer',
  summary: [
    'With over 3 years of experience as a Front-End Developer, I specialize in creating dynamic and responsive web applications using Angular, React, and Next.js. My expertise includes developing robust user interfaces, implementing state management, and ensuring seamless performance across various devices. I am proficient in HTML, CSS, and JavaScript, and have a strong background in TypeScript and modern front-end libraries such as Redux and RxJS. I have a proven track record of delivering high-quality, maintainable code, collaborating effectively with cross-functional teams, and continuously learning and adapting to new technologies. '
  ],
  resume: '',
  socials: [
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/nguyencaoanhminh',
      icon: <SocialLinkedinOutIcon fontSize='large' linearColor='white' />
    },
    {
      name: 'github',
      link: 'https://github.com/annminn104',
      icon: <SocialGithubOutIcon fontSize='large' linearColor='white' />
    },
    {
      name: 'facebook',
      link: 'https://www.facebook.com/Minhmin0507',
      icon: <SocialFacebookOutIcon fontSize='large' linearColor='white' />
    }
  ]
};
