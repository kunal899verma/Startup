"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const clients = [
  { name: "Microsoft", color: "from-blue-600 to-cyan-600" },
  { name: "Google", color: "from-red-600 to-yellow-500" },
  { name: "Amazon", color: "from-orange-600 to-yellow-600" },
  { name: "Meta", color: "from-blue-600 to-purple-600" },
  { name: "Apple", color: "from-gray-700 to-gray-900" },
  { name: "Netflix", color: "from-red-600 to-red-700" },
  { name: "Tesla", color: "from-red-600 to-gray-900" },
  { name: "Adobe", color: "from-red-600 to-pink-600" },
  { name: "Salesforce", color: "from-blue-500 to-cyan-500" },
  { name: "Oracle", color: "from-red-600 to-orange-600" },
  { name: "IBM", color: "from-blue-700 to-blue-900" },
  { name: "SAP", color: "from-blue-600 to-blue-800" },
];

export default function ClientLogos() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Trusted Worldwide
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Powering Growth for Industry Leaders
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="relative p-8 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-sm hover:shadow-xl">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                {/* Logo/Name */}
                <div className="relative text-center">
                  <div className={`text-xl font-black bg-gradient-to-r ${client.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block`}>
                    {client.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

