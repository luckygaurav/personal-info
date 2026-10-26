// This is the only file you need to edit for names, links, skills and projects.
// Entries marked `sample: true` are deliberately editable starter content.

export const portfolio = {
  name: 'Lucky Gaurav',
  initials: 'LG',
  role: 'BCA Student & Aspiring Developer',
  location: 'Patna, Bihar, India',
  availability: 'Open to learning and collaboration',
  intro: 'I build my skills one thoughtful project at a time—curious about the web, motivated by useful ideas, and always learning.',
  shortIntro: 'BCA student at IIBM, shaping ideas into digital experiences.',
  education: {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'IIBM',
    place: 'Patna, Bihar',
    note: 'Currently learning and building.',
  },
  contact: {
    phone: '9279409805',
    email: 'luckygaurav11@gmail.com',
    linkedin: 'https://www.linkedin.com/in/lucky-gaurav-440982412',
    github: 'https://github.com/luckygaurav',
  },
  // Add your final PDF at public/resume/Lucky-Gaurav-Resume.pdf, then update this path.
  resumeUrl: '/resume/replace-with-your-resume.txt',
  portrait: '/images/2.png',
  focusAreas: ['Web interfaces', 'Creative coding', 'Problem solving'],
  skills: [
    { name: 'HTML & CSS', level: 'Foundation', detail: 'Semantic pages and responsive layouts.', sample: true },
    { name: 'JavaScript', level: 'Growing', detail: 'Interactive experiences and web fundamentals.', sample: true },
    { name: 'React', level: 'Learning', detail: 'Component-based interfaces and UI state.', sample: true },
    { name: 'Git & GitHub', level: 'Practice', detail: 'Version control and project sharing.', sample: true },
    { name: 'UI Design', level: 'Exploring', detail: 'Visual hierarchy, motion and usability.', sample: true },
  ],
  projects: [
    {
      title: 'Campus Connect',
      category: 'Sample web app',
      description: 'Replace this with a project that solves a student or campus need. Add the outcome and your role.',
      tags: ['React', 'UI/UX', 'Editable'],
      href: '#contact',
      accent: 'violet',
      sample: true,
    },
    {
      title: 'Study Flow',
      category: 'Sample productivity tool',
      description: 'A clear placeholder for a study planner, task tracker, or other project you want to showcase.',
      tags: ['JavaScript', 'Responsive', 'Editable'],
      href: '#contact',
      accent: 'aqua',
      sample: true,
    },
    {
      title: 'Local Lens',
      category: 'Sample creative concept',
      description: 'Use this card for a future exploration of a local story, service, visual experiment, or open-source idea.',
      tags: ['Creative code', 'Storytelling', 'Editable'],
      href: '#contact',
      accent: 'sun',
      sample: true,
    },
  ],
}
