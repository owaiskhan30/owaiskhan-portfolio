import { useState } from 'react';

const projects = [
  {
    title: 'E-commerce Website',
    category: 'WooCommerce',
    description: 'Custom WooCommerce theme with advanced product filtering and checkout optimization.',
    image: '/portfolio/ecommerce.jpg',
  },
  {
    title: 'Corporate Website',
    category: 'WordPress Theme',
    description: 'Modern corporate website with custom post types and advanced animations.',
    image: '/portfolio/corporate.jpg',
  },
  {
    title: 'Blog Platform',
    category: 'WordPress Development',
    description: 'Custom WordPress theme with advanced blogging features and newsletter integration.',
    image: '/portfolio/blog.jpg',
  },
  {
    title: 'Restaurant Website',
    category: 'WordPress Theme',
    description: 'Responsive restaurant website with online reservation system and menu management.',
    image: '/portfolio/restaurant.jpg',
  },
  {
    title: 'Portfolio Plugin',
    category: 'Plugin Development',
    description: 'WordPress plugin for creating and managing portfolio items with custom fields.',
    image: '/portfolio/plugin.jpg',
  },
  {
    title: 'Real Estate Platform',
    category: 'WordPress Development',
    description: 'Custom real estate platform with property listings and agent profiles.',
    image: '/portfolio/realestate.jpg',
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section
      id="portfolio"
      className="py-20 via-purple-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Portfolio
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-12 bg-gray-700">
                  {/* Replace with actual images */}
                  <div className="w-full h-full bg-purple-900/30" />
                </div>
                <div className="absolute inset-0 bg-purple-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-6 py-2 bg-white text-purple-600 rounded-full font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-purple-400">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 