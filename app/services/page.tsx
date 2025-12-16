"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Zap,
  Sparkles,
  TrendingUp,
  ShoppingCart,
  FileCode,
  Store,
  Share2,
} from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, any> = {
  Code,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Wrench,
  ShoppingCart,
  FileCode,
  TrendingUp,
  Store,
  Share2,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section - Powerful & Clean */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">
                Complete Software Solutions
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Enterprise Software
              <br />
              Development Services
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl">
              From startups to Fortune 500s—we deliver custom software solutions 
              that drive growth and innovation
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-2xl"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                View Success Stories
              </Link>
            </div>

            {/* Quick Stats - Glassmorphism */}
            <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              {[
                { icon: Code, value: "4,200+", label: "Projects Delivered" },
                { icon: TrendingUp, value: "750+", label: "IT Experts" },
                { icon: Sparkles, value: "98%", label: "Success Rate" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Services - Large Interactive Cards */}
      <Section className="bg-white dark:bg-gray-950">
        <Container>
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              const gradients = [
                "from-blue-600 to-cyan-600",
                "from-purple-600 to-pink-600",
                "from-green-600 to-teal-600",
                "from-orange-600 to-red-600",
                "from-indigo-600 to-blue-600",
                "from-pink-600 to-rose-600",
              ];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Visual Side */}
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <motion.div
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        className="relative p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-10`} />
                        
                        {/* Large Icon */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.8 }}
                          className={`relative inline-flex p-8 rounded-3xl bg-gradient-to-br ${gradients[index % gradients.length]} shadow-2xl mb-6`}
                        >
                          <Icon className="w-20 h-20 text-white" />
                        </motion.div>

                        {/* Floating Number */}
                        <div className="absolute bottom-8 right-8 text-9xl font-black text-gray-200 dark:text-gray-700 opacity-20">
                          0{index + 1}
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        {/* Category Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradients[index % gradients.length]} bg-opacity-10 mb-4`}>
                          <Zap className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                            Service #{index + 1}
                          </span>
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                          {service.title}
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + idx * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div whileHover={{ x: 5 }}>
                          <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                          >
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why Choose Our Services */}
      <Section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Industry-leading service delivery with proven results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "97% On-Time Delivery",
                description: "We respect deadlines and deliver quality on schedule",
                color: "from-green-600 to-teal-600"
              },
              {
                icon: Zap,
                title: "4-6 Week MVP Launch",
                description: "Get your product to market faster than ever",
                color: "from-blue-600 to-cyan-600"
              },
              {
                icon: Sparkles,
                title: "Dedicated Teams",
                description: "Your own squad of expert developers and designers",
                color: "from-purple-600 to-pink-600"
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center h-full">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a free consultation to discuss your project requirements and get a custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-2xl"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}

