"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { tools, categories } from "@/lib/tools";
import { SearchBar } from "@/components/search-bar";
import { CategoryList } from "@/components/category-list";
import { ToolGrid } from "@/components/tool-grid";
import { SmartSuggestion } from "@/components/smart-suggestion";
import Image from "next/image";
import { DotGrid } from "@/components/dot-grid";
import "@/components/dot-grid.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory =
        activeCategory === "All" || tool.category === activeCategory;
      const matchesSearch = tool.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <>
      <header className="bg-gradient-to-r from-[#2c243d] to-[#8c045c] text-white shadow-md py-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="flex items-center justify-start space-x-4">
            <Image
              src="https://placehold.co/50x50.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
              data-ai-hint="logo abstract"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                <span style={{ color: "#EF0493" }}>Tools</span> Hub
              </h1>
              <p className="mt-1 text-md text-gray-300">
                Your one-stop hub for everyday online utilities.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={3}
            gap={20}
            baseColor="#a832b5"
            activeColor="#f542e0"
            proximity={100}
            shockRadius={200}
            shockStrength={2}
            resistance={500}
            returnDuration={0.5}
          />
        </div>
      </header>
      <main className="min-h-screen w-full p-4 sm:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1 space-y-8"
            >
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <CategoryList
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              <SmartSuggestion />
            </motion.div>

            {/* Right Content */}
            <div className="lg:col-span-3">
              <ToolGrid tools={filteredTools} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
