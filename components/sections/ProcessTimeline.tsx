"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Rocket, HeadphonesIcon, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, define goals, and create a strategic roadmap for success.",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: Code,
    number: "02",
    title: "Design & Development",
    description: "Our expert team builds your solution using cutting-edge technologies and best practices.",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Testing & QA",
    description: "Rigorous testing ensures your product is bug-free, secure, and performs flawlessly.",
    color: "from-green-600 to-teal-600"
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Deploy",
    description: "We deploy your solution to production with zero downtime and full optimization.",
    color: "from-orange-600 to-red-600"
  },
  {
    icon: HeadphonesIcon,
    number: "05",
    title: "Support & Scale",
    description: "Ongoing maintenance, updates, and scaling support to ensure long-term success.",
    color: "from-indigo-600 to-purple-600"
  },
];

export default function ProcessTimeline() {
  return (
    <Section className="bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-4">
            <Rocket className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Our Proven Process
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A streamlined approach that delivers results, from concept to launch and beyond
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-12`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all"
                    >
                      <div className={`flex items-start gap-4 ${isEven ? 'lg:flex-row-reverse' : ''} flex-row`}>
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={isEven ? 'lg:text-right' : 'lg:text-left'}>
                          <div className="text-sm font-bold text-blue-600 mb-1">
                            Step {step.number}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center border-4 border-white dark:border-gray-950 shadow-lg z-10">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>

                  {/* Empty space for layout */}
                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <span className="text-gray-900 dark:text-white font-semibold">
              Average project delivery: <span className="text-blue-600">4-8 weeks</span>
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}




