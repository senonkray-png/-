"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, GitBranch } from "lucide-react";
import { profile } from "@/data/profile";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 max-w-4xl mx-auto">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-4"
      >
        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
          <GitBranch size={16} className="text-purple-400" />
        </div>
        <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
          Опыт
        </span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl font-black text-white mb-16"
      >
        Реализованные{" "}
        <span className="gradient-text">проекты</span>
      </motion.h2>

      <div className="relative">
        {/* Vertical glowing line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          style={{ transformOrigin: "top" }}
          className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/80 via-purple-400/40 to-transparent"
        />

        <div className="space-y-12">
          {profile.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Pulsing dot */}
              <div className="relative flex-shrink-0 mt-1">
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600/60 to-indigo-600/60 border-2 border-purple-500/70 flex items-center justify-center"
                  style={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                >
                  <Briefcase size={12} className="text-purple-200 md:hidden" />
                  <Briefcase size={14} className="text-purple-200 hidden md:block" />
                </motion.div>
              </div>

              {/* Content card */}
              <div className="flex-1 glass-card p-6 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500">
                {/* Year */}
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={12} className="text-purple-400" />
                  <span className="text-purple-400 text-xs font-semibold tracking-wider">
                    {exp.year}
                  </span>
                </div>

                {/* Title + Company */}
                <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                  {exp.title}
                </h3>
                <p className="text-purple-400/80 text-sm font-medium mb-3">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-medium text-purple-300 bg-purple-500/15 border border-purple-500/25"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
