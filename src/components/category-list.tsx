"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CategoryListProps = {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

export function CategoryList({
  categories,
  activeCategory,
  setActiveCategory,
}: CategoryListProps) {
  return (
    <Card className="shadow-md rounded-xl border-2">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <motion.button
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "w-full text-left p-3 rounded-lg transition-colors duration-300 border",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent hover:bg-primary/10 hover:border-primary/50"
                )}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {category}
              </motion.button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
