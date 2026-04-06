"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <User size={16} className="text-purple-400" />
          </div>
          <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
            О себе
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent" />
        </div>

        {/* Glass card */}
        <div className="glass-card p-8 md:p-10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.15)]">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/40 to-indigo-600/40 flex items-center justify-center flex-shrink-0">
              <Sparkles size={20} className="text-purple-300" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Профиль
              </h2>
              <p className="text-purple-400 font-medium">{profile.title}</p>
            </div>
          </div>

          {/* About text */}
          <div className="space-y-4">
            {profile.about.split("\n\n").map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="text-white/70 text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-purple-500/20"
          >
            {[
              { label: "Проектов", value: "50+" },
              { label: "Лет опыта", value: "5+" },
              { label: "Клиентов", value: "30+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black gradient-text">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
