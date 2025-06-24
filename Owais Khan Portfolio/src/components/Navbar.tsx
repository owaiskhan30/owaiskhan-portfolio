import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="w-full sticky top-0 z-50 px-2 md:px-0">
      <style>{`
        @keyframes navbar-slide-down {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-navbar-slide-down {
          animation: navbar-slide-down 0.5s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
      <div
        className={`border border-purple-500/30 bg-gradient-to-r from-purple-900/60 via-slate-900/60 to-purple-800/60 backdrop-blur-xl shadow-xl transition-all duration-500 w-full ${
          isSticky
            ? 'shadow-2xl bg-gradient-to-r from-purple-900/90 via-slate-900/90 to-purple-800/90 animate-navbar-slide-down'
            : ''
        }`}
        style={{
          borderRadius: '0',
          border: '1px solid rgba(168, 85, 247, 0.3)',
        }}
      >
        <div className="flex justify-between items-center h-16 px-4 max-w-7xl mx-auto">
          <a href="#" className="text-2xl font-heading font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
            Owais Khan
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'portfolio', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative font-subtitle text-white/90 hover:text-purple-300 transition-colors duration-300 px-2 py-1 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden w-full absolute left-0 top-20 rounded-b-2xl border-t border-purple-500/20 bg-gradient-to-r from-purple-900/95 via-slate-900/95 to-purple-800/95 backdrop-blur-xl shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-4 px-6 py-6">
              {['home', 'about', 'skills', 'portfolio', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="font-subtitle text-white/90 hover:text-purple-300 transition-colors duration-300 text-lg py-1"
                  onClick={toggleMenu}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 