import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jiya Lakhani.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Boston based, third year student at <strong className="text-stone-100">Northeastern University</strong>, currently studying for a 
        Bachelor of Science in <strong className="text-stone-100">Computer Science</strong> and a minor in Math.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am currently working at <strong className="text-stone-100">WoodMackenzie Supply Chain</strong> as a 
        <strong className="text-stone-100"> Full Stack Software Developer</strong> helping rework a web 
        application using TypeScript and GraphQL.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am currently searching for a 6-month second co-op in the Boston or Altanta area. I am most comfortable using TypeScript and Java, but am a quick learner and open to all languages. `,
  aboutItems: [
    {label: 'Location', text: 'Boston, MA/Atlanta, GA', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Interests', text: 'Cooking, Traveling, Video Games, Pep Band, Knitting', Icon: SparklesIcon},
    {label: 'Study', text: 'Northeastern University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
 export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Urdu',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Typescript/Javascript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 7,
      },
      {
        name: 'Python',
        level: 4,
      },
    ],
  },
];


/**
 * Portfolio section
 */
 export const portfolioItems: PortfolioItem[] = [  
  {    title: 'Text-based Freecell',    
        description: 'A text-based FreeCell implementation built using the model-view controller and factory design patterns that reads a sequence of commands and validates them before approving the moves.',    
        //url: 'https://timbaker.me',    
        image: porfolioImage3,  
  },  
  {    
    title: 'Animator',    
    description: 'A shape animator including a model-view-controller and the Java Swing library that converts text into an animation as well as a user interface that allows the user to edit the animation in real time.',    
    //url: 'https://timbaker.me',    
    image: porfolioImage2,  
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
 export const education: TimelineItem[] = [
  {
    date: 'May 2025',
    location: 'Northeastern University',
    title: 'BS in Computer Science',
    content: <p>Khoury College of Computer Sciences<br></br>
    GPA: 3.4/4.0, Dean’s Connections Scholarship<br></br>
    Related Courses: Algorithms and Data Structures, Object Oriented Design, Fundamentals of Computer Science 1&2<br></br>
    Activities: NU Pep Band Librarian, Kappa Kappa Psi, NUWIT, NUhacks<br></br>
    </p>,
  },
];


export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - December 2022',
    location: 'WoodMackenzie Supply Chain',
    title: 'Software Development Co-op',
    content: (
      <p>
        Worked with GraphQL and TypeScript to a completely new functionality for a product<br></br>
        Pair-programmed as a full-stack developer to upgrade a legacy product<br></br>
        Troubleshooted, debugged, maintained, and improved existing software<br></br>
      </p>
    ),
  },
  {
    date: 'January 2022 - June 2022',
    location: 'Northeastern University',
    title: 'TA for Fundamentals of Computer Science II (Java)',
    content: (
      <p>
        Facilitated labs of 30 students by answering questions and reviewing lecture material <br></br>
        Held weekly office hours to answer questions, troubleshoot, and help students <br></br>
        Graded homework based on provided rubrics <br></br>
      </p>
    ),
  },
];

export const projects: TimelineItem[] = [
  {
    date: 'December 2021',
    location: 'Java, IntelliJ',
    title: 'Text-Based Freecell',
    content: (
      <p>
        A text-based FreeCell implementation built using the model-view controller and factory design patterns that reads a sequence of commands and validates them before approving the moves.
      </p>
    ),
  },
  {
    date: 'October 2021',
    location: 'Java, IntelliJ',
    title: 'Animator',
    content: (
      <p>
        A shape animator including a model-view-controller and the Java Swing library that converts text into an animation as well as a user interface that allows the user to edit the animation in real time. 
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: '20alakhani@gmail.com',
      href: 'mailto:20alakhani@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Boston, MA',
      href: 'https://goo.gl/maps/3AcAfNEBPFf7xXcC6',
    },
    {
      type: ContactType.Instagram,
      text: '@anjiya02',
      href: 'https://www.instagram.com/anjiya02/',
    },
    {
      type: ContactType.Github,
      text: 'lakhanianj',
      href: 'https://github.com/lakhanianj',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/lakhanianj'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/anjiya-lakhani/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/anjiya02/'},
];
