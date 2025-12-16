"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, Users, Award, Globe } from "lucide-react";
import Container from "@/components/ui/Container";

const stats = [
  { icon: Users, value: 750, suffix: "+", label: "IT Experts", color: "text-blue-600" },
  { icon: TrendingUp, value: 4200, suffix: "+", label: "Projects Delivered", color: "text-green-600" },
  { icon: Award, value: 98, suffix: "%", label: "Client Satisfaction", color: "text-purple-600" },
  { icon: Globe, value: 50, suffix: "+", label: "Countries Served", color: "text-orange-600" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return (
    <>
      <span ref={ref}>0</span>
      {suffix}
    </>
  );
}

export default function LiveStats() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg mb-4 ${stat.color}`}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <div className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}


