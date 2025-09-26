import { LetterOpenedIcon, PhoneCallingIcon, SocialFacebookOutIcon, SocialGithubOutIcon, SocialLinkedinOutIcon } from '@styles/ui-mui/icons';

export const InfoMocks = {
  color: 'rgb(165, 180, 252)',
  name: 'Matthew Nguyen',
  role: 'Frontend Developer',
  summary: [
    'I am a detail-oriented Frontend Developer with 5 years of hands-on experience crafting responsive, high-performance web applications. I specialize in building clean, scalable user interfaces using modern frameworks such as React, Next.js, Remix, and Angular, with a strong focus on component architecture, accessibility, and seamless user experiences.',
    'My journey has taken me from developing powerful admin and fulfillment tools at Gearment—where I helped build a full-scale print-on-demand ecosystem, including back-office systems, warehouse management, and real-time operations—to leading front-end development at Sanbul Solutions, where I worked with monorepos, CI/CD pipelines, OAuth, and Service Workers in a dynamic, fast-paced environment.',
    'On the creative side, I’ve had the opportunity to collaborate with AMIT Group & Totally Awesome to deliver animated, engaging microsites for global brands such as Disney, Marvel, and Moose Toys. These projects allowed me to blend code with storytelling—using tools like GSAP, AOS, and Owl Carousel to bring designs to life in localized, kid-friendly experiences across multiple markets.',
    'I thrive in collaborative environments, enjoy solving complex UI challenges, and constantly seek ways to push the boundaries of what frontend development can achieve—both in terms of performance and user delight.'
  ],
  resume: 'https://drive.google.com/file/d/1OcSwcuQ-zQ0E5WA8-m4251VdF2023l8d/view?usp=sharing',
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
  ],
  techStacks: [
    {
      title: 'Languages & frameworks',
      keys: ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS', 'Angular', 'NextJS', 'GraphQL', 'Redux']
    },
    {
      title: 'UI libraries',
      keys: [
        'Bootstrap 4-5',
        'React Bootstrap',
        'Tailwind CSS',
        'Chakra-UI',
        'Ant Design',
        'Ng-Zorro',
        'Angular Material',
        'Shacdn/ui',
        'Radix UI',
        'MUI React',
        'Framer Motion',
        'GSAP',
        'Styled-components'
      ]
    },
    {
      title: 'HeadlessCMS',
      keys: ['Hygraph', 'Strapi', 'Directus', 'Payload CMS', 'StoryBlok']
    },
    {
      title: 'Testing tools',
      keys: ['Cypress', 'Jest', 'Post man']
    },
    {
      title: 'Database',
      keys: ['MongoDB', 'Firebase']
    },
    {
      title: 'Other',
      keys: [
        'Git',
        'Nodejs',
        'ExpressJS',
        'NestJS',
        'SEO',
        'Docker',
        'Nginx',
        'Github Actions',
        'Jenkins',
        'Monorepos (Turbo)',
        'Micro-Frontend (Nx)',
        'Figma',
        'Adobe Photoshop'
      ]
    }
  ],
  experiences: [
    {
      company: ['Gearment'],
      position: ['Frontend Developer'],
      startDate: '08/2024',
      endDate: 'Present',
      responsibilities: [
        'Maintained a landing website using Remix and Directus CMS (headless CMS).',
        'Optimized website performance and SEO for improved user experience and search engine rankings.',
        'Refactored and structured code to ensure reusable components, enhancing maintainability and scalability.',
        'Integrated APIs using connectrpc for seamless communication between frontend and backend services.',
        'Implemented authentication with Facebook and Google login for user convenience.',
        'Contributed to key modules including orders, stores, studios, members, and logs, ensuring smooth functionality and efficient workflow for the admin system.'
      ],
      techStacks: [
        {
          title: 'Programming languages:',
          keys: 'ReactJS 18, Remix, HTML, SCSS, Javascript, Typescript.'
        },
        {
          title: 'UI libraries:',
          keys: 'Shacdn/ui, Radix UI, TailwindCSS'
        },
        {
          title: 'Other:',
          keys: 'CMS Directus, Turbo, Zustand, React-Query, ConnectRPC, Github Actions, Framer Motion,...'
        }
      ]
    },
    {
      company: ['Sanbul Solutions'],
      position: ['Frontend Developer'],
      startDate: '03/2023',
      endDate: '8/2024',
      responsibilities: [
        'Create and assign tasks using Jira.',
        'Develop the source code structure following Atomic-Design principles.',
        'Establish a process for code pushing and committing using Husky, Commit-lint, and GitHub Actions.',
        'Implement the website interface based on design specifications, from management pages to user pages, utilizing Turbo (Vercel) for monorepos.',
        'Configure Socket connections with the Backend and develop Service Workers.',
        'Configure Storybook for documenting components and write comprehensive README files.',
        'Create Dockerfile and Nginx configurations, and deploy the website.',
        'Code Maintenance (Review, clean, and refactor code).',
        'Integrate OAuth for login with Google, Facebook, Naver, and KakaoTalk.'
      ],
      techStacks: [
        {
          title: 'Programming languages:',
          keys: 'ReactJS 18, NextJS 13, HTML, SCSS, Javascript, Typescript.'
        },
        {
          title: 'UI libraries:',
          keys: 'Ant Design, MUI React.'
        },
        {
          title: 'Other:',
          keys: 'Vite configuration, Redux, Redux-toolkit, React-Query (Tanstack-query), Storybook V7, Styled-component, Socket.io, Service Workers, Docker, Nginx, Github Actions, Jest,....'
        }
      ]
    },
    {
      company: ['Amit Group JSC', 'TotallyAwesome'],
      position: ['Frontend Developer'],
      startDate: '06/2020',
      endDate: '03/2023',
      responsibilities: [
        'Develop and program the web interface (Micro-site).',
        'Implement motion effects and animations.',
        'Trigger event send Google Analytics.',
        'Deploy the application with PM2 or Docker.',
        'Communicate with Backend developers for integration APIs',
        'Analyzed and suggested solutions to solve problems of the stakeholder'
      ],
      techStacks: [
        {
          title: 'Programming languages:',
          keys: 'Angular 12/13, NextJS 10/12, HTML, SCSS, Javascript, Typescript.'
        },
        {
          title: 'UI libraries:',
          keys: 'Ant Design, NgZorro, Angular Material, ChartJS, Bootstrap 5, Animate.css, Owl Carousel, GSAP, React MUI, AOS(Animate On Scroll), tsParticles '
        }
      ]
    }
  ],
  projects: [
    {
      title: 'Monorepos',
      link: 'https://github.com/annminn104/muithew-monorepos',
      desc: "This repository is configured as a monorepos utilizing Vercel's Turbo Repos. It includes multiple frameworks and libraries such as React, Next.js, Astro, Gatsby and Remix. The monorepo structure allows for efficient code sharing, consistent development practices, and streamlined CI/CD processes."
    },
    {
      title: 'Angular-boilerplate',
      link: 'https://github.com/annminn104/Angular-Template',
      desc: 'This is a comprehensive Angular application which is designed to be scalable, maintainable and robust. The application follows a clear directory structure along with a set of predefined scripts for build, development, testing and formatting. This application has been enhanced with a range of libraries such as Husky, Commitlint, AutoChangelog, Bootstrap, and Ng-Bootstrap.'
    }
  ],
  moreLink: 'https://github.com/annminn104',
  contact: [
    {
      icon: <LetterOpenedIcon fontSize='large' />,
      link: 'annminn100@gmail.com',
      key: 'mailto:'
    },
    {
      icon: <PhoneCallingIcon fontSize='large' />,
      link: '(+84)374742756',
      key: 'tel:'
    }
  ]
};
