import {
  Smartphone,
  Globe,
  Layers,
  Bot,
  Zap,
  Shield,
  Users,
  Target,
  Code,
  GitBranch,
  Database,
  Cloud,
  Cpu,
  Lock,
  TestTube,
  BookOpen,
  ArrowRight,
  Mail,
  Clock,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  name: string
  description: string
  Icon: LucideIcon
  index: number
}

export const services: Service[] = [
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    description:
      'High-performance iOS and Android apps built with React Native. Native UX, single codebase, App Store & Play Store submission included.',
    Icon: Smartphone,
    index: 1,
  },
  {
    slug: 'cross-platform-development',
    name: 'Cross-Platform Development',
    description:
      'One codebase for mobile and web. Deliver consistent experiences across iOS, Android, and browser with React Native and Expo.',
    Icon: Layers,
    index: 2,
  },
  {
    slug: 'web-application-development',
    name: 'Web Application Development',
    description:
      'Scalable web applications from customer-facing platforms to internal tools. Full-stack: Next.js, React, Node.js, PostgreSQL, AWS.',
    Icon: Globe,
    index: 3,
  },
  {
    slug: 'ai-integration-agents',
    name: 'AI Integration & Agents',
    description:
      'Embed AI into your products and workflows. LLM integration, RAG pipelines, autonomous AI agents, and conversational AI.',
    Icon: Bot,
    index: 4,
  },
]

export const stats = [
  { value: 70, suffix: '+', label: '// projects delivered' },
  { value: 10, suffix: '+', label: '// years experience' },
  { value: 98, suffix: '%', label: '// client satisfaction' },
  { value: 12, suffix: '+', label: '// industries served' },
]

export const processSteps = [
  {
    title: 'Discovery',
    description:
      'We understand your goals, users, and constraints before writing a single line of code.',
  },
  {
    title: 'Design',
    description:
      'Wireframes, prototypes, and design systems that align the team before build begins.',
  },
  {
    title: 'Build',
    description:
      'Iterative development with weekly demos. You see progress — no black-box surprises.',
  },
  {
    title: 'Launch',
    description:
      'Deployment, testing, App Store submission, and post-launch monitoring included.',
  },
]

export const whyItems = [
  {
    Icon: Target,
    title: 'Outcome-first thinking',
    description: 'We measure success by business results, not lines of code delivered.',
  },
  {
    Icon: Zap,
    title: 'Lean & fast',
    description:
      'No unnecessary layers. Direct access to the engineers building your product.',
  },
  {
    Icon: Shield,
    title: 'Security & quality built in',
    description:
      'Code reviews, automated testing, and best practices — not afterthoughts.',
  },
  {
    Icon: Users,
    title: 'Long-term partnership',
    description:
      'We build for the long run. Handovers, documentation, and ongoing support included.',
  },
]

export const navItems = [
  { label: 'About', href: '/#why' },
  { label: 'Contact', href: '/contact' },
]

export const contactInfo = [
  { Icon: Mail, label: '// email', value: 'support@bitnetinc.com' },
  { Icon: Clock, label: '// response time', value: 'Within one business day' },
]

// ─── Service page content ───────────────────────────────────────────────────

