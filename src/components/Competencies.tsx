"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Code2, Zap, Server, MessageSquare, BarChart3, Layers } from "lucide-react";
import { profile } from "@/data/profile";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  Zap,
  Server,
  MessageSquare,
  BarChart3,
  Layers,
};

export default function Competencies() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-4"
      >
        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
          <Layers size={16} className="text-purple-400" />
        </div>
        <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
          Компетенции
        </span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl font-black text-white mb-12"
      >
        Ключевые{" "}
        <span className="gradient-text">навыки</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {profile.competencies.map((comp, i) => {
          const Icon = iconMap[comp.icon] || Layers;
          return (
            <motion.div
              key={comp.category}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="glass-card p-6 group cursor-default transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
            >
              {/* Icon + Category */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/40 to-indigo-600/40 flex items-center justify-center group-hover:from-purple-500/60 group-hover:to-indigo-500/60 transition-all duration-300">
                  <Icon size={18} className="text-purple-300" />
                </div>
                <h3 className="text-white font-bold text-base">{comp.category}</h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-2">
                {comp.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
