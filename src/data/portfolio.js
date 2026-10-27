import profilePhoto from '../assets/profile-photo.png'

export const portfolio = {
  name: 'Veeravhadra',
  role: 'Computer science student',
  tagline: 'Curious by nature. Building for people.',
  introduction:
    'I’m a final-year computer science student who loves turning thoughtful ideas into useful digital experiences. I enjoy learning in the open, collaborating with kind people, and making technology feel a little more human.',
  objective:
    'Currently looking for a frontend engineering internship where I can contribute, keep learning, and build products that make a difference.',
  email: 'hello@aaravmehta.dev',
  phone: '+91 98765 43210',
  location: 'Pune, India',
  photo: profilePhoto,
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', short: 'in' },
    { label: 'GitHub', href: 'https://github.com/', short: 'GH' },
  ],
  education: [
    {
      school: 'Savitribai Phule Pune University',
      college: 'Riverdale Institute of Technology',
      course: 'B.Tech in Computer Science & Engineering',
      period: '2022 — 2026',
      grade: 'CGPA 8.7 / 10',
      detail: 'Coursework in human-computer interaction, data structures, and web development.',
      achievement: 'Department merit list · 2024',
    },
    {
      school: 'Maharashtra State Board',
      college: 'Crescent Junior College',
      course: 'Higher Secondary Certificate · Science',
      period: '2020 — 2022',
      grade: '91.2%',
      detail: 'Focused on mathematics, computer science, and physics.',
      achievement: 'Computer Science distinction',
    },
  ],
  skills: [
    {
      title: 'Development',
      note: 'Things I build with',
      skills: ['JavaScript', 'React', 'HTML & CSS', 'Git & GitHub', 'REST APIs'],
    },
    {
      title: 'Design',
      note: 'How I think about products',
      skills: ['Responsive UI', 'Figma', 'Accessibility', 'Wireframing'],
    },
    {
      title: 'Working together',
      note: 'How I show up',
      skills: ['Communication', 'Curiosity', 'Teamwork', 'Problem solving'],
    },
  ],
  projects: [
    {
      title: 'Campus Compass',
      category: 'A better first week',
      description:
        'A friendly campus guide that helps new students find events, discover useful places, and feel at home from day one.',
      technologies: ['React', 'CSS', 'OpenStreetMap'],
      image:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Students walking together on a university campus',
      repository: 'https://github.com/',
      demo: 'https://example.com/',
      accent: 'lavender',
    },
    {
      title: 'Leaf & Ledger',
      category: 'Small steps, greener habits',
      description:
        'A simple sustainability tracker that turns everyday choices into a clear weekly view and encourages progress over perfection.',
      technologies: ['React', 'JavaScript', 'Chart.js'],
      image:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Sunlight falling on a small green plant',
      repository: 'https://github.com/',
      demo: '',
      accent: 'mint',
    },
    {
      title: 'Study Circle',
      category: 'Learning is better together',
      description:
        'A lightweight study-group planner for sharing availability, setting goals, and keeping a study session on track.',
      technologies: ['React', 'Vite', 'Local storage'],
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'A group of students studying around a table',
      repository: 'https://github.com/',
      demo: 'https://example.com/',
      accent: 'peach',
    },
  ],
  highlights: [
    {
      icon: '✳',
      kind: 'INTERNSHIP',
      title: 'Frontend intern',
      detail: 'Built accessible UI components and worked with a small product team at Brightside Labs.',
      date: 'Summer 2025',
    },
    {
      icon: '↗',
      kind: 'CERTIFICATION',
      title: 'Meta Front-End Developer',
      detail: 'Completed coursework in React, UI development, and modern frontend workflows.',
      date: '2025',
    },
    {
      icon: '◎',
      kind: 'COMMUNITY',
      title: 'Design-a-thon finalist',
      detail: 'Collaborated with three classmates on a digital inclusion concept for local communities.',
      date: '2024',
    },
  ],
}
