const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const row1 = [
  { name: 'Python',     icon: `${CDN}/python/python-original.svg` },
  { name: 'JavaScript', icon: `${CDN}/javascript/javascript-original.svg` },
  { name: 'C++',        icon: `${CDN}/cplusplus/cplusplus-original.svg` },
  { name: 'C#',         icon: `${CDN}/csharp/csharp-original.svg` },
  { name: 'Kotlin',     icon: `${CDN}/kotlin/kotlin-original.svg` },
  { name: 'Dart',       icon: `${CDN}/dart/dart-original.svg` },
  { name: 'SQL',        icon: `${CDN}/postgresql/postgresql-original.svg` },
  { name: 'PyTorch',    icon: `${CDN}/pytorch/pytorch-original.svg` },
  { name: 'Pandas',     icon: `${CDN}/pandas/pandas-original.svg` },
  { name: 'NumPy',      icon: `${CDN}/numpy/numpy-original.svg` },
  { name: 'Java',       icon: `${CDN}/java/java-original.svg` },
  { name: '.NET',       icon: `${CDN}/dotnetcore/dotnetcore-original.svg` },
]

const row2 = [
  { name: 'Flutter',   icon: `${CDN}/flutter/flutter-original.svg` },
  { name: 'Android',   icon: `${CDN}/android/android-original.svg` },
  { name: 'Firebase',  icon: `${CDN}/firebase/firebase-original.svg` },
  { name: 'Node.js',   icon: `${CDN}/nodejs/nodejs-original.svg` },
  { name: 'Git',       icon: `${CDN}/git/git-original.svg` },
  { name: 'GitHub',    icon: `${CDN}/github/github-original.svg` },
  { name: 'Postman',   icon: `${CDN}/postman/postman-original.svg` },
  { name: 'MySQL',     icon: `${CDN}/mysql/mysql-original.svg` },
  { name: 'Jira',      icon: `${CDN}/jira/jira-original.svg` },
  { name: 'Jupyter',   icon: `${CDN}/jupyter/jupyter-original.svg` },
  { name: 'Express',   icon: `${CDN}/express/express-original.svg` },
  { name: 'scikit',    icon: `${CDN}/scikitlearn/scikitlearn-original.svg` },
]

function MarqueeRow({ items, direction }) {
  const doubled = [...items, ...items]
  return (
    <div className={`marquee-row ${direction}`}>
      {doubled.map((item, i) => (
        <div key={i} className="marquee-item">
          <img
            src={item.icon}
            alt={item.name}
            onError={e => { e.target.style.opacity = '0.3' }}
          />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section className="marquee-section">
      <p className="marquee-label">Technologies I Work With</p>
      <div className="marquee-track">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  )
}
