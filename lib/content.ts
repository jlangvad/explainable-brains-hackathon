export const MASTHEAD = {
  left: 'Copenhagen · Tuesday May 26th, 2026 · 16:00–20:00',
  rightAppliedFutures: 'Applied Futures',
  rightVibraint: 'Vibraint',
  rightDanishDataScience: 'Danish Data Science Community',
  rightDanishCancerInstitute: 'Danish Cancer Institute',
} as const

export const HERO = {
  kicker: 'First Claude Code Hackathon Copenhagen',
  titleTop: 'Explainable',
  titleBottom: 'Brains',
  titleSuffix: 'Hackathon',
  subtitle:
    'From signals to understanding: A 4-hour sprint to make complex brain data accessible, interpretable, and actionable — because better tools mean better treatments for brain disease.',
  definition:
    'The Explainable Brains Hackathon is a free neuroscience and AI hackathon in Copenhagen, Denmark. Cross-disciplinary teams use Claude Code and real brain imaging data from Vibraint to build tools that make complex brain data interpretable for drug discovery.',
  intro:
    'Neurological conditions are among the fastest-growing health challenges globally, yet the brain remains largely a mystery. Understanding the brain depends on our ability to extract meaning from vast and complex datasets. The latest AI coding tools like Claude Code are rapidly expanding opportunities for innovating on practical solutions to problems that haven\u2019t been solvable before. Join us for a hackathon bringing together professionals from across fields to turn that potential into reality.',
} as const

export const CTA_VENUE_LINE = {
  before: 'Workbar, Community Stage · ',
  place: 'Mesh Matrikel1 · Copenhagen',
} as const


export const PILLARS = [
  {
    n: '01',
    title: 'The Brain Is Under Pressure',
    text: 'Neurological and mental health conditions are among the most widespread and least solved problems in medicine. As populations age and daily life grows more cognitively demanding, the burden on patients, families, healthcare systems, and economies continues to grow.',
  },
  {
    n: '02',
    title: 'Data Is Ahead of Our Tools',
    text: "CNS drug development has one of the highest failure rates in medicine. It is not for lack of data. Brain research generates vast volumes of imaging, spatial, and molecular information. The problem is that most of it stays locked in specialist pipelines, inaccessible to the people who could act on it. The science is ready. The tooling isn't.",
  },
  {
    n: '03',
    title: 'Brain Health Is a European Priority',
    text: 'Brain health is moving up the political and economic agenda across Europe. The first European Brain Economy Summit convenes in Brussels on 5 May 2026, bringing together policymakers, researchers, and industry leaders around a shared premise: that cognitive capacity is infrastructure, and that investing in it is a strategic, not just a medical, choice.',
  },
  {
    n: '04',
    title: 'Building at the Intersection',
    text: 'Progress on these problems requires people from very different fields to actually work together, not just talk past each other at conferences. AI tools like Claude Code are lowering the barrier to building functional prototypes fast. This hackathon brings STEM professionals together around a shared problem and four hours to explore it.',
  },
] as const

export const VIBRAINT_SIDEBAR = {
  heading: 'About Vibraint',
  paragraphs: [
    'Vibraint builds tools to accelerate drug discovery for brain diseases. Their platform processes complex 3D microscopy scans of rodent brains into interactive, interpretable brain maps.',
    'This makes it possible to track how drugs distribute across brain regions, map neural activity patterns in response to treatment, and localise specific receptors and cell types at the scale and resolution that drug development demands.',
    'Their customers are neuroscientists in academia, biotech, and pharma working on some of the hardest problems in brain disease research.',
  ],
} as const

export const FORMAT_INTRO =
  'Simple by design. Vibraint presents a real challenge with real data. Teams form across disciplines and build for 2.5 hours. Then every team demos a working prototype. No slides, just what you made. Aimed at STEM students, graduates, and young professionals—including product management. No neuroscience background required. Cross-functional teams mix backgrounds so everyone has a role in the build.'

