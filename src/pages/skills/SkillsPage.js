import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const SkillsPage = () => {
  const { skills, dispatch } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [sortBy, setSortBy] = useState('rating');
  const [filteredSkills, setFilteredSkills] = useState([]);

  const categories = [
    { id: 'all', name: 'All Categories', icon: '🔍' },
    { id: 'programming', name: 'Programming', icon: '💻' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'marketing', name: 'Marketing', icon: '📈' },
    { id: 'language', name: 'Languages', icon: '🗣️' },
    { id: 'music', name: 'Music', icon: '🎵' },
    { id: 'fitness', name: 'Fitness', icon: '💪' },
    { id: 'cooking', name: 'Cooking', icon: '👨‍🍳' }
  ];

  // Mock skills data
  useEffect(() => {
    const mockSkills = [
      {
        id: '1',
        name: 'React Development',
        category: 'programming',
        description: 'Learn modern React development with hooks, context, and best practices',
        instructor: {
          name: 'John Doe',
          avatar: 'https://via.placeholder.com/150/6366f1/ffffff?text=JD',
          rating: 4.9,
          totalStudents: 156
        },
        hourlyRate: 75,
        duration: 60,
        tags: ['React', 'JavaScript', 'Frontend', 'Hooks'],
        level: 'Intermediate',
        thumbnail: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=React'
      },
      {
        id: '2',
        name: 'UI/UX Design',
        category: 'design',
        description: 'Master the fundamentals of user interface and user experience design',
        instructor: {
          name: 'Sarah Johnson',
          avatar: 'https://via.placeholder.com/150/ef4444/ffffff?text=SJ',
          rating: 4.8,
          totalStudents: 89
        },
        hourlyRate: 60,
        duration: 45,
        tags: ['Figma', 'Design Systems', 'Prototyping'],
        level: 'Beginner',
        thumbnail: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=UI/UX'
      },
      {
        id: '3',
        name: 'Python for Data Science',
        category: 'programming',
        description: 'Learn Python programming with focus on data analysis and visualization',
        instructor: {
          name: 'Mike Chen',
          avatar: 'https://via.placeholder.com/150/10b981/ffffff?text=MC',
          rating: 4.7,
          totalStudents: 203
        },
        hourlyRate: 80,
        duration: 90,
        tags: ['Python', 'Data Science', 'Pandas', 'NumPy'],
        level: 'Intermediate',
        thumbnail: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Python'
      },
      {
        id: '4',
        name: 'Digital Marketing Strategy',
        category: 'marketing',
        description: 'Comprehensive guide to digital marketing and growth strategies',
        instructor: {
          name: 'Emma Wilson',
          avatar: 'https://via.placeholder.com/150/f59e0b/ffffff?text=EW',
          rating: 4.6,
          totalStudents: 127
        },
        hourlyRate: 55,
        duration: 60,
        tags: ['SEO', 'Social Media', 'Analytics', 'Content Marketing'],
        level: 'Beginner',
        thumbnail: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=Marketing'
      },
      {
        id: '5',
        name: 'Spanish Conversation',
        category: 'language',
        description: 'Improve your Spanish speaking skills through engaging conversations',
        instructor: {
          name: 'Carlos Rodriguez',
          avatar: 'https://via.placeholder.com/150/8b5cf6/ffffff?text=CR',
          rating: 4.9,
          totalStudents: 94
        },
        hourlyRate: 40,
        duration: 30,
        tags: ['Spanish', 'Conversation', 'Grammar', 'Pronunciation'],
        level: 'All Levels',
        thumbnail: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Spanish'
      },
      {
        id: '6',
        name: 'Guitar Basics',
        category: 'music',
        description: 'Learn to play guitar from scratch with proper technique and theory',
        instructor: {
          name: 'Alex Thompson',
          avatar: 'https://via.placeholder.com/150/06b6d4/ffffff?text=AT',
          rating: 4.8,
          totalStudents: 78
        },
        hourlyRate: 45,
        duration: 45,
        tags: ['Guitar', 'Music Theory', 'Chords', 'Strumming'],
        level: 'Beginner',
        thumbnail: 'https://via.placeholder.com/300x200/06b6d4/ffffff?text=Guitar'
      }
    ];

    dispatch({ type: 'SET_SKILLS', payload: mockSkills });
  }, [dispatch]);

  // Filter and sort skills
  useEffect(() => {
    let filtered = skills.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           skill.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      
      const matchesPrice = skill.hourlyRate >= priceRange.min && skill.hourlyRate <= priceRange.max;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort skills
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.instructor.rating - a.instructor.rating;
        case 'price-low':
          return a.hourlyRate - b.hourlyRate;
        case 'price-high':
          return b.hourlyRate - a.hourlyRate;
        case 'students':
          return b.instructor.totalStudents - a.instructor.totalStudents;
        default:
          return 0;
      }
    });

    setFilteredSkills(filtered);
  }, [skills, searchTerm, selectedCategory, priceRange, sortBy]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">⭐</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">⭐</span>);
    }

    return stars;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Skills & Find Expert Tutors
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse our marketplace of micro-learning opportunities. Find the perfect tutor for your learning goals.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Search */}
          <div className="lg:col-span-2">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Skills
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by skill name, description, or tags..."
                className="input-field pl-10"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Sort */}
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field"
            >
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="students">Most Students</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range: {formatCurrency(priceRange.min)} - {formatCurrency(priceRange.max)}
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex flex-col items-center p-4 rounded-lg border transition-colors ${
                selectedCategory === category.id
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="text-sm font-medium text-center">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            {filteredSkills.length} Skills Found
          </h3>
          <div className="text-sm text-gray-500">
            Showing {filteredSkills.length} of {skills.length} skills
          </div>
        </div>

        {filteredSkills.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No skills found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or browse different categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <Link
                key={skill.id}
                to={`/skills/${skill.id}`}
                className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={skill.thumbnail}
                    alt={skill.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {skill.level}
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      {formatCurrency(skill.hourlyRate)}/hr
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {skill.description}
                  </p>

                  <div className="flex items-center mb-4">
                    <img
                      src={skill.instructor.avatar}
                      alt={skill.instructor.name}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{skill.instructor.name}</p>
                      <div className="flex items-center">
                        {renderStarRating(skill.instructor.rating)}
                        <span className="text-sm text-gray-500 ml-1">
                          ({skill.instructor.totalStudents} students)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {skill.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                    {skill.tags.length > 3 && (
                      <span className="text-xs text-gray-500">+{skill.tags.length - 3} more</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{skill.duration} minutes</span>
                    <span>⭐ {skill.instructor.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsPage;