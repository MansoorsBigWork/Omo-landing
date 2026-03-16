import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-footer-reveal',
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} id="signup" className="w-full bg-obsidian rounded-t-[3rem] px-6 pt-32 pb-12 relative z-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <p className="gsap-footer-reveal font-mono text-sm uppercase tracking-wide text-omo-orange mb-6">
          // get started
        </p>

        <h2 className="gsap-footer-reveal font-display font-bold text-5xl md:text-7xl text-white leading-[0.9] tracking-tight mb-2">
          Your career gap
        </h2>
        <h2 className="gsap-footer-reveal font-display font-bold text-5xl md:text-7xl text-omo-orange leading-[0.9] tracking-tight italic mb-12">
          starts closing today.
        </h2>

        <div className="gsap-footer-reveal flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <a 
            href="https://tally.so/r/D4VZ8q"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-omo-orange text-white font-body font-bold rounded-full px-8 py-4 transition-all duration-200 hover:scale-105 hover:shadow-button-glow text-lg"
          >
            Join OMO Today <ArrowRight size={20} className="ml-1" />
          </a>
          
          <div className="flex flex-col items-center sm:items-start text-left ml-0 sm:ml-8">
            <span className="font-body font-bold text-white/40 uppercase tracking-widest text-[10px] mb-1">
              Have questions?
            </span>
            <a 
              href="mailto:buildingomo@gmail.com"
              className="font-body text-white hover:text-omo-orange transition-colors text-lg"
            >
              Contact Us <span className="opacity-40 ml-2 text-sm font-normal">buildingomo@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="gsap-footer-reveal w-full h-[1px] bg-white/10 mt-24 mb-12"></div>

        {/* Footer Bottom Row */}
        <div className="gsap-footer-reveal w-full flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0.5 font-display font-bold text-xl text-white tracking-tight group">
            <span>OMO</span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-body text-sm text-white/50">
            <a href="#how" className="hover:text-omo-orange transition-colors">How It Works</a>
            <a href="#jimmy" className="hover:text-omo-orange transition-colors">Jimmy</a>
            <a href="#omoships" className="hover:text-omo-orange transition-colors">OMOships</a>
            <a href="#students" className="hover:text-omo-orange transition-colors">For Students</a>
          </div>

          {/* Copyright */}
          <div className="font-body text-sm text-white/50">
            &copy; 2026 One Million Opportunities Ltd
          </div>
        </div>
      </div>
    </footer>
  );
}
