"use client";

import { motion } from "framer-motion";
import { Building2, Plane, Heart, ShoppingBag, Factory, Globe } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const industries = [
  {
    icon: Building2,
    name: "Financial Services",
    projects: "450+",
    description: "Banking, Insurance & FinTech",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    icon: Heart,
    name: "Healthcare",
    projects: "380+",
    description: "Digital Health & Medical Devices",
    gradient: "from-red-600 to-pink-600"
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    projects: "520+",
    description: "Online Shopping & POS Systems",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: Factory,
    name: "Manufacturing",
    projects: "290+",
    description: "Industry 4.0 & IoT Solutions",
    gradient: "from-orange-600 to-red-600"
  },
  {
    icon: Plane,
    name: "Transportation",
    projects: "180+",
    description: "Logistics & Fleet Management",
    gradient: "from-green-600 to-teal-600"
  },
  {
    icon: Globe,
    name: "Telecommunications",
    projects: "340+",
    description: "5G & Network Solutions",
    gradient: "from-indigo-600 to-blue-600"
  },
];

export default function IndustryExpertise() {
  return (
    <Section className="bg-white dark:bg-gray-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industry Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Deep domain knowledge across 30+ industries with proven results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href="/services">
                  <div className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all">
                    {/* Icon with Gradient */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${industry.gradient} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {industry.description}
                    </p>

                    {/* Projects Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {industry.projects} Projects
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}


