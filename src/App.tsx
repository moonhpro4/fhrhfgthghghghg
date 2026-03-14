import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Moon, ArrowRight, ExternalLink, Rocket, Globe, Download, ChevronRight } from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:rotate-12 transition-transform">
          <Moon className="text-black fill-black" size={24} />
        </div>
        <span className="text-xl font-bold tracking-tighter text-white">MOONLIGHT</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Home</Link>
        <Link to="/learnmore" className="text-sm font-medium text-white/70 hover:text-white transition-colors">About</Link>
        <Link to="/apps" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Apps</Link>
      </div>
      <Link to="/apps" className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
        Get Started
      </Link>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/10 bg-black text-white/50">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <Moon size={20} />
        <span className="font-bold tracking-tighter text-white">MOONLIGHT</span>
      </div>
      <p className="text-sm">© 2026 Moonlight Development. All rights reserved.</p>
      <div className="flex gap-6 text-sm">
        <a href="#" className="hover:text-white">Twitter</a>
        <a href="#" className="hover:text-white">GitHub</a>
        <a href="#" className="hover:text-white">Discord</a>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const Home = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen pt-32 pb-20 bg-black text-white"
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          The Future of Development
        </motion.div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
        >
          We build the <span className="text-white/40 italic">impossible.</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-white/60 leading-relaxed mb-10 max-w-2xl"
        >
          Moonlight is the premier developing company globally. We don't just write code; 
          we craft digital experiences that redefine what's possible in the modern web.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            to="/learnmore" 
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black text-lg font-bold hover:scale-105 transition-transform"
          >
            Learn More
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Elite Engineering", desc: "Our team consists of the top 0.1% of developers worldwide." },
          { title: "Rapid Innovation", desc: "From concept to production in record-breaking timeframes." },
          { title: "Global Impact", desc: "Our applications serve millions of users across every continent." }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + (i * 0.1) }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-white/50 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const LearnMore = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen pt-32 pb-20 bg-black text-white"
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Our Legacy of <span className="text-white/40">Creation.</span>
          </h2>
          <div className="space-y-6 text-lg text-white/60 leading-relaxed">
            <p>
              At Moonlight, our portfolio speaks for itself. We have engineered a vast ecosystem 
              of applications that push the boundaries of artificial intelligence, web development, 
              and mobile accessibility.
            </p>
            <p>
              Every project we undertake is a testament to our commitment to excellence. 
              We don't just make apps; we set the standard for the entire industry.
            </p>
          </div>
          <div className="mt-12">
            <Link 
              to="/apps" 
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black text-lg font-bold hover:scale-105 transition-transform"
            >
              See Our Apps
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
              <img src="https://picsum.photos/seed/tech1/600/800" alt="Tech" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
              <img src="https://picsum.photos/seed/tech2/600/600" alt="Tech" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
              <img src="https://picsum.photos/seed/tech3/600/600" alt="Tech" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-[3/4] rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
              <img src="https://picsum.photos/seed/tech4/600/800" alt="Tech" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Apps = () => {
  const apps = [
    {
      name: "Gemini Nova",
      tagline: "The World's Fastest AI",
      desc: "Experience the pinnacle of artificial intelligence. Gemini Nova is the smartest and most responsive AI model ever created, powering the next generation of intelligent tools.",
      link: "https://gemininova.lovable.app",
      icon: <Rocket className="text-emerald-400" size={32} />,
      color: "from-emerald-500/20 to-transparent"
    },
    {
      name: "MoonlightPages",
      tagline: "Free Website Building",
      desc: "The only truly free website building app. Create stunning, high-performance websites in minutes without writing a single line of code.",
      link: "https://moonlightpages.lovable.app",
      icon: <Globe className="text-blue-400" size={32} />,
      color: "from-blue-500/20 to-transparent"
    },
    {
      name: "APK Downloader",
      tagline: "Universal Access",
      desc: "Download any application securely and instantly. Our universal APK downloader ensures you have access to the tools you need, whenever you need them.",
      link: "https://apkdownloader.lovable.app",
      icon: <Download className="text-purple-400" size={32} />,
      color: "from-purple-500/20 to-transparent"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-32 pb-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Our <span className="text-white/40">Ecosystem.</span></h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Explore the suite of applications that are changing the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {app.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{app.name}</h3>
                <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-6">{app.tagline}</p>
                <p className="text-white/60 leading-relaxed mb-10 min-h-[100px]">
                  {app.desc}
                </p>
                <a 
                  href={app.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/10 group-hover:bg-white text-white group-hover:text-black transition-all duration-500 font-bold"
                >
                  Visit App
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen font-sans selection:bg-white selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
