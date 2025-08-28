import { Job, JobCategory, Testimonial, SuccessStory, BlogPost, Company } from '../types';

export const recentJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'Join our innovative team building next-generation software solutions.',
    source: 'LinkedIn',
    postedDate: '2 days ago',
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '2',
    title: 'Marketing Manager',
    company: 'GrowthCo',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$80,000 - $100,000',
    description: 'Lead our marketing initiatives and drive brand growth.',
    source: 'Indeed',
    postedDate: '1 day ago',
    logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '3',
    title: 'Data Analyst',
    company: 'DataPro',
    location: 'Remote',
    type: 'Contract',
    salary: '$70,000 - $85,000',
    description: 'Analyze complex datasets and provide actionable insights.',
    source: 'Internal',
    postedDate: '3 days ago',
    logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '4',
    title: 'UX Designer',
    company: 'DesignStudio',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$85,000 - $110,000',
    description: 'Create intuitive and beautiful user experiences.',
    source: 'LinkedIn',
    postedDate: '1 week ago',
    logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '5',
    title: 'Financial Advisor',
    company: 'WealthManagement Inc',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'Provide expert financial guidance to clients.',
    source: 'Indeed',
    postedDate: '4 days ago',
    logo: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

export const jobCategories: JobCategory[] = [
  { id: '1', name: 'Information Technology', icon: 'Monitor', jobCount: 1250, description: 'Software, IT Support, Cybersecurity' },
  { id: '2', name: 'Healthcare', icon: 'Heart', jobCount: 890, description: 'Nursing, Medical, Healthcare Admin' },
  { id: '3', name: 'Marketing', icon: 'TrendingUp', jobCount: 567, description: 'Digital Marketing, Content, SEO' },
  { id: '4', name: 'Finance', icon: 'DollarSign', jobCount: 734, description: 'Accounting, Banking, Investment' },
  { id: '5', name: 'Engineering', icon: 'Settings', jobCount: 456, description: 'Mechanical, Civil, Electrical' },
  { id: '6', name: 'Education', icon: 'GraduationCap', jobCount: 345, description: 'Teaching, Training, Administration' },
  { id: '7', name: 'Sales', icon: 'Target', jobCount: 678, description: 'Inside Sales, Account Management' },
  { id: '8', name: 'Human Resources', icon: 'Users', jobCount: 234, description: 'Recruiting, HR Management, Training' }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    company: 'Google',
    content: 'Talent Source helped me land my dream job at Google. The platform is incredibly user-friendly and the job recommendations were spot-on.',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Microsoft',
    content: 'The quality of job postings on Talent Source is exceptional. I found multiple opportunities that matched my skills perfectly.',
    avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    company: 'Amazon',
    content: 'Talent Source connected me with top-tier companies I never would have found elsewhere. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  }
];

export const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    beforeRole: 'Junior Developer',
    afterRole: 'Senior Software Engineer',
    company: 'Meta',
    story: 'Through Talent Source, I connected with a recruiter at Meta who helped me transition from a junior role to a senior position with a 70% salary increase.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    timeframe: '3 months'
  },
  {
    id: '2',
    name: 'Lisa Park',
    beforeRole: 'Marketing Coordinator',
    afterRole: 'VP of Marketing',
    company: 'Stripe',
    story: 'The career resources and networking opportunities on Talent Source were invaluable in helping me climb the career ladder.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    timeframe: '6 months'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Essential Tips for Acing Your Next Job Interview',
    excerpt: 'Master the art of interviewing with these proven strategies that have helped thousands of candidates land their dream jobs.',
    author: 'Career Coach Team',
    publishDate: '2024-01-15',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    category: 'Interview Tips'
  },
  {
    id: '2',
    title: 'How to Write a Resume That Gets You Hired in 2024',
    excerpt: 'Learn the latest trends in resume writing and discover what recruiters are really looking for in today\'s job market.',
    author: 'Resume Experts',
    publishDate: '2024-01-10',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/5912319/pexels-photo-5912319.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    category: 'Resume Writing'
  },
  {
    id: '3',
    title: 'Salary Negotiation: Getting the Pay You Deserve',
    excerpt: 'Master the art of salary negotiation with these expert tips and strategies for maximizing your earning potential.',
    author: 'Salary Experts',
    publishDate: '2024-01-05',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    category: 'Career Growth'
  }
];

export const partnerCompanies: Company[] = [
  { id: '1', name: 'Google', logo: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' },
  { id: '2', name: 'Microsoft', logo: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' },
  { id: '3', name: 'Amazon', logo: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' },
  { id: '4', name: 'Apple', logo: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' },
  { id: '5', name: 'Meta', logo: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' },
  { id: '6', name: 'Netflix', logo: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop' }
];

export const jobSources = ['All Sources', 'LinkedIn', 'Indeed', 'Internal'];