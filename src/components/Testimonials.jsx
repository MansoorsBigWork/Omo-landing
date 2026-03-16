import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-test-reveal',
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
    <section id="students" ref={sectionRef} className="w-full px-6 py-32 bg-canvas relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full text-center mb-16">
          <p className="gsap-test-reveal font-mono text-sm uppercase tracking-wide text-omo-orange mb-4">
            // Student testimonial
          </p>
          <h2 className="gsap-test-reveal font-display font-bold text-5xl md:text-6xl text-obsidian tracking-tight leading-none max-w-3xl mx-auto">
            What students told us &mdash; before OMO existed.
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quote 1 */}
          <div className="gsap-test-reveal glass-card p-10 flex flex-col justify-between bg-white/40 h-full">
            <p className="font-body text-obsidian text-lg italic mb-8 leading-relaxed">
              "You get rejected but you don't get a reason why. So you don't
              know what to improve on. It's basically doing it in a loop."
            </p>
            <div>
              <p className="font-body font-bold text-omo-orange text-base">Rohit</p>
              <p className="font-mono text-secondary text-xs mt-1">
                MEng Mechatronics
              </p>
            </div>
          </div>

          {/* Quote 2 */}
          <div className="gsap-test-reveal glass-card p-10 flex flex-col justify-between bg-white/40 h-full">
            <p className="font-body text-obsidian text-lg italic mb-8 leading-relaxed">
              "Employers are not looking for extracurricular evidence.
              They want actual company experience. There's no structured path."
            </p>
            <div>
              <p className="font-body font-bold text-omo-orange text-base">Laweeza</p>
              <p className="font-mono text-secondary text-xs mt-1">
                BEng Robotics
              </p>
            </div>
          </div>

          {/* Quote 3 */}
          <div className="gsap-test-reveal glass-card p-10 flex flex-col justify-between bg-white/40 h-full">
            <div>
              <p className="font-body text-obsidian text-lg italic mb-2 leading-relaxed">
                "He saved my life."
              </p>
              <p className="font-body text-secondary text-sm italic mb-8 leading-relaxed">
                 &mdash; on the CEO who got him his placement
              </p>
            </div>
            <div>
              <p className="font-body font-bold text-omo-orange text-base">Kirtin</p>
              <p className="font-mono text-secondary text-xs mt-1">
                MEng Mechatronics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
