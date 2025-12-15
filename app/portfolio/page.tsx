"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Sparkles, TrendingUp, Award, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import Link from "next/link";

export default function PortfolioPage() {

  return (
    <>
      {/* Hero Section - Full Width Gradient */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
              >
                <Award className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">
                  Success Stories
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                Projects That
                <br />
                Transformed Businesses
              </h1>
              
              <p className="text-xl text-white/90 mb-8">
                From startups to enterprises—real results from real projects across industries
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-2xl"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Right Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
              >
                <TrendingUp className="w-10 h-10 text-white mb-3" />
                <div className="text-4xl font-black text-white">4,200+</div>
                <div className="text-blue-100">Projects</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
              >
                <Award className="w-10 h-10 text-white mb-3" />
                <div className="text-4xl font-black text-white">150+</div>
                <div className="text-blue-100">Clients</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="col-span-2 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
              >
                <Sparkles className="w-10 h-10 text-white mb-3" />
                <div className="text-4xl font-black text-white">98%</div>
                <div className="text-blue-100">Client Satisfaction Score</div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Projects - Bento Grid Style */}
      <Section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PORTFOLIO_PROJECTS.map((project, index) => {
              const gradients = [
                "from-blue-600 to-cyan-600",
                "from-purple-600 to-pink-600",
                "from-green-600 to-teal-600",
                "from-orange-600 to-red-600",
                "from-indigo-600 to-blue-600",
                "from-pink-600 to-rose-600",
              ];

              // Make first and last projects large (span 2 columns on desktop)
              const isLarge = index === 0 || index === PORTFOLIO_PROJECTS.length - 1;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  layout
                  className={isLarge ? "lg:col-span-2" : ""}
                >
                  <div className="group h-full rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all shadow-lg hover:shadow-2xl overflow-hidden">
                    {/* Project Visual */}
                    <div className={`relative ${isLarge ? 'h-80' : 'h-64'} bg-gradient-to-br ${gradients[index % gradients.length]} overflow-hidden`}>
                      {/* Large Letter Watermark */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`${isLarge ? 'text-9xl' : 'text-7xl'} font-black text-white/10`}>
                          {project.title.split(" ")[0][0]}
                        </div>
                      </div>

                      {/* Project Number */}
                      <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white font-black text-lg">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      
                      {/* Hover Overlay with Actions */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex gap-3">
                            <button className="flex-1 p-3 bg-white rounded-lg text-gray-900 font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                              <ExternalLink className="w-5 h-5" />
                              View Live
                            </button>
                            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all">
                              <Github className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-bold">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Award className="w-4 h-4" />
                          <span className="text-xs font-bold">Featured</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">8x</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Growth</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">50K+</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">99.9%</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Uptime</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Results Section */}
      <Section className="bg-white dark:bg-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our portfolio speaks for itself—delivering measurable impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, value: "10x", label: "Average ROI", color: "from-green-600 to-teal-600" },
              { icon: Zap, value: "6 weeks", label: "Avg. Time to Market", color: "from-blue-600 to-cyan-600" },
              { icon: Award, value: "25+", label: "Industry Awards", color: "from-purple-600 to-pink-600" },
              { icon: Sparkles, value: "100%", label: "On-Time Delivery", color: "from-orange-600 to-red-600" },
            ].map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${metric.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-blue-600 to-purple-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Your Project Could Be Next
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create your success story together. Free consultation, no obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-2xl"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}

