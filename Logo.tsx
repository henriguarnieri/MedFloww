import { Brain } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6] via-[#A855F7] to-[#34D399] shadow-[0_0_20px_rgba(139,92,246,0.5)]">
        <Brain className="h-4.5 w-4.5 text-white" strokeWidth={2.25} />
      </div>
      <span className="text-lg font-semibold tracking-tight text-white">
        MedFlow
      </span>
    </div>
  );
}
