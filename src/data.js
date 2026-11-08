export const profile = {
  name: ['Sara', 'Razeen'],
  intro: 'Full-stack and machine learning developer. Recent computer science graduate.',
  status: [
    'full-stack + machine learning',
    'recent computer science graduate',
    'open to junior software roles',
  ],
  about: [
    'I build across the stack: mobile apps in React Native, backends in Django and FastAPI, and machine learning pipelines in Python.',
    'I like projects where research and product meet, where an idea has to be measured, then turned into something people can use.',
    'I’m looking for a trainee or junior software engineer role.',
  ],
}

export const links = {
  github: 'https://github.com/Sara-Razeen',
  email: '',
  linkedin: '',
}

export const projects = [
  {
    title: 'Prompting for sustainability',
    kind: 'Research paper, accepted at IEEE ICEEET 2026',
    text: 'How prompt roles, model specialization and green instructions change the cost of running an LLM: token use, energy and inference time. I designed the experiments, validated the prompts, ran the models in LM Studio, and collected and analysed the data across 360 experimental conditions with three repetitions.',
    stack: ['Python', 'LM Studio', 'Qwen', 'Llama', 'CodeCarbon'],
    note: 'Prompting for Sustainability: How Role, Model Specialization, and Green Instructions Shape LLM Inference Cost',
  },
  {
    title: 'Kiyaari',
    kind: 'Final year project, AI-powered urban plantation platform',
    text: 'Two mobile apps. Customers explore and rent plants, manage bookings, track orders and get AI plant recommendations and care help. Nursery owners and staff manage inventory, bookings, deliveries and plant maintenance. I led the React Native frontend.',
    stack: ['React Native', 'Expo', 'REST APIs'],
    note: 'Private repository',
  },
  {
    title: 'Inventory Management System',
    kind: 'Internship at NED University, BCIT department',
    text: 'A full-stack inventory and asset management system with inventory tracking, CRUD operations, authentication and REST API integration. I led the team and built the backend, database and integration.',
    stack: ['Django', 'PostgreSQL', 'React', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Vista',
    kind: 'Video Intelligence and Semantic Text Analysis',
    text: 'Processes a video through keyframe extraction, image captioning, audio transcription and semantic embeddings, so you can search its content and ask questions through different AI personas.',
    stack: ['Python', 'Gemma', 'Hugging Face', 'PyTorch', 'Google Colab'],
  },
  {
    title: 'CGANX',
    kind: 'Conditional GAN research',
    text: 'Generates synthetic wheat leaf images from environmental conditions, using spatial broadcasting and a MetaNet-based architecture. I prepared the dataset and built the Stage 2 generator.',
    stack: ['Python', 'PyTorch', 'GANs', 'Deep learning'],
  },
  {
    title: 'AI Genesis resume shortlisting',
    kind: 'AI Genesis Hackathon',
    text: 'An HR tool that matches candidate resumes against job requirements to help with shortlisting. I did the LangChain integration.',
    stack: ['Python', 'LangChain', 'Gemini', 'Hugging Face embeddings', 'Qdrant', 'Streamlit'],
  },
  {
    title: 'C++ compiler front end',
    kind: 'Compiler construction',
    text: 'Lexical analysis and syntax parsing for a subset of C++, with token generation, grammar validation, syntax error detection and error recovery.',
    stack: ['C', 'Flex', 'GNU Bison'],
  },
  {
    title: 'Dermanalytics',
    kind: 'NLP course project',
    text: 'I designed the system architecture.',
    stack: ['NLP'],
  },
]

export const smaller = [
  'Chess game with a console-based GUI. I wrote the piece movement and checkmate logic.',
  'Escape room game in C++ with SDL2. I made the find-the-object game.',
]
