"use client";

import { motion } from "framer-motion";
import { Play, Award, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function VideoShowcase() {
  return (
    <Section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Award-Winning Solutions</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              See How We Transform Businesses
            </h2>
            
            <p className="text-xl text-blue-100 mb-8">
              Watch our 2-minute overview to see how we've helped companies achieve 
              10x growth through innovative software solutions.
            </p>

            <div className="space-y-4">
              {[
                "Enterprise-grade security & compliance",
                "Scalable cloud infrastructure",
                "24/7 dedicated support team",
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-blue-100">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-white/20">
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-black/30 transition-all cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl"
                >
                  <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                </motion.div>
              </div>

              {/* Thumbnail Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-2xl">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">2.5M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Views</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}




