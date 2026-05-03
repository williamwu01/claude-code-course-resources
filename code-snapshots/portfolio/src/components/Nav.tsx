"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#timeline", label: "Journey" },
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 100], [0, 12]);
  const bg = useTransform(scrollY, [0, 100], ["rgba(8,8,11,0)", "rgba(8,8,11,0.7)"]);

  return (
    <motion.nav
      style={{
        backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
        backgroundColor: bg,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display text-2xl tracking-tight">
          W<span className="text-gradient">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex px-4 py-2 rounded-full border border-border text-sm hover:border-accent hover:text-accent transition-all duration-300"
        >
          Let&rsquo;s talk
        </a>
      </div>
    </motion.nav>
  );
}
