"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Layers } from "lucide-react";

const cards = [
  { tag: "Cardiologia", q: "Qual valva impede refluxo para o átrio esquerdo?", done: true },
  { tag: "Neuroanatomia", q: "Origem real do nervo troclear (IV par)?", done: true },
  { tag: "Farmacologia", q: "Mecanismo de ação da varfarina?", done: false },
];

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Ambient glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-[#3B82F6]/20 via-[#A855F7]/20 to-[#34D399]/10 blur-3xl" />

      <div className="relative space-y-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.tag}
            initial={{ opacity: 0, y: 24, x: i % 2 === 0 ? -8 : 8 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            style={{ marginLeft: i * 14 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/60">
                {card.tag}
              </span>
              {card.done ? (
                <CheckCircle2 className="h-4 w-4 text-[#34D399]" />
              ) : (
                <Circle className="h-4 w-4 text-white/30" />
              )}
            </div>
            <p className="text-sm leading-relaxed text-white/85">{card.q}</p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginLeft: 42 }}
          className="flex w-fit items-center gap-2 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-2 text-xs font-medium text-[#7DB6FF] shadow-[0_0_24px_rgba(59,130,246,0.25)]"
        >
          <Layers className="h-3.5 w-3.5" />
          312 flashcards nesta disciplina
        </motion.div>
      </div>
    </div>
  );
}
