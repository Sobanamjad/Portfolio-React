"use client";

import { motion } from "framer-motion";

export default function MaintenanceSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="p-2 flex flex-col items-center text-center max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold">
        MAINTENANCE
      </h1>

      <p className="text-[#9C9C9C] mt-4 text-lg">
        I keep your websites and applications fast, secure, and reliable long-term — handling updates, bug fixes, performance boosts, security patches, content refreshes, and scalability improvements. With modern tools and best practices, I minimize downtime, extend product life, and adapt to new needs — so you can focus on your business with total peace of mind.
      </p>
    </motion.div>
  );
}