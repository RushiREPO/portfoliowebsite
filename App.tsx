
import React, { useState, useEffect } from 'react';
import { PROJECTS, EXPERIENCES } from './constants';
import SkillChart from './components/SkillChart';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper part of the viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tight text-gradient">RUSHI.AI</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-blue-400 bg-blue-900/30' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                Available for New Challenges
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Turning Data into <br />
                <span className="text-gradient">Strategic Impact.</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                I'm Rushikesh, a Data Scientist with 2 years of experience specializing in predictive modeling, ETL pipelines, and delivering measurable business value through statistical insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="glass hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition-all active:scale-95"
                >
                  Let's Talk
                </a>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="/meimg.png" 
                alt="Rushikesh Shivshette Profile" 
                className="relative rounded-3xl shadow-2xl border-2 border-slate-700 w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 border-t border-slate-800/50">
          <div className="max-w-4xl">
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Discovery</h2>
            <h3 className="text-4xl font-bold mb-8">About Me</h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                My journey into data science began with a curiosity for how complex systems can be understood through numbers. Over the last <span className="text-blue-400 font-semibold">two years</span>, I've transitioned from analyzing raw data to building production-ready machine learning models.
              </p>
              <p>
                Currently, at <span className="text-white font-medium">Automonk Technologies PVT LTD</span>, I focus on risk assessment and credit scoring models. I believe that data is only as good as the decisions it drives, which is why I bridge the gap between technical complexity and business strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 border-t border-slate-800/50">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Toolkit</h2>
              <h3 className="text-4xl font-bold mb-6">Core Expertise</h3>
              <p className="text-slate-400 mb-8 text-lg">
                My technical toolkit is built around modern Python ecosystems and scalable data architectures. I focus on model interpretability as much as performance.
              </p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {['Machine Learning', 'Statistical Analysis', 'ETL / Data Pipelines', 'Data Visualization', 'Deep Learning', 'Cloud Computing'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-slate-300 group">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:text-white transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-8 rounded-3xl border-white/5 shadow-inner">
              <h3 className="text-xl font-semibold mb-2 text-center text-slate-200">Skill Distribution</h3>
              <SkillChart />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 border-t border-slate-800/50">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Career</h2>
          <h3 className="text-4xl font-bold mb-16">Professional Journey</h3>
          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-12 border-l border-slate-700/50 pb-8 last:pb-0">
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h4>
                    <p className="text-blue-400 font-medium text-lg mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm mono text-slate-500 mt-2 md:mt-0 font-medium bg-slate-800/50 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <ul className="space-y-4 text-slate-400 text-lg">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-blue-500 font-bold shrink-0">0{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 border-t border-slate-800/50">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold mb-4">Featured Work</h3>
            <p className="text-slate-400 text-lg">Real-world applications of data science and engineering.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group glass rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                      {project.tags[0]}
                    </span>
                    <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                      {project.metric}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                    <div className="flex -space-x-2">
                      {project.tags.slice(1, 4).map((tag, i) => (
                        <div key={i} title={tag} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] text-slate-300 font-bold uppercase">
                          {tag[0]}
                        </div>
                      ))}
                    </div>
                    <a href={project.link} className="inline-flex items-center text-blue-400 font-bold text-sm hover:translate-x-1 transition-all">
                      Case Study <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI & Contact Section */}
        <section id="contact" className="py-32 border-t border-slate-800/50 mb-20">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Collaboration</h2>
              <h3 className="text-5xl font-bold mb-8 leading-tight">Let's build something <span className="text-gradient underline decoration-blue-500/20 underline-offset-8">smarter together.</span></h3>
              <p className="text-slate-400 text-xl mb-12 max-w-md">
                Whether you have a specific project in mind or just want to chat about the future of data, I'm always open to new connections.
              </p>
              <div className="space-y-8">
                <a href="mailto:rus24ai@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Email</p>
                    <p className="text-slate-200 text-lg font-medium group-hover:text-blue-400 transition-colors">rus24ai@gmail.com</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <span className="text-xl">🔗</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">LinkedIn</p>
                    <p className="text-slate-200 text-lg font-medium group-hover:text-blue-400 transition-colors">linkedin.com/in/alexchends</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="sticky top-24">
              <AIChat />
              <p className="text-center text-slate-500 text-xs mt-4">
                Powered by RUSHI.AI
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-800/50 glass">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold text-gradient">RUSHI.AI</span>
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Rushikesh Shivshette. Hand-crafted with React, Tailwind CSS.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">GitHub</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
