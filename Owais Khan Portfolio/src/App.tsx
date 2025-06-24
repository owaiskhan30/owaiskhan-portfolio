import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navbar />
      </div>

      <div className="w-full"> {/* Removed pt-16 for sticky navbar */}
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        {/* <section className="w-full min-h-screen">
        </section>

        <section className="w-full bg-gray-900">
        </section>

        <section className="w-full bg-gray-800">
        </section>

        <section className="w-full bg-gray-900">
        </section>

        <section className="w-full bg-gray-800">
        </section> */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
