// ProblemSolution component displaying common problems and our solution
import { useEffect, useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import Card, { CardHeader, CardTitle, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProblemSolution() {
  const [activeTab, setActiveTab] = useState('problems');
  const [isVisible, setIsVisible] = useState(false);

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
      icon: <XCircleIcon className="h-8 w-8 text-red-500" aria-hidden="true" />
    },
    {
      id: 2,
      title: 'Staff Acquisition Challenges',
      description: 'Finding qualified remote healthcare professionals is time-consuming and requires specialized recruitment expertise.',
      icon: <XCircleIcon className="h-8 w-8 text-red-500" aria-hidden="true" />
    },
    {
      id: 3,
      title: 'Complex Compliance Requirements',
      description: 'Navigating healthcare regulations, credentialing, and compliance while hiring remote staff adds significant burden.',
      icon: <XCircleIcon className="h-8 w-8 text-red-500" aria-hidden="true" />
    }
  ];

  const solutions = [
    {
      id: 1,
      title: 'Pre-Screened Talent Pool',
      description: 'Access our extensive database of verified healthcare professionals, pre-screened for skills and remote work compatibility.',
      icon: <CheckCircleIcon className="h-8 w-8 text-green-500" aria-hidden="true" />
    },
    {
      id: 2,
      title: 'Compliance Management',
      description: 'We handle credential verification, licensing, and ongoing compliance monitoring for all healthcare professionals.',
      icon: <CheckCircleIcon className="h-8 w-8 text-green-500" aria-hidden="true" />
    },
    {
      id: 3,
      title: 'Specialized Matching',
      description: 'Our proprietary algorithm ensures the perfect match between your requirements and candidates' skills and experience.',
      icon: <CheckCircleIcon className="h-8 w-8 text-green-500" aria-hidden="true" />
    }
  ];

  return (
    <section 
      id="problem-solution-section" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-200 rounded-full"></div>
        <div className="absolute top-32 -left-16 w-64 h-64 bg-indigo-200 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Badge variant="primary" className="mb-4">Healthcare Staffing Challenges</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent sm:text-4xl mb-4">
            Transforming Healthcare Staffing Challenges
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Healthcare organizations face unique challenges with remote staffing. Discover how our solutions address these pain points.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-12 mb-8">
          <div className="inline-flex p-1 rounded-full bg-gray-100">
            <button
              onClick={() => setActiveTab('problems')}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                activeTab === 'problems' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Challenges
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
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
        <div className={`mt-6 grid gap-8 md:grid-cols-3 transition-all duration-500 ${activeTab === 'problems' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          {problems.map((problem, index) => (
            <Card 
              key={problem.id} 
              hover
              hoverLift
              className={`transition-all duration-1000 delay-${index * 200} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <CardHeader className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-red-100">{problem.icon}</div>
                <div>
                  <CardTitle>{problem.title}</CardTitle>
                  <Badge variant="danger" size="sm" className="mt-1">Challenge</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solutions grid */}
        <div className={`mt-6 grid gap-8 md:grid-cols-3 transition-all duration-500 ${activeTab === 'solutions' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          {solutions.map((solution, index) => (
            <Card 
              key={solution.id} 
              hover
              hoverLift
              className={`transition-all duration-1000 delay-${index * 200} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <CardHeader className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-green-100">{solution.icon}</div>
                <div>
                  <CardTitle>{solution.title}</CardTitle>
                  <Badge variant="success" size="sm" className="mt-1">Solution</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Ready to transform your healthcare staffing approach?</h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Our comprehensive solution addresses the complex challenges of remote healthcare staffing, 
            giving you access to qualified professionals while reducing administrative burden.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/intake" size="lg" rounded withAnimation>
              Start Staffing Now
            </Button>
            <Button href="/services" variant="outline" size="lg" rounded withAnimation>
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 