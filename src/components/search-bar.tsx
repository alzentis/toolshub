"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <Card className="shadow-md rounded-xl border-2">
      <motion.div
        className="relative w-full"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="search tools"
          className="pl-10 w-full bg-transparent focus:bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>
    </Card>
  );
}
