import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    // Fade up entrance only. No scroll triggers.
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 }
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[100dvh] bg-canvas flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Blob 1: Top Right */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-omo-orange rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-[blob_10s_infinite]"></div>
        {/* Blob 2: Bottom Left */}
        <div className="absolute top-[40%] -left-20 w-[500px] h-[500px] bg-ember rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.07] animate-[blob_10s_infinite_2s]"></div>
        {/* Blob 3: Center White */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full mix-blend-overlay filter blur-[120px] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-[740px] px-6 text-center" ref={contentRef}>


        <h1 className="font-display font-bold text-6xl md:text-8xl text-obsidian leading-tight md:leading-[0.9] tracking-tight mt-12 md:mt-20">
          You need work experience
        </h1>
        
        <h2 className="font-display font-bold text-6xl md:text-8xl text-omo-orange leading-tight md:leading-[0.9] tracking-tight italic mt-2">
          to get work experience.
        </h2>

        <p className="font-body text-lg text-secondary max-w-lg mx-auto mt-8 opacity-90">
          140 candidates. One role. The odds were never in your favour.
        </p>
        <p className="font-body text-lg text-secondary max-w-lg mx-auto mt-4 opacity-90">
          OMO gives every student the diagnosis, the experience, and the network that most of them never had. Free to start.
        </p>

        <div className="flex flex-col items-center justify-center mt-12 mb-20 md:mb-24">
          <a
            href="https://tally.so/r/D4VZ8q"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-omo-orange text-white font-body font-bold rounded-full px-8 py-3.5 transition-all duration-200 hover:scale-105 hover:shadow-button-glow w-full sm:w-auto justify-center"
          >
            Join OMO Today <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 z-10 animate-bounce">
        <ArrowDown className="text-omo-orange" size={24} />
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </section>
  );
}
