import { FaRegSmile, FaRegClock, FaCheckCircle, FaHeadset } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: <FaRegClock className="text-purple-400 text-3xl mb-2" />,
    value: '5+ Years',
    label: 'Professional Experience',
  },
  {
    icon: <FaCheckCircle className="text-pink-400 text-3xl mb-2" />,
    value: '50+',
    label: 'Projects Completed',
  },
  {
    icon: <FaRegSmile className="text-blue-400 text-3xl mb-2" />,
    value: '100%',
    label: 'Client Satisfaction',
  },
  {
    icon: <FaHeadset className="text-green-400 text-3xl mb-2" />,
    value: '24/7',
    label: 'Support',
  },
];

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.about-title', { opacity: 0, y: 60 });
      gsap.set('.about-text', { opacity: 0, y: 40 });
      gsap.set('.about-stat', { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
      });
      tl.to('.about-title', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
        .to('.about-text', { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }, '-=0.7')
        .to('.about-stat', { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.7)' }, '-=0.6');
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-24 relative overflow-hidden via-purple-900"
    >
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div>
            <h2 className="about-title text-4xl md:text-5xl font-heading font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
              About Me
            </h2>
            <p className="about-text text-lg md:text-xl text-gray-300 mb-6 font-subtitle">
              Hello! I'm a passionate <span className="text-purple-400 font-semibold">WordPress Frontend Developer</span> with extensive experience in creating stunning, user-friendly websites. I specialize in transforming design concepts into fully functional WordPress themes and plugins.
            </p>
            <p className="about-text text-lg md:text-xl text-gray-300 font-subtitle">
              With a strong foundation in modern web technologies and WordPress development, I bring creativity and technical expertise to every project I undertake.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="about-stat group bg-white/10 backdrop-blur-lg border-2 border-transparent hover:border-purple-400/40 rounded-2xl p-8 flex flex-col items-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/30"
              >
                {stat.icon}
                <h3 className="text-3xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 group-hover:from-pink-400 group-hover:to-purple-400">
                  {stat.value}
                </h3>
                <p className="text-base text-gray-200 font-subtitle text-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 