export interface ServicePageData {
  slug: string
  name: string
  shortName: string
  description: string
  heroGlow: string
  index: number
  Icon: LucideIcon
  features: { iconName: string; title: string; description: string }[]
  techStack: string[]
  faqs: { id: string; question: string; answer: string }[]
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    shortName: 'Mobile',
    description:
      'We build high-performance iOS and Android apps with React Native. Native UX, single codebase, App Store & Play Store submission included.',
    heroGlow:
      'bg-[radial-gradient(ellipse_50%_55%_at_80%_40%,rgba(74,143,163,0.20)_0%,transparent_65%)]',
    index: 1,
    Icon: Smartphone,
    features: [
      {
        iconName: 'Smartphone',
        title: 'Native Performance',
        description:
          'React Native apps that feel indistinguishable from fully native iOS and Android applications.',
      },
      {
        iconName: 'Layers',
        title: 'Single Codebase',
        description:
          'One repository targets both platforms, dramatically reducing ongoing maintenance costs.',
      },
      {
        iconName: 'ArrowRight',
        title: 'App Store Submission',
        description:
          'We handle the full App Store and Play Store submission process, including review passes.',
      },
      {
        iconName: 'Code',
        title: 'TypeScript-First',
        description:
          'Every project is built with strict TypeScript for reliability, refactorability, and team scale.',
      },
      {
        iconName: 'TestTube',
        title: 'Tested & Reviewed',
        description:
          'Automated test suites and rigorous code review are standard — not optional extras.',
      },
      {
        iconName: 'BookOpen',
        title: 'Full Handover',
        description:
          'Comprehensive documentation and handover sessions so your team can own the codebase.',
      },
    ],
    techStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Redux Toolkit',
      'React Query',
      'Reanimated',
      'Detox',
      'Jest',
      'Fastlane',
      'Firebase',
    ],
    faqs: [
      {
        id: 'timeline',
        question: 'How long does a typical mobile app project take?',
        answer:
          'A focused MVP typically takes 6–12 weeks depending on scope. We break work into clear phases so you have working software and visibility from day one.',
      },
      {
        id: 'platform',
        question: 'Do you build for iOS and Android simultaneously?',
        answer:
          'Yes. React Native targets both platforms from a single codebase. Both stores get identical quality and feature parity.',
      },
      {
        id: 'maintenance',
        question: 'Do you offer ongoing maintenance after launch?',
        answer:
          'Absolutely. We offer retainer arrangements for post-launch support, OS updates, and continued feature development.',
      },
      {
        id: 'existing',
        question: 'Can you take over or improve an existing mobile app?',
        answer:
          'Yes. We start with a code audit, identify technical debt, and create a prioritised plan before touching production.',
      },
    ],
  },
  {
    slug: 'cross-platform-development',
    name: 'Cross-Platform Development',
    shortName: 'Cross-Platform',
    description:
      'One codebase for mobile and web. BNinc delivers cross-platform apps with React Native — faster to market, lower cost, consistent UX.',
    heroGlow:
      'bg-[radial-gradient(ellipse_60%_50%_at_20%_60%,rgba(42,95,110,0.45)_0%,transparent_60%)]',
    index: 2,
    Icon: Layers,
    features: [
      {
        iconName: 'Layers',
        title: 'iOS, Android & Web',
        description:
          'Ship to all three platforms from a single, well-maintained React Native and Expo codebase.',
      },
      {
        iconName: 'Zap',
        title: 'Faster Time to Market',
        description:
          'Shared logic means less duplication and faster delivery compared to three separate builds.',
      },
      {
        iconName: 'Code',
        title: 'Expo Ecosystem',
        description:
          "We leverage Expo's managed workflow, EAS Build, and OTA updates for rapid iteration.",
      },
      {
        iconName: 'GitBranch',
        title: 'Shared Business Logic',
        description:
          'Domain logic, API clients, and state management are shared across every target platform.',
      },
      {
        iconName: 'Shield',
        title: 'Consistent UX',
        description:
          'Platform-adaptive components ensure a native feel on each surface without duplicating UI code.',
      },
      {
        iconName: 'BookOpen',
        title: 'OTA Updates',
        description:
          'Push JavaScript bundle updates instantly without App Store review cycles using EAS Update.',
      },
    ],
    techStack: [
      'React Native',
      'Expo',
      'React Native Web',
      'TypeScript',
      'EAS Build',
      'EAS Update',
      'React Navigation',
      'Zustand',
      'React Query',
      'NativeWind',
    ],
    faqs: [
      {
        id: 'vs-native',
        question: 'When does cross-platform not make sense?',
        answer:
          "For apps requiring deep platform-specific capabilities — AR, advanced Bluetooth, or custom native modules — fully native may be better. We'll tell you honestly if that's the case.",
      },
      {
        id: 'performance',
        question: 'Is React Native performance comparable to native?',
        answer:
          'For the vast majority of application types, yes. The new React Native architecture (Fabric, JSI) closes the gap to near-native performance.',
      },
      {
        id: 'web-support',
        question: 'Can the same app run in a browser?',
        answer:
          'Yes, using React Native Web and Expo for Web. We architect shared code from the start so web is an extension, not a rewrite.',
      },
      {
        id: 'ota',
        question: 'What are OTA updates and how do they help?',
        answer:
          'Over-the-air updates let you push JavaScript changes directly to users without app store approval, cutting feedback cycles dramatically.',
      },
    ],
  },
  {
    slug: 'web-application-development',
    name: 'Web Application Development',
    shortName: 'Web Apps',
    description:
      'BNinc builds scalable web applications — customer platforms to internal tools. Full-stack: Next.js, React, Node.js, PostgreSQL, AWS.',
    heroGlow:
      'bg-[radial-gradient(ellipse_45%_60%_at_50%_100%,rgba(74,143,163,0.22)_0%,transparent_65%)]',
    index: 3,
    Icon: Globe,
    features: [
      {
        iconName: 'Globe',
        title: 'Next.js & React',
        description:
          'Server components, app router, and edge rendering for performance-first web applications.',
      },
      {
        iconName: 'Database',
        title: 'Full-Stack Architecture',
        description:
          'End-to-end design: API design, database schema, authentication, and deployment pipeline.',
      },
      {
        iconName: 'Cloud',
        title: 'AWS & Vercel',
        description:
          'We deploy to the infrastructure that fits your scale — from Vercel edge to full AWS setups.',
      },
      {
        iconName: 'Lock',
        title: 'Auth & Security',
        description:
          'Role-based access control, secure session management, and OWASP-compliant implementations.',
      },
      {
        iconName: 'Zap',
        title: 'Performance-First',
        description:
          'Core Web Vitals are a first-class concern — not an afterthought left for the optimisation sprint.',
      },
      {
        iconName: 'TestTube',
        title: 'CI/CD & Testing',
        description:
          'Automated testing pipelines and continuous deployment so every merge is production-ready.',
      },
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'tRPC',
      'Tailwind CSS',
      'AWS',
      'Vercel',
      'Redis',
    ],
    faqs: [
      {
        id: 'stack',
        question: 'Can you work with our existing stack?',
        answer:
          'Yes. While we recommend Next.js for new builds, we integrate with existing Node.js, Rails, Django, or other backend systems where needed.',
      },
      {
        id: 'scale',
        question: 'Can you build for high-traffic applications?',
        answer:
          'Absolutely. We design databases, caching layers, and infrastructure from the start with scale in mind — not as a bolt-on.',
      },
      {
        id: 'internal',
        question: 'Do you build internal tools as well as customer-facing apps?',
        answer:
          'Yes. Internal tools often benefit from the same engineering rigour as customer products. We apply the same standards to both.',
      },
      {
        id: 'seo',
        question: 'Is Next.js good for SEO?',
        answer:
          'Yes — server-side rendering and static generation make Next.js applications indexable and performant, which is a core ranking factor.',
      },
    ],
  },
  {
    slug: 'ai-integration-agents',
    name: 'AI Integration & Agents',
    shortName: 'AI & Agents',
    description:
      'BNinc embeds AI into products and workflows. LLM integration, RAG, autonomous AI agents, conversational AI. Practical AI, measurable results.',
    heroGlow:
      'bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(42,95,110,0.55)_0%,transparent_60%)]',
    index: 4,
    Icon: Bot,
    features: [
      {
        iconName: 'Bot',
        title: 'LLM Integration',
        description:
          'Embed GPT-4, Claude, Gemini, or open-source models into your existing product or workflow.',
      },
      {
        iconName: 'Database',
        title: 'RAG Pipelines',
        description:
          'Retrieval-augmented generation that grounds AI responses in your private, up-to-date data.',
      },
      {
        iconName: 'Cpu',
        title: 'Autonomous Agents',
        description:
          'Multi-step AI agents that plan, use tools, and complete complex tasks without manual intervention.',
      },
      {
        iconName: 'Code',
        title: 'Conversational AI',
        description:
          'Production-grade chatbots and assistants with memory, context management, and guardrails.',
      },
      {
        iconName: 'Zap',
        title: 'Workflow Automation',
        description:
          'Automate repetitive knowledge-work processes with AI that integrates your existing tools.',
      },
      {
        iconName: 'Shield',
        title: 'Safe by Design',
        description:
          'Prompt injection mitigation, output validation, cost controls, and audit logging built in.',
      },
    ],
    techStack: [
      'OpenAI API',
      'Anthropic Claude',
      'LangChain',
      'LlamaIndex',
      'Pinecone',
      'pgvector',
      'Python',
      'TypeScript',
      'FastAPI',
      'Next.js',
      'Vercel AI SDK',
    ],
    faqs: [
      {
        id: 'use-case',
        question: 'What types of businesses benefit from AI integration?',
        answer:
          'Any business with high volumes of repetitive knowledge work — support, document processing, data extraction, content generation, internal Q&A — sees strong ROI quickly.',
      },
      {
        id: 'cost',
        question: 'How do you manage LLM costs at scale?',
        answer:
          'We implement caching strategies, prompt optimisation, model routing (use cheaper models for simple tasks), and per-user rate limiting to keep costs predictable.',
      },
      {
        id: 'data',
        question: 'How do you handle sensitive data with AI?',
        answer:
          'We design data flows so private information stays in your infrastructure. We can run open-source models on your own servers if data sovereignty is a requirement.',
      },
      {
        id: 'accuracy',
        question: 'How do you ensure AI outputs are accurate?',
        answer:
          'RAG grounds responses in verified data. We also implement evaluation pipelines, output validation, and human-in-the-loop checkpoints for high-stakes decisions.',
      },
    ],
  },
]
