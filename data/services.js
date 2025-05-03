import { 
  ComputerDesktopIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  ChartPieIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

// Icon mapping to be used on the client side
export const iconMapping = {
  ChartBarIcon,
  ComputerDesktopIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  ChartPieIcon,
  CalendarIcon,
};

const services = [
  {
    id: 1,
    title: 'Professional Services',
    description: 'Access skilled professionals in business analysis, marketing, finance, project management, and specialized industry roles.',
    iconName: 'ChartBarIcon',
    slug: 'professional-services',
    specializations: ['Business Analysts', 'Marketing Specialists', 'Financial Advisors', 'Project Managers', 'Industry Consultants'],
    caseStudy: 'Helped a Fortune 500 company reduce operational costs by 23% through strategic staffing solutions.',
    fullDescription: 'Our Professional Services staffing solutions connect your organization with experienced business professionals who deliver immediate value. From strategic planning to operational execution, our carefully vetted professionals bring extensive industry knowledge and proven expertise to help your organization achieve its objectives.',
    benefits: [
      'Access to specialized skills without long-term commitments',
      'Flexible scaling of your professional team as needs change',
      'Reduced recruitment costs and faster time-to-productivity',
      'Industry-specific expertise tailored to your organization',
      'Seamless integration with your existing workflows'
    ],
    process: [
      { title: 'Requirements Analysis', description: 'We conduct a thorough assessment of your business needs, team structure, and objectives.' },
      { title: 'Talent Matching', description: 'Our specialized recruiters identify professionals with the exact skill sets your project requires.' },
      { title: 'Verification & Selection', description: 'Candidates undergo our 6-point verification process including skills assessment and reference checks.' },
      { title: 'Seamless Onboarding', description: 'We provide comprehensive onboarding to ensure a smooth transition into your organization.' }
    ],
    results: [
      { metric: '35%', description: 'Average reduction in time-to-hire compared to traditional recruitment' },
      { metric: '23%', description: 'Typical cost savings for organizations using our professional staffing services' },
      { metric: '94%', description: 'Client satisfaction rate with our professional placements' }
    ],
    testimonials: [
      {
        quote: "The business analyst Clearview staffed for our digital transformation project brought invaluable expertise that helped us avoid costly mistakes. The ROI was evident within the first month.",
        author: "Jennifer Keyes",
        title: "VP of Operations",
        company: "Global Manufacturing Inc."
      }
    ],
    faq: [
      {
        question: "What types of professional roles do you staff?",
        answer: "We place a wide range of professional roles including business analysts, project managers, marketing specialists, financial advisors, operations managers, HR professionals, and industry-specific consultants."
      },
      {
        question: "What is the typical timeframe for placing a professional role?",
        answer: "For most professional positions, we can present qualified candidates within 1-2 weeks. The entire process from initial consultation to having the professional start typically takes 2-4 weeks, depending on role complexity."
      },
      {
        question: "How do you ensure professionals have the right qualifications?",
        answer: "Our rigorous verification process includes skills assessments, credential verification, reference checks, background screening, and multiple rounds of interviews to ensure candidates have both the technical skills and soft skills required for success."
      }
    ]
  },
  {
    id: 2,
    title: 'Technical Talent',
    description: 'Build your technical team with experienced developers, engineers, IT specialists, and cybersecurity professionals.',
    iconName: 'ComputerDesktopIcon',
    slug: 'technical-talent',
    specializations: ['Software Developers', 'DevOps Engineers', 'IT System Administrators', 'Cybersecurity Experts', 'QA Specialists'],
    caseStudy: 'Assembled a remote development team for a healthcare startup, launching their product 2 months ahead of schedule.',
    fullDescription: 'Our Technical Talent staffing solutions provide your organization with highly skilled technology professionals who can tackle your most challenging projects. Whether you need software developers, engineers, IT specialists, or cybersecurity experts, we connect you with verified technical talent to drive your technology initiatives forward.',
    benefits: [
      'Access to specialized technical skills that are difficult to find',
      'Flexible scaling of your technical team for project-based needs',
      'Reduced time-to-market for technology products and services',
      'Cost-effective alternative to traditional hiring for technical roles',
      'Vetted professionals with proven experience in your technology stack'
    ],
    process: [
      { title: 'Technical Requirements Gathering', description: 'We document your technical needs, including specific programming languages, frameworks, and technological expertise.' },
      { title: 'Specialized Tech Recruiting', description: 'Our technical recruiters identify candidates with verified experience in your required technologies.' },
      { title: 'Technical Assessment', description: 'Candidates complete technical assessments, code challenges, and architecture reviews relevant to your project.' },
      { title: 'Integration Planning', description: 'We develop a comprehensive onboarding plan to integrate the technical team members into your development workflow.' }
    ],
    results: [
      { metric: '41%', description: 'Average reduction in development lifecycle when using our technical talent' },
      { metric: '28%', description: 'Typical cost savings compared to traditional technical recruitment' },
      { metric: '96%', description: 'Project completion success rate with our technical placements' }
    ],
    testimonials: [
      {
        quote: "The development team Clearview assembled helped us launch our healthcare platform significantly ahead of schedule. Their technical expertise and collaborative approach made them feel like part of our core team from day one.",
        author: "Dr. Michael Patel",
        title: "CTO",
        company: "HealthTech Innovations"
      }
    ],
    faq: [
      {
        question: "What technical skills and roles can you provide?",
        answer: "We staff a wide range of technical roles including full-stack developers, front-end and back-end specialists, DevOps engineers, cloud architects, database administrators, IT support specialists, network engineers, cybersecurity experts, and QA professionals across various technology stacks and platforms."
      },
      {
        question: "How do you verify technical skills?",
        answer: "Our technical verification process includes skill-specific assessments, code challenges, technical interviews with industry experts, portfolio reviews, and evaluation of past project work to ensure candidates have the precise technical capabilities your project requires."
      },
      {
        question: "Can you assemble entire development teams?",
        answer: "Yes, we specialize in building complete, cohesive technical teams that can work together effectively. We can provide individual contributors or assembled teams with complementary skills, including project management and technical leadership."
      }
    ]
  },
  {
    id: 3,
    title: 'Administrative Support',
    description: 'Streamline operations with virtual assistants, customer support, data entry specialists, and administrative coordinators.',
    iconName: 'ClipboardDocumentCheckIcon',
    slug: 'administrative-support',
    specializations: ['Virtual Executive Assistants', 'Customer Support Representatives', 'Data Entry Specialists', 'Administrative Coordinators', 'Office Managers'],
    caseStudy: 'Provided virtual administrative support that increased executive productivity by 35% for a growing financial services firm.',
    fullDescription: 'Our Administrative Support staffing solutions provide reliable, efficient professionals who keep your operations running smoothly. From executive assistants and customer support to data entry and office management, our administrative professionals are carefully selected to match your organizational culture and specific requirements.',
    benefits: [
      'Increase executive productivity with dedicated administrative support',
      'Scale customer service operations quickly and efficiently',
      'Reduce operational bottlenecks with specialized administrative professionals',
      'Lower overhead costs by utilizing remote administrative staff',
      'Maintain business continuity with reliable support personnel'
    ],
    process: [
      { title: 'Administrative Needs Assessment', description: 'We analyze your administrative workflows, communication preferences, and organizational structure.' },
      { title: 'Skills & Personality Matching', description: 'Our recruiters identify candidates with both the technical skills and communication style that fits your team.' },
      { title: 'Comprehensive Screening', description: 'Candidates undergo administrative assessments, language proficiency tests, and detailed reference verification.' },
      { title: 'Integration & Training', description: 'We develop customized onboarding plans to quickly integrate administrative staff into your workflows.' }
    ],
    results: [
      { metric: '35%', description: 'Average increase in executive productivity with dedicated administrative support' },
      { metric: '48%', description: 'Typical reduction in administrative processing times' },
      { metric: '92%', description: 'Client satisfaction rate with our administrative placements' }
    ],
    testimonials: [
      {
        quote: "The virtual assistants from Clearview transformed how our executive team operates. Their professionalism, attention to detail, and proactive approach gave us back valuable hours each week to focus on strategic priorities.",
        author: "Robert Chambers",
        title: "CEO",
        company: "Meridian Financial Services"
      }
    ],
    faq: [
      {
        question: "What types of administrative roles do you provide?",
        answer: "We place a wide range of administrative roles including executive assistants, virtual assistants, customer service representatives, data entry specialists, office managers, administrative coordinators, and specialized roles like medical or legal administrative support."
      },
      {
        question: "How do you ensure administrative staff maintain confidentiality?",
        answer: "All administrative professionals undergo confidentiality training and sign comprehensive non-disclosure agreements. Additionally, we conduct thorough background checks and provide cybersecurity awareness training for handling sensitive information."
      },
      {
        question: "Can administrative staff work in different time zones?",
        answer: "Yes, we can provide administrative support across various time zones to ensure coverage during your business hours. We can also arrange for 24/7 support through strategically scheduled teams if required."
      }
    ]
  },
  {
    id: 4,
    title: 'Business Consulting',
    description: 'Get expert guidance on process optimization, growth strategies, and operational efficiency from industry specialists.',
    iconName: 'BriefcaseIcon',
    slug: 'business-consulting',
    specializations: ['Process Optimization Consultants', 'Growth Strategists', 'Operational Efficiency Experts', 'Change Management Specialists', 'Business Analysts'],
    caseStudy: 'Delivered strategic consulting that helped a retail client increase revenue by 28% within 6 months.',
    fullDescription: 'Our Business Consulting staffing solutions connect your organization with seasoned consultants who provide strategic guidance and tactical execution support. From process optimization to growth strategy development, our consultants bring proven methodologies and industry expertise to help you achieve measurable business improvements.',
    benefits: [
      'Gain objective, expert perspectives on your business challenges',
      'Access specialized knowledge without the cost of full-time executives',
      'Implement best practices from across your industry and beyond',
      'Drive change initiatives with experienced leadership',
      'Achieve measurable business improvements quickly and efficiently'
    ],
    process: [
      { title: 'Business Challenge Analysis', description: 'We conduct a thorough assessment of your current situation, goals, and key performance indicators.' },
      { title: 'Consultant Selection', description: 'Our team identifies consultants with specific experience solving similar challenges in your industry.' },
      { title: 'Engagement Planning', description: 'We develop a structured engagement plan with clear milestones, deliverables, and success metrics.' },
      { title: 'Implementation & Knowledge Transfer', description: 'Consultants not only deliver solutions but ensure your team can maintain improvements long-term.' }
    ],
    results: [
      { metric: '28%', description: 'Average revenue increase achieved by retail clients' },
      { metric: '32%', description: 'Typical improvement in operational efficiency' },
      { metric: '97%', description: 'Client satisfaction rate with our consulting engagements' }
    ],
    testimonials: [
      {
        quote: "The business consultant Clearview provided helped us identify inefficiencies we hadn't recognized and implemented strategies that transformed our operations. The ROI has been exceptional, with improvements far exceeding our expectations.",
        author: "Katherine Williams",
        title: "COO",
        company: "Urban Retail Group"
      }
    ],
    faq: [
      {
        question: "What types of business consulting do you provide?",
        answer: "We offer a comprehensive range of business consulting services including process optimization, growth strategy development, operational efficiency, digital transformation, change management, financial analysis, market expansion, and organizational restructuring."
      },
      {
        question: "How long do typical consulting engagements last?",
        answer: "Engagement length varies based on scope and complexity. Short-term projects typically range from 2-8 weeks, while more comprehensive transformations may extend 3-6 months. We structure all engagements with clear milestones and deliverables."
      },
      {
        question: "How do you measure the success of consulting engagements?",
        answer: "We establish specific, measurable KPIs at the outset of each engagement. These may include revenue growth, cost reduction, efficiency improvements, customer satisfaction increases, or other metrics aligned with your specific goals. We provide regular reporting against these metrics throughout the engagement."
      }
    ]
  },
  {
    id: 5,
    title: 'Healthcare & Medical',
    description: 'Staff your organization with qualified healthcare professionals, medical administrators, and billing specialists.',
    iconName: 'UsersIcon',
    slug: 'healthcare-medical',
    specializations: ['Medical Billing Specialists', 'Healthcare Administrators', 'Medical Records Technicians', 'Patient Care Coordinators', 'Telehealth Support'],
    caseStudy: 'Staffed a telemedicine platform with specialized support personnel, improving patient satisfaction scores by 42%.',
    fullDescription: 'Our Healthcare & Medical staffing solutions provide qualified healthcare professionals who understand the unique requirements and regulations of the medical field. From administrative support to specialized roles, we connect healthcare organizations with verified professionals who maintain the highest standards of patient care and operational excellence.',
    benefits: [
      'Access to qualified healthcare professionals with specific credentials',
      'Ensure compliance with healthcare regulations and standards',
      'Scale your medical team efficiently to meet changing demands',
      'Reduce administrative burden with specialized support staff',
      'Improve patient experience with qualified, compassionate professionals'
    ],
    process: [
      { title: 'Healthcare Requirements Analysis', description: 'We document your specific needs, required certifications, and compliance requirements.' },
      { title: 'Specialized Healthcare Recruiting', description: 'Our healthcare recruiters identify candidates with verified credentials and relevant experience.' },
      { title: 'Credential Verification', description: 'We thoroughly verify all licenses, certifications, and healthcare-specific qualifications.' },
      { title: 'Compliance Assurance', description: 'We ensure all placements meet HIPAA and other relevant healthcare regulations.' }
    ],
    results: [
      { metric: '42%', description: 'Average improvement in patient satisfaction scores' },
      { metric: '37%', description: 'Typical reduction in administrative processing times' },
      { metric: '99%', description: 'Compliance rate with healthcare regulations' }
    ],
    testimonials: [
      {
        quote: "The healthcare administrators and support staff Clearview provided for our telemedicine platform have been exceptional. Their understanding of healthcare workflows and commitment to patient care has been instrumental in our growth and improved satisfaction scores.",
        author: "Dr. Emily Richards",
        title: "Medical Director",
        company: "TeleCare Health Solutions"
      }
    ],
    faq: [
      {
        question: "What types of healthcare roles do you staff?",
        answer: "We provide a wide range of healthcare professionals including medical billers and coders, healthcare administrators, medical records specialists, patient care coordinators, telehealth support staff, medical scribes, and other non-clinical healthcare roles."
      },
      {
        question: "How do you ensure HIPAA compliance?",
        answer: "All our healthcare professionals undergo comprehensive HIPAA training and certification. We conduct thorough background checks, verify credentials, and ensure all staff understand healthcare privacy regulations and best practices for handling protected health information."
      },
      {
        question: "Can you staff specialized healthcare roles?",
        answer: "Yes, we have expertise in staffing specialized healthcare positions including roles in specific medical specialties, insurance verification specialists, revenue cycle management professionals, healthcare IT support, and medical compliance officers."
      }
    ]
  },
];

export default services; 