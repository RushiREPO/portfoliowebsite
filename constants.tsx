
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Customer Churn Predictor',
    description: 'Developed an XGBoost pipeline predicting user attrition with 92% AUC. Integrated SHAP for feature explainability.',
    tags: ['Python', 'XGBoost', 'SHAP', 'Flask'],
    imageUrl: 'https://picsum.photos/seed/churn/800/600',
    metric: '92% AUC Score',
    link: '#'
  },
  {
    id: '2',
    title: 'Real-time Fraud Detection',
    description: 'Anomaly detection system processing 10k+ transactions/sec using Isolation Forest and Kafka streaming.',
    tags: ['Kafka', 'Scikit-Learn', 'AWS Lambda', 'DynamoDB'],
    imageUrl: 'https://picsum.photos/seed/fraud/800/600',
    metric: '150ms Latency',
    link: '#'
  },
  {
    id: '3',
    title: 'Supply Chain Optimization',
    description: 'Built a mixed-integer linear programming (MILP) model reducing logistics overhead for a regional retailer.',
    tags: ['PuLP', 'Pandas', 'Matplotlib', 'Tableau'],
    imageUrl: 'https://picsum.photos/seed/supply/800/600',
    metric: '14% Cost Reduction',
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', level: 95, category: 'Languages' },
  { name: 'SQL', level: 90, category: 'Languages' },
  { name: 'PyTorch', level: 85, category: 'ML Frameworks' },
  { name: 'Scikit-Learn', level: 95, category: 'ML Frameworks' },
  { name: 'Pandas', level: 100, category: 'Tools' },
  { name: 'Docker', level: 75, category: 'Tools' },
  { name: 'Hypothesis Testing', level: 90, category: 'Statistics' },
  { name: 'Bayesian Inference', level: 80, category: 'Statistics' }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'junior Data Scientist',
    company: 'Automonk Technologies pvt ltd',
    period: 'Dec-2023 - Present',
    achievements: [
      'Engineered credit risk models resulting in a 12% decrease in default rates.',
      'Designed and deployed automated ETL pipelines using Apache Airflow.',
      'Led cross-functional workshops on data literacy for product managers.'
    ]
  },
  {
    role: 'intern data scientist',
    company: 'Automonk Technologies pvt ltd',
    period: 'Dec-2023 - may-2024',
    achievements: [
      'Optimized SQL queries reducing dashboard load times by 60%.',
      'Developed a sentiment analysis tool for social media monitoring using NLTK.',
      'Created interactive Tableau dashboards for executive reporting.'
    ]
  }
];
