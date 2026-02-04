"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// --- COMPONENTS ---

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Our Ventures", href: "#ventures" },
    { label: "Mission", href: "#mission" },
    { label: "Culture", href: "#culture" },
    // { label: "Contact Us", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Main Navbar */}
      <div className="px-6 py-4 md:px-12 md:py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10">

        {/* Logo */}
        <a href="/" className="font-serif text-xl font-bold tracking-tighter text-white hover:opacity-70 transition-opacity">
          MINTA CLUB
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden md:block text-xs font-bold uppercase border border-white/30 px-5 py-2.5 rounded-full text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          Get in Touch
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <nav className="flex flex-col px-6 py-6">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-white/90 hover:text-white py-4 border-b border-white/10 last:border-b-0 transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-6 text-center bg-white text-black py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-white/90 transition-colors"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-[#050505] text-[#FDFBF7] mt-10">

      {/* --- CLEAN BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#050505]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">

        {/* Company Badge */}
        <div className="mb-8 flex items-center gap-3 border border-white/10 px-5 py-2 rounded-full">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">Minta Club Pvt Ltd</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-white mb-8">
          Building Tomorrow's<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-emerald-400">Digital Ecosystems</span>
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed mb-12">
          Minta Club Pvt Ltd is a forward-thinking technology company dedicated to creating innovative solutions that empower businesses and communities. We specialize in building scalable platforms that drive growth and deliver exceptional value.
        </p>

      </div>
    </section>
  );
};

