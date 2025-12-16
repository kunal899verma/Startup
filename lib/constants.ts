/**
 * Application-wide constants
 */

export const COMPANY_NAME = "TechVision Studios";
export const COMPANY_TAGLINE = "Transforming Ideas into Digital Reality";
export const COMPANY_DESCRIPTION =
  "We are a modern software development company specializing in creating innovative digital solutions that drive business growth and user engagement.";

export const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies for optimal performance and user experience.",
    icon: "Code",
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "CMS Integration",
    ],
  },
  {
    id: "shopify-development",
    title: "Shopify Development",
    description:
      "Complete Shopify solutions from store setup to custom app development using Shopify Hydrogen and Liquid.",
    icon: "ShoppingCart",
    features: [
      "Shopify Store Development",
      "Shopify Hydrogen (Headless)",
      "Custom Shopify Apps",
      "Theme Customization",
    ],
  },
  {
    id: "wordpress-development",
    title: "WordPress Development",
    description:
      "Professional WordPress websites and custom plugins to power your content management and blogging needs.",
    icon: "FileCode",
    features: [
      "Custom WordPress Themes",
      "Plugin Development",
      "WooCommerce Integration",
      "WordPress Optimization",
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android that users love.",
    icon: "Smartphone",
    features: [
      "iOS & Android Apps",
      "Cross-platform Development",
      "App Store Optimization",
      "Push Notifications",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    description:
      "Complete digital marketing solutions to boost your online presence and drive sales across all platforms.",
    icon: "TrendingUp",
    features: [
      "Amazon Marketing & PPC",
      "Social Media Marketing",
      "SEO & Content Strategy",
      "Performance Analytics",
    ],
  },
  {
    id: "ecommerce-management",
    title: "E-commerce Account Management",
    description:
      "Expert management of your Amazon, Shopify, and marketplace accounts to maximize sales and growth.",
    icon: "Store",
    features: [
      "Amazon Account Management",
      "Listing Optimization",
      "Inventory Management",
      "Sales Analytics & Reporting",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Strategic social media campaigns that build brand awareness and drive engagement across all platforms.",
    icon: "Share2",
    features: [
      "Facebook & Instagram Ads",
      "YouTube Marketing",
      "Content Creation",
      "Community Management",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with users in mind to maximize engagement and conversions.",
    icon: "Palette",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    description:
      "Robust, scalable backend systems and APIs that power your applications reliably.",
    icon: "Database",
    features: [
      "RESTful APIs",
      "GraphQL",
      "Microservices",
      "Database Design",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Modern cloud infrastructure and DevOps practices for reliable, scalable deployments.",
    icon: "Cloud",
    features: [
      "AWS, Azure, GCP",
      "CI/CD Pipelines",
      "Container Orchestration",
      "Monitoring & Logging",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description:
      "Ongoing support and maintenance to keep your applications running smoothly and securely.",
    icon: "Wrench",
    features: [
      "24/7 Support",
      "Security Updates",
      "Performance Optimization",
      "Bug Fixes",
    ],
  },
];

export const TECH_STACK = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at StartupCo",
    content:
      "TechVision Studios transformed our vision into reality. Their attention to detail and technical expertise is unmatched. Highly recommend!",
    rating: 5,
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at InnovateTech",
    content:
      "Working with this team was a game-changer. They delivered a stunning application that exceeded our expectations in every way.",
    rating: 5,
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder at DigitalFirst",
    content:
      "Professional, responsive, and incredibly talented. They took our complex requirements and created an elegant solution.",
    rating: 5,
    avatar: "ER",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory management and seamless checkout experience.",
    category: "Web Development",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    description:
      "Patient management system with telemedicine capabilities and secure health record storage.",
    category: "Mobile Development",
    tags: ["React Native", "Firebase", "HealthKit"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics platform with interactive visualizations and custom reporting.",
    category: "Web Development",
    tags: ["React", "D3.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Fintech Payment Gateway",
    description:
      "Secure payment processing system with multi-currency support and fraud detection.",
    category: "Backend Development",
    tags: ["Python", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Social Media Platform",
    description:
      "Community-driven platform with real-time messaging and content sharing capabilities.",
    category: "Full Stack",
    tags: ["Next.js", "GraphQL", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "AI-Powered CRM",
    description:
      "Customer relationship management system with AI-driven insights and automation.",
    category: "Web Development",
    tags: ["React", "Python", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
];

export const COMPANY_TIMELINE = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "Started with a vision to transform businesses through innovative technology solutions.",
  },
  {
    year: "2021",
    title: "First Major Client",
    description:
      "Delivered our first enterprise-level project, establishing our reputation for quality.",
  },
  {
    year: "2022",
    title: "Team Expansion",
    description:
      "Grew our team to 25+ talented developers, designers, and strategists.",
  },
  {
    year: "2023",
    title: "International Recognition",
    description:
      "Received awards for excellence in software development and client satisfaction.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description:
      "Opened offices in multiple countries, serving clients across continents.",
  },
];

export const CONTACT_INFO = {
  email: "hello@techvision.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech Valley, CA 94025",
  socialMedia: {
    twitter: "https://twitter.com/techvision",
    linkedin: "https://linkedin.com/company/techvision",
    github: "https://github.com/techvision",
    dribbble: "https://dribbble.com/techvision",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];


