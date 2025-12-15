"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, TrendingUp, Users, Award, Rocket } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Gradient Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-50 via-transparent to-transparent dark:from-blue-950/20" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-50 via-transparent to-transparent dark:from-purple-950/20" />
      </div>

      <Container className="relative z-10 py-20">
        <motion.div style={{ y, opacity }} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-6"
            >
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Trusted by 150+ Companies Worldwide
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1]"
            >
              Enterprise Software
              <span className="block text-blue-600 dark:text-blue-400">
                That Scales
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              From startups to Fortune 500s, we build custom software solutions that drive growth, 
              enhance efficiency, and deliver measurable results. 36+ years of excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 text-gray-900 dark:text-white font-semibold rounded-lg transition-all"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              {[
                { value: "750+", label: "IT Experts" },
                { value: "4,200+", label: "Projects" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Large Feature Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="col-span-2 p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <Rocket className="w-12 h-12 mb-4 relative z-10" />
              <h3 className="text-2xl font-bold mb-2 relative z-10">Fast Delivery</h3>
              <p className="text-blue-100 relative z-10">Launch your MVP in 4-6 weeks</p>
            </motion.div>

            {/* Small Cards */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <TrendingUp className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Scalable</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise-ready infrastructure</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <Users className="w-10 h-10 text-orange-600 mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Dedicated</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Expert development teams</p>
            </motion.div>

            {/* Wide Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="col-span-2 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <Award className="w-10 h-10 text-purple-600 mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">ISO Certified & Award-Winning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Top-rated in IAOP Global Outsourcing 100</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

