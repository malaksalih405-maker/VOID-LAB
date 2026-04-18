import { motion } from "motion/react";
import { ArrowUpRight, Mail, Instagram } from "lucide-react";

const CANVA_URL = "https://www.canva.com/";

const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-vanilla text-black font-sans selection:bg-burgundy selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-10 z-[100] flex justify-between items-center bg-vanilla/80 backdrop-blur-md border-b border-neutral-100">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display font-bold text-2xl md:text-3xl tracking-tighter flex items-center gap-2"
        >
          <div className="w-3 h-3 bg-burgundy rounded-full animate-pulse" />
          VOID LAB
        </motion.div>
        <div className="flex gap-4 items-center">
          <motion.a 
            href="#work"
            className="bg-burgundy text-white px-6 py-2 text-xs uppercase tracking-widest font-bold hover:bg-black transition-colors hidden md:block"
          >
            Work
          </motion.a>
          <motion.a 
            href="mailto:voidlabteam@gmail.com"
            className="bg-black text-white px-6 py-2 text-xs uppercase tracking-widest font-bold hover:bg-burgundy transition-colors flex items-center gap-2"
          >
            Connect
            <Mail size={14} />
          </motion.a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="min-h-[100svh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 border-b border-black">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display font-black text-[18vw] md:text-[15vw] leading-[0.75] tracking-tightest mb-12">
              VOID<br />
              <span className="text-burgundy">LAB.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-20">
              <div className="md:col-span-8">
                <h2 className="font-display text-2xl md:text-3xl font-black text-burgundy uppercase tracking-widest mb-4">
                  Full-Service Creative Tech Studio
                </h2>
                <p className="font-display text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-balance text-black">
                  We design and build digital brands, experiences, and content systems that blend creativity and technology.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end">
                <div className="space-y-4 border-t-2 border-black pt-6">
                  <p className="text-xs uppercase tracking-[0.3em] font-black text-burgundy">MISSION / 01</p>
                  <p className="font-medium text-lg leading-tight">
                    Design. Development.<br />
                    Content. Experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* MARQUEE - THE VIBE */}
        <div className="py-12 border-b-2 border-black overflow-hidden bg-vanilla">
          <motion.div 
            variants={marqueeVariants}
            animate="animate"
            className="flex whitespace-nowrap gap-20 items-center"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-20">
                <span className="font-display font-black text-7xl md:text-9xl uppercase italic outline-text text-transparent" style={{ WebkitTextStroke: '2px black' }}>
                  VOID LAB
                </span>
                <span className="font-display font-black text-7xl md:text-9xl uppercase text-burgundy">
                  EST 2026
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CAPABILITIES - BRUTALIST GRID */}
        <section className="py-24 border-b-2 border-black">
          <div className="px-6 md:px-12 lg:px-24 mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Capabilities <span className="text-burgundy">/</span> what we do
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-2 border-black">
            {[
              { id: "01", title: "Web + App Development" },
              { id: "02", title: "Branding & Design" },
              { id: "03", title: "Photography & Content" },
              { id: "04", title: "Marketing Assets" },
              { id: "05", title: "Brand Experiences" },
              { id: "06", title: "Event Strategy" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-12 border-b-2 md:border-r-2 border-black group hover:bg-black hover:text-white transition-all duration-500 cursor-none relative overflow-hidden"
              >
                <span className="text-xs font-black mb-12 block text-burgundy group-hover:text-red-400 transition-colors">
                  {item.id}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold leading-none tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                  {item.title}
                </h3>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <span className="text-9xl font-black italic">VOID</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WORK - BIG CTA SECTION */}
        <section id="work" className="py-48 px-6 md:px-12 lg:px-24 bg-burgundy text-white flex flex-col items-center text-center overflow-hidden relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="text-xs uppercase tracking-[0.5em] font-black mb-12 block mix-blend-difference">VISUAL ARCHIVE</span>
            <h2 className="font-display text-7xl md:text-[10vw] font-black leading-[0.8] tracking-tighter mb-20 text-balance relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="inline-block"
              >
                ENTER THE
              </motion.span>
              <br />
              <motion.span
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="inline-block italic text-black"
              >
                VOID.
              </motion.span>
            </h2>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative group">
                {/* Decorative Luxurious Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                  className="absolute -inset-8 border border-white/20 rounded-full hidden md:block"
                />
                
                <motion.a
                  href={CANVA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                  initial="initial"
                  className="relative flex items-center gap-6 bg-vanilla text-black px-16 py-8 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-black overflow-hidden group/btn"
                >
                  {/* Luxury Fill Effect */}
                  <motion.div 
                    variants={{
                      hover: { y: 0 },
                      initial: { y: "100%" }
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-black"
                  />
                  
                  <span className="relative z-10 font-handwriting text-5xl md:text-7xl group-hover/btn:text-white transition-colors duration-500 pr-2">
                    Go to Showcase
                  </span>
                  
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-black rounded-full group-hover/btn:bg-vanilla transition-colors duration-500">
                    <ArrowUpRight 
                      className="text-white group-hover/btn:text-black group-hover:rotate-45 transition-all duration-500" 
                      size={28} 
                    />
                  </div>
                </motion.a>
              </div>
              
              <p className="font-handwriting text-3xl md:text-4xl mt-8 text-black opacity-80 decoration-black/20 underline underline-offset-8">
                Curated visuals for the bold
              </p>
            </motion.div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 20 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black italic select-none"
            >
              VOID
            </motion.div>
          </div>
        </section>

        {/* INDIVIDUAL FOUNDER PAGES */}
        <section className="bg-vanilla border-b-2 border-black py-32 md:py-48">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 md:gap-48">
              {/* MALAK */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative w-full aspect-[3/4] max-w-sm mb-16 overflow-hidden bg-neutral-900 border-2 border-black">
                  <img 
                    src="https://i.ibb.co/fdJQ4xvX/IMG-9098.jpg" 
                    alt="Malak"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-burgundy/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <h2 className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
                  Malak
                </h2>
                
                <p className="text-xs uppercase tracking-[0.4em] font-black text-burgundy mb-6">
                  Co-Founder — Digital Systems
                </p>
                
                <p className="font-display text-xl md:text-2xl font-medium leading-tight tracking-tight opacity-70 max-w-xs transition-opacity group-hover:opacity-100">
                  Leads development of high-performance digital platforms.
                </p>
                
                <div className="mt-12 flex gap-4">
                  <a href="#" className="p-4 border-2 border-black hover:bg-black hover:text-vanilla transition-all"><Instagram size={18} /></a>
                  <a href="#" className="p-4 border-2 border-black hover:bg-black hover:text-vanilla transition-all"><ArrowUpRight size={18} /></a>
                </div>
              </motion.div>

              {/* YASIR */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative w-full aspect-[3/4] max-w-sm mb-16 overflow-hidden bg-neutral-900 border-2 border-black">
                  <img 
                    src="https://i.ibb.co/C5KbJfkQ/IMG-9128.jpg" 
                    alt="Yasir"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-burgundy/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <h2 className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
                  Yasir
                </h2>
                
                <p className="text-xs uppercase tracking-[0.4em] font-black text-burgundy mb-6">
                  Co-Founder — Creative Direction
                </p>
                
                <p className="font-display text-xl md:text-2xl font-medium leading-tight tracking-tight opacity-70 max-w-xs transition-opacity group-hover:opacity-100">
                  Leads content and visual storytelling across projects.
                </p>
                
                <div className="mt-12 flex gap-4">
                  <a href="#" className="p-4 border-2 border-black hover:bg-black hover:text-vanilla transition-all"><Instagram size={18} /></a>
                  <a href="#" className="p-4 border-2 border-black hover:bg-black hover:text-vanilla transition-all"><ArrowUpRight size={18} /></a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FOOTER - CONTACT */}
        <footer className="px-6 md:px-12 lg:px-24 py-32 bg-vanilla">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
            <div className="max-w-2xl">
              <h3 className="font-display text-4xl md:text-6xl font-black italic mb-8">
                Let’s build something <span className="text-burgundy underline">different</span> together.
              </h3>
              <a 
                href="mailto:voidlabteam@gmail.com"
                className="font-display text-2xl md:text-4xl font-bold border-b-4 border-black hover:text-burgundy hover:border-burgundy transition-all inline-block pb-2"
              >
                voidlabteam@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col justify-between h-full text-right w-full lg:w-auto">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] font-black">CONNECT</p>
                <div className="flex gap-6 justify-end">
                  <a href="#" className="hover:text-burgundy">INS</a>
                  <a href="#" className="hover:text-burgundy">X</a>
                  <a href="#" className="hover:text-burgundy">GH</a>
                </div>
              </div>
              <div className="mt-20">
                <p className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30">
                  © {new Date().getFullYear()} VOID LAB &mdash; UAE / Worldwide
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>

    </div>
  );
}
