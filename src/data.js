export const LINKS = {
  github: 'https://github.com/Hashir-Rauf',
  linkedin: 'https://www.linkedin.com/in/hrm05/',
  email: 'hashirrauf0321@outlook.com',
  workEmail: 'h.rauf@exaverse.site',
  exaverse: 'https://www.exaverse.site',
  exaverseLinkedin: 'https://www.linkedin.com/company/exa-verse/',
}

export const COMPANY = 'Exaverse Softwares (SMC-Private) Ltd.'

export const BIO =
  'I build AI powered software products end to end, from the data and the model to the app people actually install. I am the founder of Exaverse Softwares, and I am finishing a BS in Data Science at FAST-NUCES with a 3.71 CGPA, three gold medals and one silver. Next I am heading toward postgraduate research in AI, and I want to take Pakistani software products to the world.'

export const SPEC = [
  ['Role', 'Software Developer, Data Scientist'],
  ['Startup', 'Founder, Exaverse Softwares'],
  ['Education', 'BS Data Science, FAST-NUCES'],
  ['CGPA', '3.71'],
  ['Honors', '3 Gold, 1 Silver Medal'],
  ['Location', 'Lahore, Pakistan'],
  ['Learning', 'AI, Computer Vision, NLP, Game Dev'],
]

export const HONORS = [
  { count: 3, kind: 'gold', label: 'Gold Medals', note: 'FAST-NUCES' },
  { count: 1, kind: 'silver', label: 'Silver Medal', note: 'FAST-NUCES' },
]

export const EXPERIENCE = [
  {
    role: 'Founder',
    org: COMPANY,
    tag: 'Current',
    date: 'Jan 2025 to Present',
    dark: true,
    points: [
      'Founded and run Exaverse, a registered software company building AI products, mobile apps and enterprise tools.',
      'Shipped Pockit, an AI personal finance app with budgeting, expense tracking and multi-language support.',
      'Built FacilityFirst, a smart facility management platform for enterprise clients.',
      'Own product direction, engineering architecture and team coordination.',
    ],
  },
  {
    role: 'Automation Software Developer',
    org: 'KPMG',
    tag: 'Internship',
    date: '2023',
    points: [
      'Wrote Python automation that cut manual data processing time.',
      'Worked inside enterprise data pipelines and reporting workflows.',
      'Built tooling for automated extraction and transformation at scale.',
    ],
  },
]

export const PROJECTS = [
  { id: '01', title: 'Pockit', kind: 'Exaverse product', desc: 'AI personal finance app. Expense tracking, smart budgeting, savings goals and multi-language support.', tech: ['Flutter', 'Firebase', 'AI'], live: 'https://www.exaverse.site' },
  { id: '02', title: 'FacilityFirst', kind: 'Exaverse product', desc: 'Smart facility management platform that streamlines facility and service operations for enterprises.', tech: ['Flutter', 'Web'], live: 'https://www.exaverse.site' },
  { id: '03', title: 'SafeNest', kind: 'Mobile', desc: 'A disguised emergency response Android app. Gesture triggers, GPS sharing, silent recording and a fake call feature.', tech: ['Kotlin', 'Android', 'GPS'], gh: 'https://github.com/Hashir-Rauf' },
  { id: '04', title: 'VoiceTask', kind: 'Mobile', desc: 'Voice-first AI task manager for blue-collar workers. Offline first, low literacy friendly, local languages.', tech: ['AI', 'NLP', 'Mobile'], gh: 'https://github.com/Hashir-Rauf' },
  { id: '05', title: 'AgileFlow', kind: 'Tooling', desc: 'Scrum based project management. Sprint planning, task boards and ML powered insights.', tech: ['C#', '.NET', 'ML.NET'], gh: 'https://github.com/Hashir-Rauf/AgileFlow' },
  { id: '06', title: 'Early Disease Risk Predictor', kind: 'Machine learning', desc: 'XGBoost with SHAP explainability across the PIMA Diabetes, UCI Heart Disease and Framingham datasets.', tech: ['Python', 'XGBoost', 'SHAP'], gh: 'https://github.com/Hashir-Rauf/Early-Disease-Risk-Predictor' },
  { id: '07', title: 'Lane Detection System', kind: 'Computer vision', desc: 'Lane detection on Pakistani dashcam footage with OpenCV, at roughly 93.5% frame-level accuracy.', tech: ['Python', 'OpenCV'], gh: 'https://github.com/Hashir-Rauf' },
  { id: '08', title: 'Stock Market Predictor', kind: 'Machine learning', desc: 'Time series model for stock price forecasting with trend analysis.', tech: ['Scikit-learn', 'Jupyter'], gh: 'https://github.com/Hashir-Rauf/Stock-Market-Price-Prediction-Model' },
  { id: '09', title: 'Financial Risk Dashboard', kind: 'Analytics', desc: 'Interactive Power BI dashboard for financial risk assessment.', tech: ['Power BI', 'SQL'], gh: 'https://github.com/Hashir-Rauf/Financial-Risk-Management-Dashboard' },
]

export const STACK = ['Python', 'C++', 'C#', 'JavaScript', 'Kotlin', 'Dart', 'PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'OpenCV', 'Flutter', '.NET', 'Node.js', 'Firebase', 'SQL', 'Power BI']

export const TOOLKIT = [
  ['Languages', ['Python', 'C++', 'C#', 'JavaScript', 'Java', 'Dart', 'Kotlin', 'SQL', 'HTML and CSS']],
  ['AI and Data', ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'OpenCV', 'Pandas', 'NumPy', 'Jupyter', 'Power BI']],
  ['Web and Backend', ['Node.js', 'Express', '.NET', 'ASP.NET Core', 'REST APIs', 'Firebase']],
  ['Mobile', ['Flutter', 'Android', 'Kotlin']],
  ['Tools', ['Git', 'VS Code', 'Postman', 'Jira', 'SQL Server', 'Android Studio', 'OutSystems']],
]

export const CERTS = [
  ['CS50: Introduction to Computer Science', 'Harvard University'],
  ['Introduction to Deep Learning with PyTorch', 'DataCamp'],
  ['Feature Engineering for Machine Learning in Python', 'DataCamp'],
  ['Prompt Engineering with OpenAI API', 'DataCamp'],
  ['Programming in C++', 'SimpliLearn'],
  ['Introduction to Programming in Python', 'Kaggle'],
  ['HTML and CSS', 'Open Weaver'],
  ['Diploma of Digital Marketing', 'Foundation Institute of Technology'],
]
