# MedFlow Flashcards — Landing Page

Landing page em **Next.js 14 (App Router) + Tailwind CSS + Framer Motion + Lucide React**, pronta para deploy no Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Deploy no Vercel

### Opção 1 — via GitHub (recomendado)
1. Crie um repositório no GitHub e suba esta pasta:
   ```bash
   git init
   git add .
   git commit -m "MedFlow landing page"
   git branch -M main
   git remote add origin <url-do-seu-repositorio>
   git push -u origin main
   ```
2. Acesse [vercel.com/new](https://vercel.com/new), clique em **Import Project** e selecione o repositório.
3. O Vercel detecta automaticamente que é um projeto Next.js — não é preciso configurar nada. Clique em **Deploy**.

### Opção 2 — via Vercel CLI
```bash
npm install -g vercel
vercel
```
Siga as instruções no terminal (login, nome do projeto, etc). Ao final, o Vercel te dará uma URL pública.

## Estrutura do projeto

```
app/
  layout.js       → fontes (Space Grotesk, Inter, JetBrains Mono) e metadata
  page.js         → composição de todas as seções
  globals.css      → estilos base e classes utilitárias (glass, botões, gradientes)
components/
  Nav.jsx
  Hero.jsx
  ValueSection.jsx       (Seção 1)
  FeatureGrid.jsx        (Seção 2)
  ChecklistSection.jsx   (Seção 3)
  FlipCardDemo.jsx       (Seção 4 — flashcard interativo)
  StatsSection.jsx       (Seção 5 — contadores animados)
  AudienceSection.jsx    (Seção 6)
  CompareSection.jsx     (Seção 7)
  DevicesSection.jsx     (Seção 8)
  FinalCTA.jsx
  Footer.jsx
  SynapseBackground.jsx  → fundo animado (canvas) com rede de pontos neon
  Reveal.jsx              → wrapper de animação de entrada (Framer Motion)
```

## Editar conteúdo

- **Textos**: cada seção tem seu próprio arquivo em `components/`, com o texto direto no JSX.
- **Cores**: paleta neon definida em `tailwind.config.js` (`blueNeon`, `purpleNeon`, `greenNeon`, etc).
- **Botão principal**: já preparado para futura integração com Stripe, Hotmart ou Kiwify — basta trocar o `<button>` em `Hero.jsx` e `FinalCTA.jsx` por um `<a href="...">` com o link de checkout.

## Notas técnicas

- Sem `localStorage`/`sessionStorage` — tudo em memória/estado do React.
- Ícones via `lucide-react`.
- Animações de entrada (scroll reveal) e do contador de estatísticas via `framer-motion`.
- Fundo de "sinapses" em `<canvas>`, puramente client-side (`"use client"`), sem custo de bibliotecas extras.
