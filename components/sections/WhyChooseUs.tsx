"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Users,
  Award,
  Clock,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile methodologies ensure rapid development without compromising quality.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee for your applications.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "50+ skilled developers, designers, and strategists dedicated to your success.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in software development and client satisfaction.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support to keep your business running smoothly.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Future-proof architecture that grows with your business needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-6">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Why Partner With Us
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Your Success Is Our Mission
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              We don't just deliver software—we deliver solutions that transform businesses and drive growth.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-900 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Visual Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Large Card */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="col-span-2 p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white"
            >
              <TrendingUp className="w-12 h-12 mb-4" />
              <div className="text-4xl font-black mb-2">98%</div>
              <p className="text-blue-100">Client Satisfaction Rate</p>
            </motion.div>

            {/* Small Cards */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <Award className="w-10 h-10 text-yellow-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">25+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Awards Won</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <Users className="w-10 h-10 text-green-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">750+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Experts</p>
            </motion.div>

            {/* Wide Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border border-green-200 dark:border-green-800"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">15+ Years</div>
                  <p className="text-gray-600 dark:text-gray-400">Industry Experience</p>
                </div>
                <Shield className="w-16 h-16 text-green-600 opacity-20" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

