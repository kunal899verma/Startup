"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Award,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { COMPANY_TIMELINE } from "@/lib/constants";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every line of code and every client interaction.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our passion for technology drives us to create innovative solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and close client partnerships.",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "We're committed to making a positive impact through technology.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Split Layout */}
      <section className="relative pt-32 pb-20 bg-white dark:bg-gray-950 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-6">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Since 2020
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                Transforming Ideas Into
                <span className="block text-blue-600">Digital Excellence</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                We're a global team of 750+ passionate developers, designers, and strategists 
                dedicated to building software that makes a difference.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "15+", label: "Years" },
                  { value: "50+", label: "Countries" },
                  { value: "98%", label: "Success Rate" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-900">
                    <div className="text-3xl font-black text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Large Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="col-span-2 p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white"
              >
                <Target className="w-12 h-12 mb-4" />
                <div className="text-4xl font-black mb-2">Our Mission</div>
                <p className="text-blue-100">Empowering businesses through innovative technology</p>
              </motion.div>

              {/* Small Cards */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <Users className="w-10 h-10 text-green-600 mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">750+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Experts</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <Globe className="w-10 h-10 text-blue-600 mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Global</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Presence</p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Leadership & Culture */}
      <Section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our vision and values that shape everything we create
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <Eye className="w-14 h-14 mb-6 relative z-10" />
              <h2 className="text-3xl font-black mb-4 relative z-10">
                Our Vision
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed relative z-10">
                To be the world's most trusted software development partner, recognized for 
                innovation, quality, and transformative impact across every industry we serve.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-10 rounded-3xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800"
            >
              <Target className="w-14 h-14 text-purple-600 mb-6" />
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower businesses with cutting-edge software solutions that drive measurable 
                growth, enhance operational efficiency, and create exceptional digital experiences.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section className="bg-white dark:bg-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colors = [
                "from-blue-600 to-cyan-600",
                "from-purple-600 to-pink-600",
                "from-green-600 to-teal-600",
                "from-orange-600 to-red-600",
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-full p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all shadow-lg hover:shadow-xl text-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colors[index % colors.length]} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Company Timeline - Clean & Modern */}
      <Section className="bg-white dark:bg-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              15+ years of growth, innovation, and success
            </p>
          </motion.div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {COMPANY_TIMELINE.map((milestone, index) => {
              const gradients = [
                "from-blue-500 to-blue-600",
                "from-purple-500 to-purple-600",
                "from-green-500 to-green-600",
                "from-orange-500 to-orange-600",
                "from-indigo-500 to-indigo-600",
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-lg hover:shadow-xl">
                    {/* Year Badge */}
                    <div className={`inline-flex px-4 py-2 rounded-lg bg-gradient-to-r ${gradients[index]} text-white font-black text-2xl mb-4 shadow-lg`}>
                      {milestone.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {milestone.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Number Circle */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why We're Different */}
      <Section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Users, value: "750+", label: "IT Experts", color: "from-blue-600 to-cyan-600" },
                { icon: Globe, value: "50+", label: "Countries", color: "from-purple-600 to-pink-600" },
                { icon: Target, value: "4,200+", label: "Projects", color: "from-green-600 to-teal-600" },
                { icon: Award, value: "98%", label: "Satisfaction", color: "from-orange-600 to-red-600" },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center"
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                A Global Team United by Excellence
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Our diverse team of experts spans across 50+ countries, bringing together 
                the best talent in software development, design, and innovation.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                With over 15 years of experience and 4,200+ successful projects, we've 
                built a reputation for delivering exceptional results that exceed expectations.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Certifications & Awards */}
      <Section className="bg-white dark:bg-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certified & Recognized
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Industry certifications and awards that validate our excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Shield, 
                title: "ISO 27001", 
                subtitle: "Security Certified",
                color: "from-blue-600 to-cyan-600"
              },
              { 
                icon: Award, 
                title: "IAOP Global", 
                subtitle: "Top 100 Provider",
                color: "from-purple-600 to-pink-600"
              },
              { 
                icon: Sparkles, 
                title: "Microsoft", 
                subtitle: "Gold Partner",
                color: "from-green-600 to-teal-600"
              },
              { 
                icon: TrendingUp, 
                title: "Clutch", 
                subtitle: "5.0 Top Rated",
                color: "from-orange-600 to-red-600"
              },
            ].map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all text-center">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${cert.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.subtitle}
                    </p>
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
              Join 150+ Companies Building the Future
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with a team that's committed to your success
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-2xl"
            >
              Start Your Journey
              <Zap className="w-5 h-5" />
            </Link>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}

