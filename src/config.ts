import Education from "./components/Education";

export const config = {
  name: 'Chris Pannapara',
  title: 'Full-Stack Developer & QA Automation Engineer',
  location: 'Toronto, ON, Canada',
  email: 'chris12pannapara@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chrispannapara',
  github: 'https://github.com/chris12pannapara-hub',
  resume: '/resume.pdf',
  resumeViewer: 'https://drive.google.com/file/d/1hIJO3i13c612K8tVL0VO3N20yLzkIJxn/preview',
  about: `Results-driven  software  engineer  with 4+ years of experience designing and implementing production-grade microservices, distributed 
systems,  and  CI/CD  pipelines  in  agile  environments.  I  bring  strong  computer  science  fundamentals,  proficiency  in  Java,  Node.js,  and 
Python, and hands-on experience with AWS, GCP, Docker, Kubernetes, and event-driven architectures. I have owned end-to-end delivery 
of  high-availability  services,  designed  APIs  that  power  large-scale  workflows,  and  implemented  secure  authentication  and 
certificate-based flows, and I am comfortable collaborating cross-functionally and engaging with stakeholders to iterate on deployment 
strategies and large-scale orchestration solutions. .`,
  skills: [
    { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Java', 'Python', 'Express', 'REST APIs', 'GraphQL'] },
    { category: 'QA & DevOps', items: ['Selenium', 'Playwright', 'Cypress', 'Jenkins', 'Docker', 'AWS'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'Azure SQL'] },
  ],
  experience: [
    {
      title: 'Application Developer',
      company: 'ADP',
      date: 'July 2024 - July 2025',
      desc: "Engineered modular UI features for ADP's client portals with React including multi-platform push notifications and FIDO2/WebAuthn integration using Java boosting authentication reliability and user security.",
    },
    {
      title: 'Associate Application Developer',
      company: 'ADP',
      date: 'July 2021 - July 2024',
      desc: "Developed responsive, WCAG-compliant client UIs in React, Redux, and JavaScript and Node.js supported by custom automated E2E test pipelines using JavaScript, Selenium, Cucumber, Webdriber IO, Jenkins that cut manual QA time by 80%",
    },
        {
      title: 'Global Product and Technology Intern',
      company: 'ADP',
      date: 'June 2020 - August 2020',
      desc: 'Automated extraction of TIN and address data from tax forms using Python, Camelot, and image processing libraries.',
    },
  ],
    Education: [
    {
      title: 'Masters Of Science in Information Systems',
      school: 'Stevens Institute of Technology',
      date: 'August 2019 - June 2021',
      location: 'New Jersey, USA',
    },
    {
      title: 'Bachelors in Computer Engineering',
      school: 'University Of Mumbai',
      date: 'June 2012 - June 2016',
      location: 'Mumabi, India',
    },
  ],
  projects: [
    {
      name: 'Client Portal',
      desc: 'Full-stack client management portal with React frontend, Node.js/Express backend, PostgreSQL database, and JWT authentication.',
      tech: ['React', 'JavaScript', 'Python', 'Node.js', 'PostgreSQL', 'JWT','Fast API', 'Express API'],
      url: 'https://github.com/chris12pannapara-hub/client-portal.git',
    },
    {
      name: 'Community resource sharing System',
      desc: 'A React+Node.js platform to enable lending and borrowing of community resources, fostering sustainability and connections.',
      tech: ['React', 'JavaScript', 'Node.js'],
      url: 'https://github.com/chris12pannapara-hub/community-resource-sharing.git',
    },
    {
      name: 'QA Automation Framework',
      desc: 'End-to-end test automation framework using Playwright and TypeScript with CI/CD Jenkins integration.',
      tech: ['Selenium', 'TypeScript', 'Jenkins', 'Wdio'],
      url: 'https://github.com/chris12pannapara-hub/QA_UI_Automation.git',
    },
  ],
};
