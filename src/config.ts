export const config = {
  name: 'Chris Pannapara',
  title: 'Full-Stack Developer & QA Automation Engineer',
  location: 'Toronto, ON, Canada',
  email: 'chris12pannapara@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chrispannapara',
  github: 'https://github.com/chrispannapara-hub',
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
      date: '2024 - 2025',
      desc: 'Built and maintained REST APIs, automated test suites with Selenium/Playwright, managed Jenkins CI/CD pipelines, and developed React frontend components.',
    },
    {
      title: 'Associate Application Developer',
      company: 'ADP',
      date: '2021 - 2024',
      desc: 'Developed Java microservices, implemented OAuth/JWT authentication, and built Node.js automation test frameworks for enterprise-grade applications.',
    },
  ],
  projects: [
    {
      name: 'Client Portal',
      desc: 'Full-stack client management portal with React frontend, Node.js/Express backend, PostgreSQL database, and JWT authentication.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
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
      tech: ['Selenium', 'TypeScript', 'Jenkins'],
      url: 'https://github.com/chris12pannapara-hub/QA_UI_Automation.git',
    },
  ],
};
