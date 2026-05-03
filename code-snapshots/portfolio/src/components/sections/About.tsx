"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const blobY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      <motion.div
        style={{ y: blobY }}
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-blob"
      />
      <motion.div
        style={{ y: blobY }}
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent-2/20 blur-[120px] animate-blob"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
        <motion.div style={{ y }} className="relative aspect-[3/4] max-w-md">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent via-accent-2 to-pink-400 blur-2xl opacity-40" />
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border bg-surface">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-accent-2/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-9xl text-foreground/20">
                W
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs font-mono text-muted">
              <span>est. 1998</span>
              <span>// Toronto, ON</span>
            </div>
          </div>
        </motion.div>

        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-4">
            About
          </p>
          <h2 className="font-display text-5xl md:text-7xl mb-8 leading-tight">
            A developer who <span className="italic text-gradient">cares</span>{" "}
            about the details.
          </h2>
          <div className="space-y-5 text-lg text-muted leading-relaxed">
            <p>
              I&rsquo;m William, a web developer based in Toronto. I love
              shipping things on the web that feel polished, fast, and a little
              bit alive.
            </p>
            <p>
              I split my time between writing TypeScript and obsessing over
              easing curves. I&rsquo;ve worked across startups and studios on
              everything from design systems to real-time collaboration tools
              to the occasional generative art experiment.
            </p>
            <p>
              When I&rsquo;m not in front of a screen, you&rsquo;ll find me
              brewing pour-over, wandering record stores, or losing at chess.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { label: "Years building", value: "7+" },
              { label: "Coffees / day", value: "3" },
              { label: "Side projects", value: "∞" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
