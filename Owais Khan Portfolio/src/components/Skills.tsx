const skills = [
  { name: 'WordPress Development', level: 95 },
  { name: 'HTML5 & CSS3', level: 90 },
  { name: 'JavaScript / jQuery', level: 85 },
  { name: 'PHP', level: 80 },
  { name: 'Theme Development', level: 90 },
  { name: 'Plugin Development', level: 85 },
  { name: 'Responsive Design', level: 95 },
  { name: 'WooCommerce', level: 85 },
  { name: 'SEO Optimization', level: 80 },
  { name: 'Performance Optimization', level: 85 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 via-purple-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I continuously update my skills to stay current with the latest WordPress
            and web development trends, ensuring I deliver modern and efficient solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills; 