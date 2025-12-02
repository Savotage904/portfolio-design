"use client"; // Obbligatorio per le animazioni in Next.js

import { motion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Parte invisibile e 20px più in basso
      whileInView={{ opacity: 1, y: 0 }} // Quando entra nello schermo diventa visibile
      viewport={{ once: true, margin: "-50px" }} // L'animazione parte un po' prima
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }} // Dura 0.5 secondi
    >
      {children}
    </motion.div>
  );
}