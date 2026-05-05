import type { LucideIcon } from 'lucide-react'
import { Heart, BarChart2, MapPin, Home, Star, Zap, Settings } from 'lucide-react'

export type Platform = 'ios' | 'android'

export interface PortfolioApp {
  id: string
  name: string
  tagline: string
  description: string
  category: string
  CategoryIcon: LucideIcon
  platforms: Platform[]
  storeLinks: {
    ios?: string
    android?: string
  }
}

export const portfolioCategories = [
  'All',
  'Health & Fitness',
  'Finance',
  'Travel',
  'Real Estate',
  'Entertainment',
  'Productivity',
  'Utilities',
] as const

export type PortfolioCategory = (typeof portfolioCategories)[number]

const categoryIcons: Record<string, LucideIcon> = {
  'Health & Fitness': Heart,
  Finance: BarChart2,
  Travel: MapPin,
  'Real Estate': Home,
  Entertainment: Star,
  Productivity: Zap,
  Utilities: Settings,
}

function app(
  data: Omit<PortfolioApp, 'CategoryIcon'> & { category: string }
): PortfolioApp {
  return { ...data, CategoryIcon: categoryIcons[data.category] ?? Settings }
}

export const portfolioApps: PortfolioApp[] = [
  app({
    id: 'workouts-for-men',
    name: 'Workouts For Men',
    tagline: 'Gym & Home Training',
    description:
      'Gym and home workout routines with step-by-step video instructions, meal plans, and personalized training programs. Rated 4.4★ on the App Store.',
    category: 'Health & Fitness',
    platforms: ['ios'],
    storeLinks: {
      ios: 'https://apps.apple.com/pk/app/workouts-for-men-gym-home/id1424128078',
    },
  }),
  app({
    id: 'moneywyn',
    name: 'Moneywyn',
    tagline: '50/30/20 Budget Plan',
    description:
      'Simplified personal budgeting using the 50/30/20 rule — needs, wants, and savings — without the friction of tracking every individual expense.',
    category: 'Finance',
    platforms: ['ios', 'android'],
    storeLinks: {
      ios: 'https://apps.apple.com/pk/app/moneywyn-50-30-20-budget-plan/id465032022',
      android: 'https://play.google.com/store/apps/details?id=com.beyondstop.moneywyn',
    },
  }),
  app({
    id: 'babylooks',
    name: 'BabyLooks',
    tagline: 'Match Family Poll',
    description:
      'Share a photo of your child and invite friends and family to vote on the resemblance in real time. Fun, social, and surprisingly addictive.',
    category: 'Entertainment',
    platforms: ['ios', 'android'],
    storeLinks: {
      ios: 'https://apps.apple.com/pk/app/babylooks-match-family-poll/id1011946622',
      android: 'https://play.google.com/store/apps/details?id=com.beyondstop.babylooks',
    },
  }),
  app({
    id: 'wanderlog',
    name: 'Wanderlog',
    tagline: 'Travel Planner & Road Trip Guide',
    description:
      'Plan trips collaboratively — flights, hotels, and attractions in one place. Route optimization, offline access, and expense splitting built in. 4.5★ with 32k+ reviews.',
    category: 'Travel',
    platforms: ['ios', 'android'],
    storeLinks: {
      ios: 'https://apps.apple.com/pk/app/wanderlog-travel-planner/id1476732439',
      android: 'https://play.google.com/store/apps/details?id=com.wanderlog.android',
    },
  }),
  app({
    id: 'selldo',
    name: 'Sell.Do',
    tagline: 'Real Estate CRM',
    description:
      'Mobile CRM for real estate professionals — lead management, omnichannel communication, inventory tracking, and performance analytics in one platform.',
    category: 'Real Estate',
    platforms: ['ios', 'android'],
    storeLinks: {
      ios: 'https://apps.apple.com/pk/app/sell-do-real-estate-crm/id1225486345',
      android: 'https://play.google.com/store/apps/details?id=com.amura.selldo',
    },
  }),
  app({
    id: 'my-estate-life',
    name: 'My Estate Life',
    tagline: 'Less Admin, Happier Residents',
    description:
      'All-in-one estate and building management — facility bookings, visitor invitations, vehicle and pet registration, emergency contacts, and community documents.',
    category: 'Real Estate',
    platforms: ['ios', 'android'],
    storeLinks: {
      ios: 'https://apps.apple.com/pk/app/my-estate-life/id1557199999',
      android: 'https://play.google.com/store/apps/details?id=com.myestatelife.android',
    },
  }),
  app({
    id: 'propy',
    name: 'Propy',
    tagline: 'Real Estate Automated',
    description:
      'List properties in multiple currencies, submit offers, and close transactions via traditional methods, virtual currencies, or NFTs on a single automated platform.',
    category: 'Real Estate',
    platforms: ['ios'],
    storeLinks: {
      ios: 'https://apps.apple.com/pk/app/propy-real-estate-automated/id1017369540',
    },
  }),
  app({
    id: 'utter',
    name: 'Utter',
    tagline: 'AI Voice Keyboard',
    description:
      'Voice-powered keyboard that converts speech to text across any app using AI, making typing hands-free and effortless on Android.',
    category: 'Productivity',
    platforms: ['android'],
    storeLinks: {
      android: 'https://play.google.com/store/apps/details?id=com.arran.dicta',
    },
  }),
  app({
    id: 'lockify',
    name: 'Lockify',
    tagline: 'Hide & Encrypt Files',
    description:
      'Hide and encrypt sensitive files on your Android device with military-grade security. Over 1,000 users trust Lockify to protect their private data.',
    category: 'Utilities',
    platforms: ['android'],
    storeLinks: {
      android: 'https://play.google.com/store/apps/details?id=com.leo.lockify',
    },
  }),
  app({
    id: 'mirrorify',
    name: 'Mirrorify',
    tagline: 'Lock Screen Mirror',
    description:
      'Instant mirror access from your lock screen — no unlock required. A fast, zero-friction way to check your appearance on the go.',
    category: 'Utilities',
    platforms: ['android'],
    storeLinks: {
      android: 'https://play.google.com/store/apps/details?id=com.mirrorify.app',
    },
  }),
  app({
    id: 'bluetooth-priority',
    name: 'Bluetooth Priority',
    tagline: 'Smart Bluetooth Manager',
    description:
      'Set connection priorities and auto-connect preferences across Bluetooth devices, so your phone always connects to the right device first.',
    category: 'Utilities',
    platforms: ['android'],
    storeLinks: {
      android: 'https://play.google.com/store/apps/details?id=com.bluetoothpriority',
    },
  }),
  app({
    id: 'bookmark-manager-zero',
    name: 'Bookmark Manager Zero',
    tagline: 'Clean Bookmark Manager',
    description:
      'Minimalist bookmark manager for Android — organize, search, and access your saved links without clutter or distraction.',
    category: 'Productivity',
    platforms: ['android'],
    storeLinks: {
      android:
        'https://play.google.com/store/apps/details?id=com.absolutezero.bookmarkmanagerzero',
    },
  }),
  app({
    id: 'btd-before-the-dates',
    name: 'BTD: Before The Dates',
    tagline: 'We will remember for you.',
    description:
      'Schedule personalized messages and gifts for birthdays, anniversaries, and special occasions in advance — set it once and let the app handle delivery automatically.',
    category: 'Utilities',
    platforms: ['ios'],
    storeLinks: {
      ios: 'https://apps.apple.com/pk/app/btd-before-the-dates/id6749821470',
    },
  }),
  app({
    id: 'reelstacks',
    name: 'ReelStacks',
    tagline: 'Save Smarter. Scroll Freer.',
    description:
      'Customizable library for saving reels by category — recipes, workouts, inspiration, and more — so you can find what you saved without endless scrolling.',
    category: 'Utilities',
    platforms: ['ios'],
    storeLinks: {
      ios: 'https://apps.apple.com/pk/app/reelstacks/id6762903593',
    },
  }),
]
