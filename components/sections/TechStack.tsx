"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Smartphone, Cpu, Shield, Zap, ShoppingCart, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const techCategories = [
  {
    icon: Code2,
    category: "Frontend",
    color: "from-blue-600 to-cyan-600",
    technologies: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Vue.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
    ]
  },
  {
    icon: Database,
    category: "Backend",
    color: "from-purple-600 to-pink-600",
    technologies: [
      { name: "Node.js", level: "Expert" },
      { name: "Python", level: "Expert" },
      { name: "PHP", level: "Expert" },
      { name: "Java", level: "Advanced" },
      { name: ".NET", level: "Advanced" },
    ]
  },
  {
    icon: ShoppingCart,
    category: "E-commerce",
    color: "from-green-600 to-teal-600",
    technologies: [
      { name: "Shopify", level: "Expert" },
      { name: "Shopify Hydrogen", level: "Expert" },
      { name: "WordPress", level: "Expert" },
      { name: "WooCommerce", level: "Expert" },
      { name: "Magento", level: "Advanced" },
    ]
  },
  {
    icon: TrendingUp,
    category: "Marketing & Analytics",
    color: "from-orange-600 to-red-600",
    technologies: [
      { name: "Amazon PPC", level: "Expert" },
      { name: "Google Ads", level: "Expert" },
      { name: "Facebook Ads", level: "Expert" },
      { name: "Google Analytics", level: "Expert" },
      { name: "SEMrush", level: "Advanced" },
    ]
  },
  {
    icon: Cloud,
    category: "Cloud & DevOps",
    color: "from-indigo-600 to-blue-600",
    technologies: [
      { name: "AWS", level: "Expert" },
      { name: "Azure", level: "Expert" },
      { name: "Google Cloud", level: "Advanced" },
      { name: "Docker", level: "Expert" },
      { name: "Kubernetes", level: "Expert" },
    ]
  },
  {
    icon: Smartphone,
    category: "Mobile",
    color: "from-pink-600 to-rose-600",
    technologies: [
      { name: "React Native", level: "Expert" },
      { name: "Flutter", level: "Advanced" },
      { name: "iOS (Swift)", level: "Expert" },
      { name: "Android (Kotlin)", level: "Expert" },
    ]
  },
  {
    icon: Cpu,
    category: "AI & Data",
    color: "from-purple-600 to-indigo-600",
    technologies: [
      { name: "TensorFlow", level: "Advanced" },
      { name: "PyTorch", level: "Advanced" },
      { name: "Machine Learning", level: "Expert" },
      { name: "Big Data Analytics", level: "Expert" },
    ]
  },
  {
    icon: Shield,
    category: "Security",
    color: "from-red-600 to-pink-600",
    technologies: [
      { name: "OAuth 2.0", level: "Expert" },
      { name: "Penetration Testing", level: "Advanced" },
      { name: "GDPR Compliance", level: "Expert" },
      { name: "ISO 27001", level: "Certified" },
    ]
  },
];

export default function TechStack() {
  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-4">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Technology Excellence
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Leveraging the latest and most powerful technologies to build enterprise-grade solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all shadow-sm hover:shadow-xl">
                  {/* Icon Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Tech List */}
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        className="flex items-center justify-between group/item"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-600" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                          {tech.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800"
        >
          {[
            { value: "50+", label: "Technologies" },
            { value: "100+", label: "Certified Experts" },
            { value: "15+", label: "Years Experience" },
            { value: "24/7", label: "Tech Support" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

