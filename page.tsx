"use client";

import { Inter, Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Brain,
  BookOpen,
  Smartphone,
  Target,
  RefreshCw,
  Check,
  X,
  Play,
  Instagram,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { FlipCard } from "@/components/FlipCard";
import { HeroMockup } from "@/components/HeroMockup";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

const benefits = [
  { icon: Zap, title: "Economize horas criando material", desc: "Decks prontos para usar, sem passar noites montando cartão por cartão." },
  { icon: Brain, title: "Aprenda com repetição espaçada", desc: "Metodologia comprovada que fixa o conteúdo na memória de longo prazo." },
  { icon: BookOpen, title: "Organização por disciplinas", desc: "Tudo separado por matéria, pronto para encaixar na sua rotina de estudo." },
  { icon: Smartphone, title: "Estude em qualquer dispositivo", desc: "Compatível com Anki no computador, celular e tablet." },
  { icon: Target, title: "Revisão eficiente", desc: "Foco no que realmente cai, sem perder tempo com conteúdo irrelevante." },
  { icon: RefreshCw, title: "Atualizações constantes", desc: "Novos decks e correções chegam direto na sua biblioteca." },
];

const steps = [
  { n: "01", title: "Escolha sua disciplina", desc: "Navegue pelo catálogo organizado por área da Medicina." },
  { n: "02", title: "Baixe o deck", desc: "Arquivo pronto, sem edição ou formatação manual." },
  { n: "03", title: "Importe no Anki", desc: "Compatível com Anki Desktop e Mobile em segundos." },
  { n: "04", title: "Comece a revisar", desc: "Repetição espaçada já configurada e pronta para uso." },
];

const others = ["PDFs enormes", "Resumos cansativos", "Revisão passiva", "Conteúdo desorganizado"];
const medflow = ["Flashcards inteligentes", "Organização por módulos", "Revisão ativa", "Muito mais rapidez"];

const included = [
  "Flashcards completos",
  "Ilustrações didáticas",
  "Organização por disciplinas",
  "Organização por módulos",
  "Tags inteligentes",
  "Compatibilidade com Anki Desktop e Mobile",
  "Atualizações",
];

const audience = ["Estudantes de Medicina", "Internato", "Revisão para provas", "Preparação para residência"];

export default function Home() {
  return (
    <main className={`${display.variable} ${body.variable} relative min-h-screen overflow-x-hidden bg-[#09090B] font-[var(--font-body)] text-white`}>
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-[#A855F7]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#34D399]/10 blur-[120px]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#09090B]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#beneficios" className="transition hover:text-white">Benefícios</a>
            <a href="#como-funciona" className="transition hover:text-white">Como funciona</a>
            <a href="#demonstracao" className="transition hover:text-white">Demonstração</a>
            <a href="/login" className="transition hover:text-white">Entrar</a>
          </nav>
          <a
            href="#cta-final"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Começar agora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-24 pt-20 md:grid-cols-2 md:pt-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
          >
            MedFlow · Estude Medicina de forma inteligente
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-[var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl"
          >
            Pare de perder horas{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#34D399] bg-clip-text text-transparent">
              criando flashcards.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-white/60"
          >
            Flashcards prontos, organizados e ilustrados para estudantes de Medicina que desejam aprender mais em menos tempo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#cta-final"
              className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#A855F7] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition hover:shadow-[0_0_45px_rgba(139,92,246,0.5)]"
            >
              Quero começar agora
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#demonstracao"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/30 hover:text-white"
            >
              <Play className="h-3.5 w-3.5" />
              Ver demonstração
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroMockup />
        </motion.div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
            Feito para quem estuda Medicina de verdade
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#7DB6FF] transition group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
            Como funciona
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#09090B] font-[var(--font-display)] text-sm font-bold text-white/70">
                  {s.n}
                </div>
                <h3 className="text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Demonstração */}
      <section id="demonstracao" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="mb-12 max-w-lg">
            <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
              Veja um flashcard MedFlow de perto
            </h2>
            <p className="mt-4 text-white/50">
              Passe o mouse ou toque no cartão para revelar a resposta.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <FlipCard />
        </Reveal>
      </section>

      {/* Diferenciais */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
            A diferença é clara
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-white/40">
                Outros materiais
              </h3>
              <ul className="space-y-4">
                {others.map((o) => (
                  <li key={o} className="flex items-center gap-3 text-white/50">
                    <X className="h-4 w-4 shrink-0 text-red-400/70" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-[#34D399]/20 bg-gradient-to-br from-[#3B82F6]/[0.06] via-[#A855F7]/[0.06] to-[#34D399]/[0.06] p-8 shadow-[0_0_40px_-10px_rgba(52,211,153,0.15)]">
              <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-[#6EE7B7]/80">
                MedFlow
              </h3>
              <ul className="space-y-4">
                {medflow.map((m) => (
                  <li key={m} className="flex items-center gap-3 font-medium text-white">
                    <Check className="h-4 w-4 shrink-0 text-[#34D399]" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
            O que você recebe
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => (
            <Reveal key={item} delay={i * 0.04}>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition hover:border-white/20 hover:bg-white/[0.04]">
                <Check className="h-4 w-4 shrink-0 text-[#7DB6FF]" />
                <span className="text-sm text-white/80">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Para quem é */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
            Para quem é o MedFlow
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-4">
          {audience.map((a, i) => (
            <Reveal key={a} delay={i * 0.05}>
              <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/80">
                {a}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-16 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3B82F6]/15 via-[#A855F7]/10 to-[#34D399]/15 blur-2xl" />
            <div className="relative">
              <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
                Comece hoje mesmo.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-white/60">
                Economize centenas de horas criando seus próprios flashcards. Deixe esse trabalho com o MedFlow e foque no que realmente importa: aprender Medicina.
              </p>
              <a
                href="/login"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#34D399] px-8 py-4 text-sm font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.4)] transition hover:shadow-[0_0_60px_rgba(139,92,246,0.6)]"
              >
                Quero acessar o MedFlow
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <Logo />
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            <a href="#" className="transition hover:text-white/70">Política de Privacidade</a>
            <a href="#" className="transition hover:text-white/70">Termos de Uso</a>
            <a href="#" className="transition hover:text-white/70">Contato</a>
            <a href="#" className="flex items-center gap-1.5 transition hover:text-white/70">
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
