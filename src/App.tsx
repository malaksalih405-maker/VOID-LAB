import { motion } from "motion/react";
import { ArrowUpRight, Mail, Instagram, Music2, MessageCircle } from "lucide-react";

const CANVA_URL = "https://void-lab.my.canva.site/";

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
            href="mailto:hello@voidlabco.com"
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
            
              <p className="text-sm md:text-base uppercase tracking-[0.2em] font-bold mb-12 opacity-70">
                Brand & Digital Experience Agency in UAE
              </p>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-20">
              <div className="md:col-span-8">
                <p className="font-display text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-balance text-black">
                  High-performance digital systems for modern brands.                </p>
                <p className="font-display text-sm md:text-lg tracking-[0.2em] uppercase opacity-50 mt-8">
                  Built for brands operating at scale.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end">
                <div className="space-y-4 border-t-2 border-black pt-6">
                  <p className="text-xs uppercase tracking-[0.3em] font-black text-burgundy">MISSION / 2026</p>
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
              Capabilities <span className="text-burgundy">/</span> SYSTEMS
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
                <h3 className="font-display text-3xl md:text-4xl font-bold leading-none tracking-tighter group-hover:translate-x-4 transition-transform duration-500 mt-8">
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
            <span className="text-xs uppercase tracking-[0.5em] font-black mb-12 block mix-blend-difference">CASE STUDIES</span>
            <h2 className="font-display text-7xl md:text-[10vw] font-black leading-[0.8] tracking-tighter mb-12 text-balance relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="inline-block"
              >
                SELECTED
              </motion.span>
              <br />
              <motion.span
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="inline-block italic text-black"
              >
                WORK.
              </motion.span>
            </h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-display text-sm md:text-lg tracking-widest uppercase opacity-60 mb-20 max-w-2xl mx-auto"
            >
              Built for brands across digital, fashion, and emerging markets
            </motion.p>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex justify-center"
            >
              <motion.a
                href={CANVA_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                initial="initial"
                className="relative flex items-center gap-6 bg-vanilla text-black px-12 py-5 rounded-full border-2 border-black overflow-hidden group/btn shadow-xl"
              >
                {/* Luxury Fill Effect */}
                <motion.div 
                  variants={{
                    hover: { y: 0 },
                    initial: { y: "100%" }
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-black"
                />
                
                <span className="relative z-10 font-display text-sm uppercase tracking-[0.2em] font-bold group-hover/btn:text-white transition-colors duration-300">
                  View Case Studies
                </span>
                
                <div className="relative z-10 w-8 h-8 flex items-center justify-center bg-black rounded-full group-hover/btn:bg-vanilla transition-colors duration-300">
                  <ArrowUpRight 
                    className="text-white group-hover/btn:text-black transition-all duration-300" 
                    size={18} 
                  />
                </div>
              </motion.a>
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
                  Co-Founder — Creative & Systems
                </p>
                
                <p className="font-display text-xl md:text-2xl font-medium leading-tight tracking-tight opacity-70 max-w-xs transition-opacity group-hover:opacity-100">
                  Drives creative direction and develops high-performance digital systems built to scale.
                </p>
                
                <div className="mt-12 flex gap-4">
                  <a href={CANVA_URL} target="_blank" rel="noopener noreferrer" className="p-4 border-2 border-black hover:bg-black hover:text-vanilla transition-all"><ArrowUpRight size={18} /></a>
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
                  Co-Founder — Production & Operations
                </p>
                
                <p className="font-display text-xl md:text-2xl font-medium leading-tight tracking-tight opacity-70 max-w-xs transition-opacity group-hover:opacity-100">
                  Manages production and operations, ensuring consistency and structured execution.
                </p>
                
                <div className="mt-12 flex gap-4">
                  <a href={CANVA_URL} target="_blank" rel="noopener noreferrer" className="p-4 border-2 border-black hover:bg-black hover:text-vanilla transition-all"><ArrowUpRight size={18} /></a>
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
                For serious collaborations and <span className="text-burgundy underline">long-term partnerships</span>.
              </h3>
              <a 
                href="mailto:hello@voidlabco.com"
                className="font-display text-2xl md:text-4xl font-bold border-b-4 border-black hover:text-burgundy hover:border-burgundy transition-all inline-block pb-2"
              >
                hello@voidlabco.com
              </a>
            </div>
            
            <div className="flex flex-col justify-between h-full text-right w-full lg:w-auto">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] font-black">CONNECT</p>
                <div className="flex gap-8 justify-end items-center">
                  <a 
                    href="https://www.instagram.com/voidlabworld?igsh=MWdqeWgwMHJmeTMxdQ%3D%3D&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative p-3 border border-black/10 rounded-full hover:border-burgundy hover:bg-burgundy hover:text-white transition-all duration-500 hover:scale-110 shadow-sm hover:shadow-burgundy/20"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="transition-transform duration-500 group-hover:rotate-12" />
                  </a>
                  <a 
                    href="https://wa.me/971506638099" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative p-3 border border-black/10 rounded-full hover:border-burgundy hover:bg-burgundy hover:text-white transition-all duration-500 hover:scale-110 shadow-sm hover:shadow-burgundy/20"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={20} className="transition-transform duration-500 group-hover:-rotate-12" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@voidlabworld?_r=1&_t=ZS-95ebC2h6CL2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative p-3 border border-black/10 rounded-full hover:border-burgundy hover:bg-burgundy hover:text-white transition-all duration-500 hover:scale-110 shadow-sm hover:shadow-burgundy/20"
                    aria-label="TikTok"
                  >
                    <Music2 size={20} className="transition-transform duration-500 group-hover:rotate-12" />
                  </a>
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
