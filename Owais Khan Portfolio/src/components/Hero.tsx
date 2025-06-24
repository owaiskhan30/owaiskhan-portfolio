import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import bannerImage from '../assets/banner.png';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced timeline with more sophisticated animations
      const tl = gsap.timeline({
        defaults: { 
          duration: 1.2,
          ease: "power3.out"
        }
      });

      // Set initial states with more dramatic effects
      gsap.set(['.hero-title', '.hero-subtitle', '.hero-description'], {
        opacity: 0,
        y: 80,
        skewY: 5
      });
      gsap.set('.social-icon', { 
        opacity: 0, 
        y: 30,
        scale: 0.5,
        rotation: -15
      });
      gsap.set('.bg-element', { 
        scale: 0, 
        opacity: 0,
        rotation: 180
      });
      gsap.set('.cta-button', { 
        opacity: 0, 
        y: 60, 
        scale: 0.3,
        rotationX: 90
      });
      gsap.set('.hero-image', { 
        opacity: 0, 
        scale: 0.5,
        rotationY: -30,
        filter: "blur(20px)"
      });
      gsap.set('.floating-card', {
        opacity: 0,
        y: 100,
        rotation: 15
      });

      // Animate background elements with rotation
      tl.to('.bg-element', {
        scale: 1,
        opacity: 0.3,
        rotation: 0,
        duration: 2,
        stagger: 0.3,
        ease: "power2.out"
      })
      // Animate hero image with dramatic entrance
      .to('.hero-image', {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out"
      }, "-=1.5")
      // Animate floating cards
      .to('.floating-card', {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=1")
      // Animate title with text reveal effect
      .to('.hero-title', {
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: 1.5,
        ease: "power4.out"
      }, "-=0.8")
      // Animate subheadings with stagger
      .to(['.hero-subtitle', '.hero-description'], {
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: 1,
        stagger: 0.3
      }, "-=1")
      // Animate social icons with bounce and rotation
      .to('.social-icon', {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.6")
      // Animate CTA button with 3D effect
      .to('.cta-button', {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1,
        ease: "back.out(2, 0.5)"
      }, "-=0.4");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 mt-8">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="bg-element absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="bg-element absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="bg-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Cards */}
      <div className="absolute top-20 left-20 floating-card">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
          <div className="text-white text-sm font-medium">WordPress Expert</div>
        </div>
      </div>
      <div className="absolute bottom-20 right-20 floating-card">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
          <div className="text-white text-sm font-medium">Frontend Developer</div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-auto max-w-7xl">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="hero-title text-4xl lg:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
                WordPress
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Frontend Developer
                </span>
              </h1>
              <p className="hero-subtitle text-xl lg:text-2xl text-gray-300 mb-6 font-light" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                Crafting beautiful and responsive
                <span className="text-purple-300 font-semibold"> WordPress experiences</span>
              </p>
              <p className="hero-description text-lg lg:text-xl text-purple-300/80 mb-10 leading-relaxed" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                Transforming ideas into elegant digital solutions with modern design and cutting-edge technology
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6 mb-12">
              <a
                href="https://github.com/owaiskhan30"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/owaiskhan-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </a>
              <a
                href="https://wordpress.org/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-110">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5zM3.8 12c0 2.7 1.6 5.1 3.9 6.2l-3.3-9c-.4.9-.6 1.8-.6 2.8zm8.2 6.9c.9 0 1.8-.1 2.6-.4l-.1-.2-2.5-6.8-2.4 7c.7.3 1.5.4 2.4.4zm1-10.1c.5 0 1-.1 1-.1.5-.1.4-.8-.1-.8 0 0-1.4.1-2.3.1-.9 0-2.3-.1-2.3-.1-.5 0-.5.8-.1.8 0 0 .4.1.9.1l1.3 3.6L8 18.7l-3.8-11.3c.5 0 1-.1 1-.1.5-.1.4-.8-.1-.8 0 0-1.4.1-2.3.1.2-.3.4-.5.6-.8 1.8-2.7 4.9-4.5 8.4-4.5 2.6 0 5 1 6.8 2.6-.1 0-.1 0-.2 0-1 0-1.7.9-1.7 1.8 0 .8.5 1.5 1 2.4.4.7.8 1.6.8 2.9 0 .9-.3 1.9-.8 3.2l-1 3.4-3.7-11.1zM12 21.9c-1.6 0-3.2-.4-4.5-1.1l4.8-13.9 4.9 13.4c0 .1.1.1.1.2-1.6.9-3.4 1.4-5.3 1.4z" />
                  </svg>
                </div>
              </a>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="cta-button group relative inline-flex items-center text-lg px-10 py-5 font-bold rounded-2xl overflow-hidden transition-all duration-300 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 shadow-lg hover:shadow-pink-400/60 hover:scale-110 hover:-rotate-3 focus:outline-none"
                style={{ boxShadow: '0 4px 24px 0 rgba(168, 85, 247, 0.15)' }}
              >
                <span className="relative text-white z-10 flex items-center">
                  Get in Touch
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="hero-image relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <img
                  src={bannerImage}
                  alt="WordPress Developer"
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                />
              </div>
              {/* Enhanced decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full filter blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 