const OurVentures = () => {
  const ventures = [
    {
      id: "01",
      name: "Minta Fresh",
      tagline: "Fresh and Hygienic",
      description: "Your trusted online destination for premium uncooked chicken, fish, and meat. We source directly from verified farms and fisheries, ensuring the freshest quality delivered right to your doorstep.",
      features: ["Fresh and Hygienic", "Premium Seafood", "Quality Mutton & Meat", "Same-Day Delivery"],
      // Theme config for Purple #9235D0
      theme: {
        gradient: "from-[#9235D0]/40 via-[#9235D0]/20 to-[#0A0A0A]",
        badge: "border-[#9235D0] text-[#9235D0] bg-[#9235D0]/10",
        text: "text-[#9235D0]",
        dot: "bg-[#9235D0]",
        button: "bg-[#9235D0] hover:bg-[#9235D0]/90"
      },
      logo: "/logo/minta-fresh.png",
      link: "https://mintafresh.com"
    },
    {
      id: "02",
      name: "Minta Restro",
      tagline: "Delicious Food, Delivered Fast",
      description: "Order your favourite meals from the best restaurants near you. From local favourites to popular chains, Minta Restro connects you with hundreds of restaurants offering a wide variety of cuisines.",
      features: ["500+ Restaurant Partners", "Live Order Tracking", "Multiple Cuisines", "Quick Delivery"],
      // Theme config for Blue-500
      theme: {
        gradient: "from-blue-500/40 via-blue-600/20 to-[#0A0A0A]",
        badge: "border-blue-500 text-blue-500 bg-blue-500/10",
        text: "text-blue-500",
        dot: "bg-blue-500",
        button: "bg-blue-500 hover:bg-blue-600"
      },
      logo: "/logo/minta-restro.jpeg",
      link: "https://mintarestro.com"
    }
    // Add more ventures here easily in the future
  ];

  return (
    <section id="ventures" className="py-24 md:py-32 bg-[#FDFBF7]">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12 md:mb-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-4">
          Our Ecosystem
        </span>
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#0A0A0A] mb-6">
          Our Ventures
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
          We build platforms that make everyday life easier. From hygienic to delicious meals,
          our ventures are designed to serve you better.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Scroll Hint - Left Fade */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />

        {/* Scroll Hint - Right Fade */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />

        {/* Scrollable Cards */}
        <div className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-6 scrollbar-hide snap-x snap-mandatory">
          {/* Left Spacer for centering on larger screens */}
          <div className="hidden lg:block shrink-0 w-[calc((100vw-1280px)/2)]" />

          {ventures.map((venture) => (
            <div
              key={venture.id}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[500px] lg:w-[550px] snap-center"
            >
              <div className="relative h-full rounded-3xl overflow-hidden bg-[#0A0A0A] group">

                {/* Logo/Image Section */}
                <div className="relative h-48 md:h-56 w-full">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${venture.theme.gradient}`} />

                  {/* Logo/Image */}
                  <img
                    src={venture.logo}
                    alt={`${venture.name} Logo`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle Overlay to ensure blend */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                  {/* Venture Number Badge */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full border-2 text-xs font-bold backdrop-blur-sm ${venture.theme.badge}`}>
                      {venture.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className={`text-xs font-semibold uppercase tracking-[0.15em] mb-2 ${venture.theme.text}`}>
                    {venture.name}
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 leading-tight">
                    {venture.tagline}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                    {venture.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {venture.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${venture.theme.dot}`}></span>
                        <span className="text-xs text-gray-300 truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer text-white ${venture.theme.button}`}
                    onClick={() => window.open(venture.link, "_blank")}
                  >
                    Explore {venture.name}
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}

          {/* Right Spacer for centering on larger screens */}
          <div className="hidden lg:block flex-shrink-0 w-[calc((100vw-1280px)/2)]" />
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {ventures.map((venture, index) => (
            <div
              key={venture.id}
              className={`w-2 h-2 rounded-full transition-colors ${index === 0 ? 'bg-gray-800' : 'bg-gray-300'
                }`}
            />
          ))}
          <span className="ml-3 text-xs text-gray-500 uppercase tracking-wider">Scroll to explore</span>
        </div>
      </div>

    </section>
  );
};

const MissionVision = () => {
  return (
    <section id="mission" className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#9235D0]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#9235D0] mb-4">
            Who We Are
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Empowering Lives Through Technology
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            At Minta Club, we harness the power of technology and artificial intelligence
            to create solutions that genuinely improve how people live, work, and connect.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* Mission Card */}
          <div className="group relative">
            {/* Card Background with Gradient Border */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-[#9235D0]/50 via-[#9235D0]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-full bg-[#111111] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-[#9235D0]/30 transition-colors duration-500">

              {/* Icon */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9235D0] to-[#9235D0]/60">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
              </div>

              {/* Label */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#9235D0]/10 border border-[#9235D0]/20 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9235D0]">Our Mission</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                Bringing Tomorrow's Possibilities to Today's People
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                We exist to bridge the gap between cutting-edge technology and real human needs.
                By leveraging AI and smart solutions, we build platforms that simplify daily life—delivering
                fresh food to doorsteps, connecting families with trusted services, and making quality
                accessible to everyone, regardless of where they live.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                {["People-First Innovation", "AI-Powered Solutions", "Accessible to Everyone"].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#9235D0]/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#9235D0]" />
                    </span>
                    <span className="text-sm text-gray-300">{point}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative">
            {/* Card Background with Gradient Border */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/50 via-blue-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-full bg-[#111111] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-blue-500/30 transition-colors duration-500">

              {/* Icon */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Label */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Our Vision</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                A Future Where Technology Works for You
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                We see a world where technology quietly empowers every aspect of life—where AI
                anticipates your needs, where fresh meals and groceries arrive effortlessly, and where
                every family has access to conveniences once reserved for a few. Our vision is to be
                the invisible hand that lifts communities into a smarter, more connected future.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                {["Smart Living for All", "Seamless Daily Experiences", "Building a Connected Future"].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                    </span>
                    <span className="text-sm text-gray-300">{point}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Quote */}
        <div className="mt-16 md:mt-24 text-center">
          <blockquote className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-[#9235D0]/20 font-serif">"</div>
            <p className="font-serif text-2xl md:text-3xl text-white/90 italic max-w-3xl mx-auto leading-relaxed">
              Technology should feel like magic—simple, helpful, and always there when you need it.
            </p>
            <footer className="mt-6">
              <span className="text-sm text-gray-500 uppercase tracking-wider">— Minta Club Pvt Ltd</span>
            </footer>
          </blockquote>
        </div>

      </div>
    </section>
  );
};

const WorkingCulture = () => {
  const cultureItems = [
    {
      title: "Innovation First",
      description: "We encourage bold ideas and creative problem-solving. Every voice matters in shaping our future.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
      accent: "from-amber-500 to-orange-500",
      size: "large"
    },
    {
      title: "Collaborative Spirit",
      description: "Together we achieve more. Our teams work across boundaries to deliver exceptional results.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      accent: "from-blue-500 to-cyan-500",
      size: "medium"
    },
    {
      title: "Continuous Growth",
      description: "Learning never stops. We invest in your development and celebrate every milestone.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      accent: "from-emerald-500 to-teal-500",
      size: "medium"
    },
    {
      title: "Work-Life Balance",
      description: "We believe happy people do their best work. Flexible hours, remote options, and time to recharge.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      accent: "from-violet-500 to-purple-500",
      size: "medium"
    },
    {
      title: "Meaningful Impact",
      description: "Your work touches real lives. Every line of code, every decision helps millions of families.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      accent: "from-rose-500 to-pink-500",
      size: "medium"
    },
    {
      title: "Diversity & Inclusion",
      description: "Different perspectives make us stronger. We celebrate what makes each person unique.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      accent: "from-[#9235D0] to-indigo-500",
      size: "large"
    }
  ];

  return (
    <section id="culture" className="py-24 md:py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#9235D0] mb-4">
            Life at Minta Club
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#0A0A0A] mb-6">
            Our Working Culture
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            We're building more than products—we're building a place where talented people
            thrive, grow, and do the best work of their careers.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cultureItems.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 ${item.size === 'large' ? 'lg:col-span-1 lg:row-span-1' : ''
                }`}
            >
              {/* Gradient Accent Line */}
              <div className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${item.accent} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl text-[#0A0A0A] mb-3 group-hover:text-[#9235D0] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {item.description}
              </p>

              {/* Hover Arrow */}
              {/* <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight className="w-5 h-5 text-[#9235D0]" />
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const Footer = () => (
  <footer id="contact" className="bg-[#0A0A0A] text-[#FDFBF7] pt-24 sm:pt-40 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12 relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="mb-16 sm:mb-20">
        <h2 className="font-serif text-[12vw] leading-[0.8] tracking-tighter mb-4 sm:mb-8">
          LET'S<br />BUILD.
        </h2>
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center">
          <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm tracking-widest hover:bg-indigo-500 hover:text-white transition-colors duration-300">
            <a
              href="mailto:mintaclub@gmail.com"
              className="hover:text-white transition-colors"
            >
              CONTACT US
            </a>
          </button>
          <span className="text-sm opacity-50 max-w-xs">
            Interested in partnership or investment? Reach out to our strategy team.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/10 text-xs font-bold uppercase tracking-widest opacity-60">
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
        <div className="col-span-1 sm:col-span-2 md:col-span-1 text-left sm:text-center md:text-right">
          <p className="normal-case font-serif text-xl opacity-100">© 2025 Minta club pvt ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#FDFBF7]">
      <Header />
      <Hero />
      <OurVentures />
      <MissionVision />
      <WorkingCulture />
      {/* <ParallaxImageSection /> */}
      {/* <FeaturesList /> */}
      <Footer />
    </main>
  );
}