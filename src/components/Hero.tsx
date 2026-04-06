"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { profile } from "@/data/profile";

const TYPING_SPEED = 80;
const ERASING_SPEED = 40;
const PAUSE_DURATION = 2000;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const currentText = profile.typingTexts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isErasing) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setIsErasing(true), PAUSE_DURATION);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, ERASING_SPEED);
      } else {
        setIsErasing(false);
        setTextIndex((prev) => (prev + 1) % profile.typingTexts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isErasing, textIndex]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particles / floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/20"
            style={{
              width: (i % 3) * 2 + 3 + "px",
              height: (i % 3) * 2 + 3 + "px",
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
        {/* Large glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/15 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-[60px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto"
      >
        {/* Avatar with neon ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Animated neon ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #a855f7, #c084fc, #818cf8, #a855f7)",
                padding: "3px",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-[#0a0a0a]" />
            </motion.div>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full pulse-glow" />
            {/* Avatar placeholder */}
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center text-4xl md:text-5xl font-bold text-white">
              DM
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-purple-400 text-sm md:text-base font-medium tracking-widest uppercase mb-2">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-2">
            {profile.nameEn}
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light tracking-wide">
            {profile.name}
          </p>
        </motion.div>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 h-12 flex items-center justify-center"
        >
          <span className="gradient-text text-xl md:text-2xl lg:text-3xl font-bold">
            {displayText}
          </span>
          <span className="typing-cursor ml-1 text-purple-400 text-2xl md:text-3xl">|</span>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(168, 85, 247, 0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(168, 85, 247, 0.4)";
            }}
          >
            Связаться со мной
          </a>
          <a
            href="/resume.pdf"
            className="group px-8 py-3 rounded-full font-semibold text-purple-400 border border-purple-500/50 hover:border-purple-400 hover:text-white hover:bg-purple-500/10 transition-all duration-300"
          >
            Скачать резюме
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-purple-400/60"
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
