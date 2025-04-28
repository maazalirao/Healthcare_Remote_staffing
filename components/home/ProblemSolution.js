// ProblemSolution component displaying common problems and our solution
import { useEffect, useState, useRef } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import Card, { CardHeader, CardTitle, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProblemSolution() {
  const [activeTab, setActiveTab] = useState('problems');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('problem-solution-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const problems = [
    {
      id: 1,
      title: 'High Turnover Rates',
      description: 'Healthcare organizations struggle with staffing instability, leading to increased costs and reduced care quality.',
      icon: <XCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" aria-hidden="true" />
    },
    {
      id: 2,
      title: 'Staff Acquisition Challenges',
      description: 'Finding qualified remote healthcare professionals is time-consuming and requires specialized recruitment expertise.',
      icon: <XCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" aria-hidden="true" />
    },
    {
      id: 3,
      title: 'Complex Compliance Requirements',
      description: 'Navigating healthcare regulations, credentialing, and compliance while hiring remote staff adds significant burden.',
      icon: <XCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" aria-hidden="true" />
    }
  ];

  const solutions = [
    {
      id: 1,
      title: 'Pre-Screened Talent Pool',
      description: 'Access our extensive database of verified healthcare professionals, pre-screened for skills and remote work compatibility.',
      icon: <CheckCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" aria-hidden="true" />
    },
    {
      id: 2,
      title: 'Compliance Management',
      description: 'We handle credential verification, licensing, and ongoing compliance monitoring for all healthcare professionals.',
      icon: <CheckCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" aria-hidden="true" />
    },
    {
      id: 3,
      title: 'Specialized Matching',
      description: "Our proprietary algorithm ensures the perfect match between your requirements and candidates' skills and experience.",
      icon: <CheckCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" aria-hidden="true" />
    }
  ];

  return (
    <section 
      id="problem-solution-section" 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -bottom-16 -right-16 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-200 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute top-32 -left-16 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-indigo-200 rounded-full animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-purple-200 rounded-full animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-teal-200 rounded-full animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100 animate-fadeInUp' : 'translate-y-10 opacity-0'}`}>
          <Badge variant="primary" className="mb-3 sm:mb-4 animate-pulse text-xs sm:text-sm">Healthcare Staffing Challenges</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-3 sm:mb-4">
            Transforming Healthcare Staffing Challenges
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
            Healthcare organizations face unique challenges with remote staffing. Discover how our solutions address these pain points.
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex justify-center mt-8 sm:mt-10 md:mt-12 mb-6 sm:mb-8 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex p-1 rounded-full bg-gray-100 shadow-inner">
            <button
              onClick={() => setActiveTab('problems')}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === 'problems' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Challenges
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === 'solutions' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Our Solutions
            </button>
          </div>
        </div>

        {/* Problems grid */}
        <div className={`mt-4 sm:mt-6 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 transition-all duration-500 ease-in-out transform ${activeTab === 'problems' ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 hidden'}`}>
          {problems.map((problem, index) => (
            <Card 
              key={problem.id} 
              hover
              hoverLift
              shadow="lg"
              rounded="xl"
              border
              glassMorphism
              className={`transition-all duration-1000 ${isVisible ? `animate-fadeInUp stagger-item-${index + 1}` : 'opacity-0'}`}
            >
              <CardHeader className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 rounded-full bg-red-100 shadow-md transition-all duration-300 hover:shadow-lg hover:bg-red-200 transform hover:scale-105 flex-shrink-0">
                  {problem.icon}
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl">{problem.title}</CardTitle>
                  <Badge variant="danger" size="sm" className="mt-1">Challenge</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solutions grid */}
        <div className={`mt-4 sm:mt-6 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 transition-all duration-500 ease-in-out transform ${activeTab === 'solutions' ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 hidden'}`}>
          {solutions.map((solution, index) => (
            <Card 
              key={solution.id} 
              hover
              hoverLift
              shadow="lg"
              rounded="xl"
              border
              glassMorphism
              className={`transition-all duration-1000 ${isVisible ? `animate-fadeInUp stagger-item-${index + 1}` : 'opacity-0'}`}
            >
              <CardHeader className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 rounded-full bg-green-100 shadow-md transition-all duration-300 hover:shadow-lg hover:bg-green-200 transform hover:scale-105 flex-shrink-0">
                  {solution.icon}
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl">{solution.title}</CardTitle>
                  <Badge variant="success" size="sm" className="mt-1">Solution</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-10 sm:mt-12 md:mt-16 text-center transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100 animate-fadeInUp' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-3 sm:mb-4">Ready to transform your healthcare staffing approach?</h3>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Our comprehensive solution addresses the complex challenges of remote healthcare staffing, 
            giving you access to qualified professionals while reducing administrative burden.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Button href="/intake" size="lg" rounded withAnimation className="animate-pulse hover:animate-none w-full sm:w-auto">
              Start Staffing Now
            </Button>
            <Button href="/services" variant="outline" size="lg" rounded withAnimation className="w-full sm:w-auto mt-3 sm:mt-0">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 