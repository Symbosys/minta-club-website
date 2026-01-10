"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// --- COMPONENTS ---

export const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
    <a href="/" className="font-serif text-xl font-bold tracking-tighter hover:opacity-50 transition-opacity">MINTA CLUB.</a>
    <nav className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase">
      {["About", "Brands", "Philosophy", "Contact"].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-50 transition-opacity cursor-pointer">
          {item}
        </a>
      ))}
    </nav>
    <div className="text-xs font-bold uppercase border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer">
      Menu
    </div>
  </header>
);
const Hero = () => {
  const container = useRef(null);
  const textRef = useRef(null);
  const blob1 = useRef(null);
  const blob2 = useRef(null);
  const blob3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // --- 1. BACKGROUND CHAOS ANIMATION (Continuous) ---
      // Moves the blobs around forever to create a "liquid" feel
      gsap.to(blob1.current, {
        x: "30vw", y: "20vh", scale: 1.5, rotate: 360,
        duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut"
      });
      gsap.to(blob2.current, {
        x: "-20vw", y: "-30vh", scale: 1.2, rotate: -180,
        duration: 12, repeat: -1, yoyo: true, ease: "sine.inOut"
      });
      gsap.to(blob3.current, {
        x: "10vw", y: "40vh", scale: 1.8,
        duration: 15, repeat: -1, yoyo: true, ease: "sine.inOut"
      });

      // --- 2. ENTRY ANIMATION (The "Crazy" Load) ---
      // We use .to() from a set state to prevent "missing element" bugs
      gsap.set(textRef.current, { scale: 5, opacity: 0, filter: "blur(20px)" });

      tl.to(textRef.current, {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "expo.out", // The "Slam" effect
        delay: 0.2
      });

      // --- 3. SCROLL PARALLAX (Bug Free) ---
      // Only animating Y position, NOT opacity, so it never disappears
      gsap.to(textRef.current, {
        y: 150, // Moves down as you scroll
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5, // Smooth reaction
        }
      });

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] text-[#FDFBF7]">

      {/* --- PROCEDURAL BACKGROUND (No Images) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blob 1: Purple/Indigo */}
        <div
          ref={blob1}
          className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-indigo-600 rounded-full blur-[100px] opacity-20 mix-blend-screen"
        />
        {/* Blob 2: Lime/Acid */}
        <div
          ref={blob2}
          className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-[#ccff00] rounded-full blur-[120px] opacity-10 mix-blend-screen"
        />
        {/* Blob 3: Cyan/Blue */}
        <div
          ref={blob3}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900 rounded-full blur-[150px] opacity-20 mix-blend-screen"
        />
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- HERO TEXT --- */}
      <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center text-center px-4 will-change-transform">

        <div className="mb-6 flex items-center gap-3 animate-pulse">
          <span className="w-2 h-2 bg-[#ccff00] rounded-full shadow-[0_0_10px_#ccff00]"></span>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/50">System Online</span>
        </div>

        <h1 className="font-serif text-[18vw] leading-[0.8] tracking-tighter text-white mix-blend-difference select-none">
          MINTA<br />
          <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px white" }}>CLUB</span>
        </h1>

        <p className="mt-8 max-w-md text-sm md:text-base font-light tracking-widest uppercase text-white/60">
          Architecting the invisible infrastructure.
        </p>

      </div>
    </section>
  );
};

const TextRevealSection = () => {
  const container = useRef(null);
  const words = "We don't just build apps. We build ecosystems that breathe, scale, and empower.".split(" ");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".word", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
        opacity: 0.1,
        stagger: 0.1,
        y: 20,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-40 px-6 md:px-12 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto">
        <p className="font-serif text-4xl md:text-7xl leading-[1.1] text-[#0A0A0A]">
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-4 opacity-100">{word}</span>
          ))}
        </p>
      </div>
    </section>
  );
};

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (triggerRef.current as any).offsetWidth,
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#FDFBF7]">
      <div ref={triggerRef} className="flex flex-nowrap h-screen w-[300vw]"> {/* 300vw for 3 panels */}

        {/* Intro Panel */}
        <div className="panel w-screen h-screen flex flex-col justify-center px-6 md:px-24 border-r border-black/10">
          <span className="text-xs font-bold uppercase tracking-widest mb-6 text-indigo-600">The Ecosystem</span>
          <h2 className="font-serif text-[8vw] leading-none mb-8">
            Our <br /><span className="italic text-gray-400">Ventures</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-black"></div>
            <p className="text-xl">Swipe to discover</p>
          </div>
        </div>

        {/* Brand 1: Minta Fresh */}
        <div className="panel w-screen h-screen relative flex items-center bg-[#0f172a] text-white">
          <div className="absolute inset-0 bg-emerald-900/20" />
          <div className="absolute right-0 top-0 w-1/2 h-full">
            {/* Placeholder for Image - using color block for now */}
            <div className="w-full h-full bg-cover bg-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop")' }}></div>
          </div>

          <div className="relative z-10 px-6 md:px-24 w-full md:w-2/3">
            <div className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">01 — Minta Fresh</div>
            <h3 className="font-serif text-6xl md:text-8xl mb-6">Raw & <br /> Real.</h3>
            <p className="text-xl md:text-2xl text-gray-400 max-w-md mb-10">
              High-precision delivery for raw non-veg. We control the cold chain from dock to door.
            </p>
            <button className="group flex items-center gap-3 text-white border-b border-white pb-1 hover:text-emerald-400 hover:border-emerald-400 transition-colors">
              Visit Platform <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Brand 2: Minta Restro */}
        <div className="panel w-screen h-screen relative flex items-center bg-[#1c1917] text-white">
          <div className="absolute inset-0 bg-orange-900/20" />
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <div className="w-full h-full bg-cover bg-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop")' }}></div>
          </div>

          <div className="relative z-10 px-6 md:px-24 w-full md:w-2/3">
            <div className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">02 — Minta Restro</div>
            <h3 className="font-serif text-6xl md:text-8xl mb-6">Taste <br /> Makers.</h3>
            <p className="text-xl md:text-2xl text-gray-400 max-w-md mb-10">
              Curated restaurant aggregation for the connoisseur. Speed meets savor.
            </p>
            <button className="group flex items-center gap-3 text-white border-b border-white pb-1 hover:text-orange-400 hover:border-orange-400 transition-colors">
              Visit Platform <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

const ParallaxImageSection = () => {
  const container = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-24 px-6 md:px-12 bg-[#FDFBF7]">
      <div className="relative h-[80vh] w-full overflow-hidden rounded-sm">
        <div
          ref={imgRef}
          className="absolute -top-[20%] left-0 w-full h-[140%] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="font-serif text-[10vw] text-white mix-blend-difference tracking-tighter">
            Scale Without Limits
          </h2>
        </div>
      </div>
    </section>
  );
};

const FeaturesList = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-row", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out"
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const features = [
    { num: "01", title: "Micro-Logistics", desc: "Routing algorithms that predict traffic patterns before they happen." },
    { num: "02", title: "Vendor First", desc: "Empowering local partners with enterprise-grade analytics tools." },
    { num: "03", title: "Quality Control", desc: "Automated quality checks at 4 distinct supply chain checkpoints." },
    { num: "04", title: "Instant Scale", desc: "Cloud-native infrastructure designed for 100x traffic spikes." },
  ];

  return (
    // Added z-20 and bg-[#0A0A0A] to ensure visibility and contrast
    <section ref={container} className="relative z-20 py-40 px-6 md:px-12 bg-[#0A0A0A] text-[#FDFBF7]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 border-b border-white/20 pb-8 feature-row">
          <h2 className="font-serif text-5xl md:text-7xl">The Architecture</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {features.map((f, i) => (
            <div key={i} className="group cursor-pointer feature-row">
              <div className="flex items-baseline justify-between mb-6 border-b border-white/20 pb-4 group-hover:border-white transition-colors duration-500">
                <span className="font-serif text-3xl md:text-4xl group-hover:translate-x-2 transition-transform duration-300 text-white">{f.title}</span>
                <span className="text-xs font-bold opacity-40 text-white">{f.num}</span>
              </div>
              <p className="text-lg text-gray-400 group-hover:text-white transition-colors duration-300 max-w-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export const Footer = () => (
  <footer className="bg-[#0A0A0A] text-[#FDFBF7] pt-40 pb-12 px-6 md:px-12 relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="mb-20">
        <h2 className="font-serif text-[12vw] leading-[0.8] tracking-tighter mb-8">
          LET'S<br />BUILD.
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-indigo-500 hover:text-white transition-colors duration-300">
            CONTACT US
          </button>
          <span className="text-sm opacity-50 max-w-xs">
            Interested in partnership or investment? Reach out to our strategy team.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 text-xs font-bold uppercase tracking-widest opacity-60">
        <div>
          <p className="mb-4 text-white">Socials</p>
          <ul className="space-y-2 font-normal normal-case">
            <li>LinkedIn</li>
            <li>Twitter / X</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-white">Legal</p>
          <ul className="space-y-2 font-normal normal-case">
            <li><a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</a></li>
            <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a></li>
            <li><a href="/corporate-social-responsibility" className="hover:text-white transition-colors">CSR Policy</a></li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-white">Support</p>
          <ul className="space-y-2 font-normal normal-case">
            <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="/contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1 md:text-right">
          <p className="normal-case font-serif text-xl opacity-100">Minta Club &copy; 2025</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <ReactLenis root>
      <main className="w-full min-h-screen bg-[#FDFBF7]">
        <Header />
        <Hero />
        <TextRevealSection />
        <HorizontalScroll />
        <ParallaxImageSection />
        <FeaturesList />
        <Footer />
      </main>
    </ReactLenis>
  );
}