import { useRef, useEffect } from 'react';
import { Briefcase, Clock, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OMOships() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-omo-reveal',
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.7, 
          stagger: 0.1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="omoships" className="w-full px-6 py-32 bg-gradient-to-b from-white to-[rgba(242,100,25,0.04)] relative z-30 -mt-24 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full text-center mb-20">
          <p className="gsap-omo-reveal font-mono text-sm uppercase tracking-wide text-omo-orange mb-4">
            // product 02
          </p>
          <h2 className="gsap-omo-reveal font-display font-bold text-5xl md:text-6xl text-obsidian tracking-tight leading-none mb-6">
            OMOships.
          </h2>
          <p className="gsap-omo-reveal font-body text-xl text-secondary max-w-2xl mx-auto">
            Two-week remote work simulations built with real UK companies.
            Do real work. Earn a real certificate. Break the catch-22.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12 mb-16 items-start">
          {/* Card 1 */}
          <div className="gsap-omo-reveal elevated-glass p-8 flex flex-col h-full bg-white/30 backdrop-blur-2xl border border-white/40 rounded-[2rem]">
            <div className="w-14 h-14 rounded-2xl bg-canvas flex items-center justify-center text-omo-orange mb-8 shadow-sm">
              <Briefcase size={28} strokeWidth={2.5} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-obsidian mb-4">Actual business problems</h3>
            <p className="font-body text-secondary">
              Built from real company challenges, sanitised into simulations.
              No IP exposure. No legal obligation. 100% legit on your CV.
            </p>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="gsap-omo-reveal elevated-glass p-8 flex flex-col h-full bg-white/60 backdrop-blur-2xl border-2 border-omo-orange/20 rounded-[2rem] transform scale-100 md:scale-105 shadow-xl relative mt-4 md:mt-0 ring-1 ring-[#F26419]/10">
            <div className="absolute top-4 right-4 bg-omo-orange/10 text-omo-orange font-body font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-sm z-10 whitespace-nowrap">
              Coming Soon
            </div>
            <div className="w-14 h-14 rounded-2xl bg-canvas flex items-center justify-center text-omo-orange mb-8 shadow-sm">
              <Clock size={28} strokeWidth={2.5} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-obsidian mb-4">Two weeks. Part-time.</h3>
            <p className="font-body text-secondary relative z-0">
              Designed to fit around your final year. Remote, async,
              and scheduled around university term dates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="gsap-omo-reveal elevated-glass p-8 flex flex-col h-full bg-white/30 backdrop-blur-2xl border border-white/40 rounded-[2rem]">
            <div className="w-14 h-14 rounded-2xl bg-canvas flex items-center justify-center text-omo-orange mb-8 shadow-sm">
              <Award size={28} strokeWidth={2.5} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-obsidian mb-4">Certificate of completion</h3>
            <p className="font-body text-secondary">
              Named company, named simulation, verifiable output.
              The kind of experience employers actually recognise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
