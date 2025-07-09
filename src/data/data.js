import { GitHub, LinkedIn } from '@material-ui/icons';

export const heroInfo = {
  name: 'Gokul Gudaghe',
  image: process.env.PUBLIC_URL + '/images/.png',
  title: [
    'Full Stack Developer',
    'Wix Studio Developer',
    'Software Engineer',
    'React Developer',
    'Node.js Developer',
  ],
  contacts: [
    {
      id: 1,
      name: 'GitHub',
      icon: GitHub,
      username: 'Gokul7499',
      link: 'https://github.com/gokul7499',
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: LinkedIn,
      username: 'Gokul Gudaghe',
      link: 'www.linkedin.com/in/gokul-gudaghe-8319b8262/',
    },
  ],
};

export const resumes = [
  {
    id: 1,
    year: 'Nov 2024 - Present',
    role: 'Wix Studio',
    companyName: 'Mahindra Technosoft Ltd',
    companyUrl: 'https://www.mahendratechnosoft.com/',
    description:
      'A Wix Studio developer with one year of experience in front-end development has a strong grasp of building dynamic websites using the Wix platform’s tools and features. They are proficient in customizing pre-built templates, working with the drag-and-drop editor, and integrating advanced functionalities such as animations, custom code (via Velo), and third-party apps. Over the year.',
  },
  {
    id: 2,
    year: 'May 2023 - June 2024',
    role: 'FrontEnd Deverloper',
    companyName: 'The Baap Comapany Ltd.',
    companyUrl: 'https://baapcompany.com/',
    description:
      'Frameworks like React, Angular, or Vue.js. Over the course of the year, they likely worked on creating responsive and user-friendly interfaces, ensuring that websites and applications are both visually appealing and functional across different devices and browsers.',
  },
  {
    id: 3,
    year: 'Aug 2022 - may 2023',
    role: 'Website Design',
    companyName: 'The Baap Company Ltd.',
    companyUrl: 'https://baapcompany.com/',
    description:
      'The BAAP Company, based in Paregaon Khurd, Sangamner Tehsil, MH (422611), started as a software service provider for national and international clients. Facing a talent shortage due to rural brain drain, BAAP set up a training institute to educate local youth in software development.',
  },
];

export const educations = [
  {
    id: 1,
    year: 'August 2022 - Present',
    universityName: 'Univesity of Mysore',
    department: 'Bachelor of Computer Application',
    description: '',
  },
  {
    id: 2,
    year: 'April 2020 - December 2022',
    universityName: 'Savitribai phule pune university',
    department: 'Higher Secondary School Certificate',
    description: '',
  },
  {
    id: 3,
    year: 'January 2014 - December 2020',
    universityName: 'savitribai phule pune university',
    department: 'Secondary School Certificate',
    description: '',
  },
];

export const projects = [
  {
    id: 1,
    image: '/images/todoAppReactWithFirebase.png',
    name: 'Royal Shetkari',
    description: `The Royal Shetkari IT Company website has a professional and modern design. At the top, there is a navigation bar with options like Home, About, Internship, Farming, and Services. The main banner features an image of a team working together, with the text "Welcome to Royal Shetkari IT Company" and a "Learn More" button.`,
    tools: ['javascript', 'react Js'],
    live: 'https://gokul7499.github.io/Shetkari/',
    source: 'https://github.com/gokul7499/Shetkari.git',
  },
  {
    id: 2,
    image: '/images/reactWeatherApp.png',
    name: 'Chat Website ',
    description: `The chat website is designed to provide seamless and efficient communication between users. It features a clean and user-friendly interface, allowing real-time messaging with instant delivery. The website supports multiple users, ensuring smooth conversations with features like message notifications and typing indicators.`,
    tools: ['javascript', 'react'],
    live: 'https://react-weather-app-v1.netlify.app/',
    source: 'https://github.com/sakilk130/react-weather-app',
  },
];

export const skills = [
  {
    title: 'HTML',
    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
  },
  {
    title: 'JavaScript',
    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  },
  {
    title: 'MongoDB',
    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
  },

  {
    title: 'CSS',
    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
  },
  {
    title: 'TypeScript',
    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
  },
  {
    title: 'Wix Studio',
    logo: 'https://e7.pngegg.com/pngimages/258/411/png-clipart-wix-round-logo-tech-companies-thumbnail.png',
  },
  {
    title: 'Bootstrap',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
  },
  {
    title: 'ReactJS',
    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
  },
  // msql
  {
    title: 'MySQL',
    logo: 'https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png',
  },

  {
    title: 'Material-UI',
    logo: 'https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png',
  },

  {
    title: 'NodeJS',
    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  },
  {
    title: 'PHP',
    logo: 'https://www.vectorlogo.zone/logos/php/php-icon.svg',
  },
  {
    title: 'VS Code',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuER1tOoBap4qZ8V7OUsbf-quqFfEjj3Jnzg&s',
  },

  {
    title: 'ExpressJS',
    logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
  },

  {
    title: 'Git',
    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  },

  {
    title: 'npm',
    logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg',
  },
  {
    title: 'GitHub',
    logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
  },
];
