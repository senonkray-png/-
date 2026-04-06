"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, GitFork, Link, Mail, MessageCircle, ArrowUpRight, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

const socialLinks = [
  {
    icon: MessageCircle,
    label: "Telegram",
    href: profile.contacts.telegram,
    color: "from-blue-500/20 to-blue-600/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${profile.contacts.email}`,
    color: "from-purple-500/20 to-purple-600/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
  },
  {
    icon: GitFork,
    label: "GitHub",
    href: profile.contacts.github,
    color: "from-gray-500/20 to-gray-600/20",
    border: "border-gray-500/30",
    text: "text-gray-400",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    href: profile.contacts.linkedin,
    color: "from-blue-600/20 to-blue-700/20",
    border: "border-blue-600/30",
    text: "text-blue-500",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-purple-500/30 max-w-32" />
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <Send size={16} className="text-purple-400" />
          </div>
          <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
            Контакты
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-purple-500/30 max-w-32" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
        >
          Готов к{" "}
          <span className="gradient-text">сотрудничеству</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Ищете AI-архитектора для вашего проекта? Давайте обсудим, как я могу помочь трансформировать ваш бизнес с помощью AI.
        </motion.p>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <a
            href={profile.contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-lg transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(168, 85, 247, 0.7), 0 0 120px rgba(168, 85, 247, 0.3)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(168, 85, 247, 0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <MessageCircle size={22} />
            Написать в Telegram
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {socialLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-br ${link.color} border ${link.border} ${link.text} hover:scale-105 transition-all duration-300 backdrop-blur-sm`}
              >
                <Icon size={18} />
                <span className="font-medium text-sm">{link.label}</span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-white/5 pt-8"
        >
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Denis Milev · Built with Next.js & ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
}
