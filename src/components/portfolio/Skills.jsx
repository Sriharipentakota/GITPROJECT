import { categories, skills } from '../../utils/utils';

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Frontend Skills & Expertise</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Technologies and tools I use to create amazing frontend experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl mb-2">{category.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skillName) => {
                  const skill = skills.find(s => s.name === skillName);
                  return skill ? (
                    <div key={skillName}>
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                        <div
                          className={`h-1.5 sm:h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">All Frontend Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs sm:text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                    <div
                      className={`h-1.5 sm:h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Frontend Tools */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 rounded-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md">
                <span className="text-xl sm:text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Vite</h4>
              <p className="text-xs sm:text-sm text-gray-600">Build Tool</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md">
                <span className="text-xl sm:text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Responsive</h4>
              <p className="text-xs sm:text-sm text-gray-600">Mobile First</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md">
                <span className="text-xl sm:text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Performance</h4>
              <p className="text-xs sm:text-sm text-gray-600">Optimization</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md">
                <span className="text-xl sm:text-2xl">♿</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Accessibility</h4>
              <p className="text-xs sm:text-sm text-gray-600">A11y Standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;