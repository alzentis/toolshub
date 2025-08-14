"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Tool } from "@/lib/tools";
import { ToolCard } from "./tool-card";

type ToolGridProps = {
  tools: Tool[];
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

export function ToolGrid({ tools }: ToolGridProps) {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <AnimatePresence>
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
