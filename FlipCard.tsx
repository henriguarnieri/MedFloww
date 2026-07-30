"use client";

import { motion } from "framer-motion";
import { RotateCw, Sparkles } from "lucide-react";
import { useState } from "react";

export function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group [perspective:1600px]"
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
    >
      <motion.div
        className="relative h-[340px] w-full max-w-md cursor-pointer [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl [backface-visibility:hidden]">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-3 py-1 text-xs font-medium text-[#7DB6FF]">
              Anatomia · Cabeça e Pescoço
            </span>
            <RotateCw className="h-4 w-4 text-white/30" />
          </div>
          <p className="text-2xl font-medium leading-snug text-white">
            Qual nervo emerge pelo forame infraorbitário?
          </p>
          <span className="text-sm text-white/40">
            Passe o mouse ou toque para virar
          </span>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-[#34D399]/20 bg-gradient-to-br from-[#3B82F6]/10 via-[#A855F7]/10 to-[#34D399]/10 p-8 backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-[#34D399]/30 bg-[#34D399]/10 px-3 py-1 text-xs font-medium text-[#6EE7B7]">
              Resposta
            </span>
            <Sparkles className="h-4 w-4 text-[#6EE7B7]" />
          </div>

          <div className="flex items-center justify-center">
            <svg viewBox="0 0 200 160" className="h-28 w-auto opacity-90">
              <ellipse cx="100" cy="80" rx="70" ry="60" fill="none" stroke="#7DB6FF" strokeWidth="1.5" opacity="0.5" />
              <path d="M40 80 Q70 40 100 45 Q130 40 160 80" fill="none" stroke="#C4B5FD" strokeWidth="2" />
              <circle cx="100" cy="95" r="6" fill="#34D399" />
              <path d="M100 95 L100 130" stroke="#34D399" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="100" cy="95" r="10" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.6">
                <animate attributeName="r" values="10;18;10" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          <p className="text-2xl font-medium leading-snug text-white">
            Nervo infraorbitário <span className="text-[#6EE7B7]">(V2)</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