export const AGENDA: Array<{ time: string; label: string; accent?: boolean }> = [
  { time: '16:00', label: 'Doors open, settle in' },
  { time: '16:05', label: 'Welcome (Jacob and Diana)' },
  {
    time: '16:10',
    label: 'Challenge brief (Johanna, Vibraint and Alicia, Danish Cancer Institute)',
    accent: true,
  },
  { time: '16:25', label: 'Teams form and build, 2.5 hours', accent: true },
  { time: '18:55', label: 'Demos, 3 min per team' },
  { time: '19:20', label: 'Judging and wrap-up' },
  { time: '19:40', label: 'Networking' },
  { time: '20:00', label: 'Close' },
]

export const WHO_INTRO =
  'This event brings together people who rarely work in the same room: biologists, data scientists, software engineers, and product people. The challenge is real, the data is real, and the teams are deliberately cross-functional.'

export const PROFILES = [
  {
    role: 'Host · Claude Code Community / Applied Futures',
    name: 'Jacob Langvad Nilsson',
    desc: 'Claude Community Ambassador and co-founder of Applied Futures. Brings community framing and product strategy to the event.',
  },
  {
    role: 'Co-host · Danish Data Science Community',
    name: 'Diana Meda',
    desc: 'AI & Data Engineer representing the Danish Data Science Community, connecting the data science and AI builder communities in Copenhagen.',
  },
  {
    role: 'Neuroscience & Computer Vision Advisor · Vibraint',
    name: 'Johanna Perens',
    desc: 'Co-founder and CTO of Vibraint, responsible for the technical foundation of the platform. Guides the vision of the challenges, bringing deep expertise in whole-brain imaging and computational neuroscience.',
  },
  {
    role: 'Data Science & AI Advisor · Danish Cancer Institute',
    name: 'Alicia Parra Acero',
    desc: 'Staff Scientist in AI and computational imaging at the Danish Cancer Institute. Frames the challenge from a data science and AI perspective and supports teams during the build.',
  },
] as const

export const WHO_FOOTNOTE =
  ''

export const CHALLENGE = {
  question: '\u201CHow can we make brain imaging data accessible and interpretable?\u201D',
  paragraphs: [
    'Vibraint will share the full challenge brief before the event. What we can tell you now: you will work with real brain imaging data and build tools that could help neuroscientists to deep dive into complex brain data to draw conclusions.',
    'Teams will approach this from different angles depending on their background. Some will focus on data analysis and visualization, others on building interfaces or AI-powered tools. All approaches are valid. Working prototypes only.',
  ],
} as const

export const TAGS: Array<{ label: string; hi?: boolean }> = [
  { label: 'Brain Imaging', hi: true },
  { label: 'Claude Code', hi: true },
  { label: 'Computer Vision', hi: true },
  { label: 'Data Science' },
  { label: 'Data Visualization' },
  { label: 'Natural Language Interfaces' },
  { label: 'Drug Discovery' },
  { label: 'Integrative Spatial Biology' },
]

export const CTA = {
  lines: ['Register.', 'Show up.'],
  emphasis: 'Build something.',
  detail: [
    'Tuesday May 26th, 2026 · Doors 16:00 · Close 20:00',
    'Challenge brief sent after registration',
  ],
  hostedBy: ['Co-hosted by'],
  buttonLabel: 'Register Now \u2192',
} as const

export const FAQ = [
  {
    q: 'Who can participate?',
    a: 'The hackathon is for STEM students, graduates, and young professionals—including product management and adjacent roles. No neuroscience background is required. Teams are deliberately cross-functional so different backgrounds work together during the build.',
  },
  {
    q: 'What data will teams work with?',
    a: 'Teams will work with real brain imaging data provided by Vibraint. The full challenge brief is shared with participants after registration.',
  },
  {
    q: 'What tools will be used?',
    a: 'Teams build with Claude Code, Anthropic\u2019s AI coding assistant. Every participant gets free Claude Console API credits to use during the event. You\u2019re free to bring any additional tools, languages, or frameworks alongside it.',
  },
  {
    q: 'Who are the judges?',
    a: 'Judges will be announced closer to the event.',
  },
  {
    q: 'Is the hackathon free?',
    a: 'Yes. The hackathon is completely free to attend. Registration is required and limited to 40 participants.',
  },
  {
    q: 'Where exactly is the venue?',
    a: 'Mesh Matrikel1 (Matrikel1 Workbar), Højbro Plads 10, 1200 Copenhagen K, Denmark. The event takes place at the Workbar Community Stage.',
  },
] as const
