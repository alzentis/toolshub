"use client";

import { motion } from "framer-motion";
import type { Tool } from "@/lib/tools";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type ToolCardProps = {
  tool: Tool;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <motion.div variants={cardVariants}>
      <Link href={tool.href} className="block group">
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="h-40 w-full flex flex-col items-center justify-center text-center p-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground shadow-lg rounded-xl border-2">
            <CardContent className="p-0 flex flex-col items-center justify-center gap-2">
              <tool.icon className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
              <p className="font-semibold text-sm">{tool.name}</p>
            </CardContent>
          </Card>
        </motion.div>
      </Link>
    </motion.div>
  );
}
