"use client";

import { motion } from "framer-motion";

export default function DesignSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold">DESIGN</h1>
      <p className="text-[#9C9C9C] mt-2 text-lg">
        I create clean, modern, user-focused interfaces that perform beautifully
        on every device. Using Tailwind CSS, React, and Next.js, I build
        intuitive layouts, responsive designs, smooth animations, and
        pixel-perfect visuals. From sleek landing pages and interactive
        dashboards to full university portals, my designs prioritize
        accessibility, performance, and brand identity — delivering digital
        experiences users love right away.
      </p>
    </motion.div>
  );
}
