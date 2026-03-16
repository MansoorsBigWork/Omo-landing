import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elements stagger in
      gsap.fromTo(
        '.gsap-problem-reveal',
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

      // Animate numbers up from 0
      const statNums = gsap.utils.toArray('.stat-num');
      statNums.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix');
        const obj = { val: 0 };
        
        gsap.to(obj, {
          val: target,
          duration: 2.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          onUpdate: () => {
            el.innerHTML = Math.round(obj.val) + suffix;
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-obsidian w-full px-6 py-32 rounded-t-[3rem] -mt-8 relative z-20">
      <div className="max-w-6xl mx-auto">
        <p className="gsap-problem-reveal font-mono text-sm uppercase tracking-wide text-omo-orange mb-4">
          // the problem
        </p>
        <h2 className="gsap-problem-reveal font-heading font-extrabold text-4xl md:text-5xl text-white mb-16">
          The numbers don't lie.
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="gsap-problem-reveal dark-glass p-8 flex flex-col justify-between">
            <div className="stat-num font-display font-bold text-6xl text-omo-orange mb-4" data-target="140" data-suffix="&times;">0&times;</div>
            <div>
              <p className="font-body font-medium text-sm text-white/70 mb-6">
                Average applications per graduate vacancy in 2025.
                Up from 86 just one year ago.
              </p>
              <p className="font-mono text-xs text-white/30">ISE Student Recruitment Survey 2025</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="gsap-problem-reveal dark-glass p-8 flex flex-col justify-between">
            <div className="stat-num font-display font-bold text-6xl text-ember mb-4" data-target="33" data-suffix="%">0%</div>
            <div>
              <p className="font-body font-medium text-sm text-white/70 mb-6">
                Drop in graduate job adverts since last year.
                Entry-level roles are disappearing.
              </p>
              <p className="font-mono text-xs text-white/30">Indeed UK, June 2025</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="gsap-problem-reveal dark-glass p-8 flex flex-col justify-between">
            <div className="stat-num font-display font-bold text-6xl text-white mb-4" data-target="6" data-suffix="%">0%</div>
            <div>
              <p className="font-body font-medium text-sm text-white/70 mb-6">
                Of 2023 graduates still unemployed two years later —
                trapped by the experience catch-22.
              </p>
              <p className="font-mono text-xs text-white/30">HESA Graduate Outcomes 2025</p>
            </div>
          </div>
        </div>

        {/* Quote Card */}
        <div className="gsap-problem-reveal dark-glass p-8 md:p-12 text-center mt-6">
          <blockquote className="font-heading font-bold text-2xl md:text-3xl text-white italic max-w-3xl mx-auto leading-tight mb-6">
            "You can't get a job without experience.<br />
            You can't get experience without a job."
          </blockquote>
          <p className="font-body text-sm text-omo-orange">
            &mdash; Every STEM student we interviewed. University of Liverpool, 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
