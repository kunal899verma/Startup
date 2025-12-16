"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Wrench,
  ArrowRight,
  ShoppingCart,
  Zap,
  FileText,
  Store,
  Layout,
  Blocks,
} from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, any> = {
  Code,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Wrench,
  ShoppingCart,
  Zap,
  FileText,
  Store,
  Layout,
  Blocks,
};

export default function ServicesOverview() {
  return (
    <Section className="bg-white dark:bg-dark-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -15, scale: 1.02 }}
              >
                <div className="relative h-full group perspective-1000">
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                  
                  {/* Card Content */}
                  <div className="relative h-full p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="relative flex flex-col h-full">
                      {/* Animated Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                        {service.description}
                      </p>
                      
                      <Link
                        href={`/services#${service.id}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:gap-3 gap-2 transition-all group/link"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}

