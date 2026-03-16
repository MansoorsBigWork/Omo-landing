import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Jimmy() {
  const sectionRef = useRef(null);
  
  // Ref tracking for the chat animation timeline
  const cursorRef = useRef(null);
  const userBubbleRef = useRef(null);
  const jimmyBubbleRef = useRef(null);
  const inputTextRef = useRef(null);
  const ghostInputRef = useRef(null);
  const sendBtnRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Reveal Animation
      gsap.fromTo(
        '.gsap-jimmy-reveal',
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

      // 2. Chat Simulation Looping Animation
      const chatTl = gsap.timeline({ repeat: -1, repeatDelay: 3.0 });
      const fullText = "I've applied to 12 automotive roles and keep getting rejected.";
      
      // Reset state at start of loop
      chatTl.set(cursorRef.current, { left: '85%', top: '90px', opacity: 0, scale: 1 })
            .set(userBubbleRef.current, { opacity: 0, scale: 0.9, transformOrigin: 'bottom right', display: 'none' })
            .set(jimmyBubbleRef.current, { opacity: 0, scale: 0.9, transformOrigin: 'top left', display: 'none' })
            .set(inputTextRef.current, { textContent: '' })
            .set(ghostInputRef.current, { opacity: 1 })
            .set(sendBtnRef.current, { scale: 1 });

      // Cursor floats in to the input field
      chatTl.to(cursorRef.current, { opacity: 1, duration: 0.8 })
            .to(cursorRef.current, { left: '15%', top: '26px', duration: 1.8, ease: 'power2.out' }, '<0.1');

      // Click the input box: cursor shrinks, ghost text fades out
      chatTl.to(cursorRef.current, { scale: 0.8, duration: 0.14, yoyo: true, repeat: 1 })
            .to(ghostInputRef.current, { opacity: 0, duration: 0.14 }, '<');

      // Add a tiny pause before typing
      chatTl.to({}, { duration: 0.28 });

      // Typing effect (cursor stays still while text appears)
      const textOb = { val: 0 };
      chatTl.to(textOb, {
        val: fullText.length,
        duration: 2.1, 
        ease: 'none',
        onUpdate: () => {
          if (inputTextRef.current) {
            inputTextRef.current.textContent = fullText.substring(0, Math.floor(textOb.val));
          }
        }
      });
      
      // Cursor moves directly ON TOP of the send button slightly slower
      chatTl.to(cursorRef.current, { 
        left: 'calc(100% - 32px)', // Mathematically centered over the button
        top: '24px', 
        duration: 1.8,  // Made it even slower just to be sure it feels deliberate
        ease: 'power2.inOut' 
      });

      // Click the send button (slightly overlapping the end of the movement for fluidity)
      chatTl.to(cursorRef.current, { scale: 0.8, duration: 0.14, yoyo: true, repeat: 1 }, '-=0.14')
            .to(sendBtnRef.current, { scale: 0.9, duration: 0.14, yoyo: true, repeat: 1 }, '<'); // Send button press

      // Submit message
      chatTl.set(inputTextRef.current, { textContent: '' })
            .set(ghostInputRef.current, { opacity: 1 })
            .to(cursorRef.current, { opacity: 0, top: '40px', duration: 0.7, ease: 'power2.in' }, '<')
            .set(userBubbleRef.current, { display: 'flex' })
            .to(userBubbleRef.current, { opacity: 1, scale: 1, duration: 0.57, ease: 'back.out(1.5)' }, '<');

      // Jimmy responds after short thinking delay
      chatTl.set(jimmyBubbleRef.current, { display: 'flex' }, '+=0.85')
            .to(jimmyBubbleRef.current, { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.5)' });

      // End of timeline, repeatDelay of 3.0s applies here to wait before looping.

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="jimmy" className="bg-canvas w-full px-6 py-32 rounded-b-[3rem] relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full text-center md:text-left mb-16">
          <p className="gsap-jimmy-reveal font-mono text-sm uppercase tracking-wide text-omo-orange mb-4">
            // product 01
          </p>
          <h2 className="gsap-jimmy-reveal font-display font-bold text-5xl md:text-6xl text-obsidian mb-6 tracking-tight leading-none">
            Meet Jimmy.
          </h2>
          <p className="gsap-jimmy-reveal font-body text-xl text-secondary max-w-md mx-auto md:mx-0">
            Your free AI career co-pilot. Personal, specific, and brutally honest
            about what's standing between you and the role you want.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Chat UI Mockup */}
          <div className="gsap-jimmy-reveal elevated-glass rounded-[2rem] p-6 max-w-md w-full mx-auto md:mr-auto md:ml-0 bg-white shadow-xl relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-omo-orange/10 text-omo-orange font-body font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-sm z-10">
              Coming Soon
            </div>
            {/* Top Bar */}
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center font-display font-bold text-omo-orange text-lg">
                  J
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-omo-orange rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-body font-bold text-obsidian text-sm">Jimmy — AI Career Co-Pilot</h3>
                <p className="font-body text-xs text-secondary">Active now</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex flex-col justify-end min-h-[160px] space-y-4 mb-6 relative">
              {/* User Message */}
              <div className="justify-end hidden opacity-0" ref={userBubbleRef}>
                <div className="bg-canvas border border-secondary/10 text-obsidian font-body text-sm rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm">
                  I've applied to 12 automotive roles and keep getting rejected.
                </div>
              </div>

              {/* Jimmy Message */}
              <div className="justify-start hidden opacity-0" ref={jimmyBubbleRef}>
                <div className="bg-omo-orange text-white font-body text-sm rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%] shadow-md">
                  <p className="font-semibold mb-1">You have no embedded systems experience listed.</p>
                  <p className="opacity-90">That's the gap. Here's exactly what to do about it &rarr;</p>
                </div>
              </div>
            </div>

            {/* Input Form with Floating Cursor */}
            <div className="relative w-full">
              {/* Fake Cursor */}
              <div ref={cursorRef} className="absolute z-50 pointer-events-none drop-shadow-lg" style={{ top: '80px', left: '80%', opacity: 0 }}>
                <MousePointer className="text-secondary transform -scale-x-100" size={32} fill="currentColor" />
              </div>

              <div className="w-full bg-canvas/50 border border-gray-100 rounded-full py-3 px-5 text-sm font-body text-secondary/50 flex items-center justify-between">
                <div className="relative flex-1 truncate pr-2">
                  <span ref={ghostInputRef} className="absolute left-0 top-0">Ask Jimmy anything...</span>
                  <span ref={inputTextRef} className="text-obsidian font-medium"></span>
                </div>
                <div ref={sendBtnRef} className="w-6 h-6 rounded-full bg-omo-orange/10 flex items-center justify-center shrink-0 ml-2 shadow-sm transition-transform">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-omo-orange border-b-[4px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature Chips */}
          <div className="flex flex-col gap-4">
            <div className="gsap-jimmy-reveal glass-card p-6 flex flex-col md:flex-row items-start md:items-center gap-4 bg-white/40">
              <div className="w-12 h-12 shrink-0 rounded-full bg-canvas border border-omo-orange/20 flex flex-col items-center justify-center text-omo-orange font-bold font-mono text-xl">
                1
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-obsidian mb-1">CV Diagnosis</h4>
                <p className="font-body text-secondary text-sm">Know exactly what's missing before you apply.</p>
              </div>
            </div>

            <div className="gsap-jimmy-reveal glass-card p-6 flex flex-col md:flex-row items-start md:items-center gap-4 bg-white/40">
              <div className="w-12 h-12 shrink-0 rounded-full bg-canvas border border-omo-orange/20 flex flex-col items-center justify-center text-omo-orange font-bold font-mono text-xl">
                2
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-obsidian mb-1">Role Matching</h4>
                <p className="font-body text-secondary text-sm">Mapped against real UK internship databases.</p>
              </div>
            </div>

            <div className="gsap-jimmy-reveal glass-card p-6 flex flex-col md:flex-row items-start md:items-center gap-4 bg-white/40">
              <div className="w-12 h-12 shrink-0 rounded-full bg-canvas border border-omo-orange/20 flex flex-col items-center justify-center text-omo-orange font-bold font-mono text-xl">
                3
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-obsidian mb-1">OMOship Unlock</h4>
                <p className="font-body text-secondary text-sm">Jimmy surfaces the simulation that fills your gap.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
