/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0B",
        ink: "#F2F2F4",
        muted: "#9A9AA7",
        line: "rgba(255,255,255,0.08)",
        glass: "rgba(255,255,255,0.035)",
        glassStrong: "rgba(255,255,255,0.06)",
        blueNeon: "#3E8BFF",
        blueSoft: "#7FB2FF",
        purpleNeon: "#A855F7",
        purpleSoft: "#C89BFF",
        greenNeon: "#34E29A",
        greenSoft: "#7CF0BE",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px) rotate(-1.2deg)" },
          "50%": { transform: "translateY(-14px) rotate(0.6deg)" },
        },
        floaty2: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.35 },
        },
        shine: {
          "0%": { left: "-60%" },
          "45%, 100%": { left: "130%" },
        },
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
        floaty2: "floaty2 4.5s ease-in-out infinite",
        pulseDot: "pulseDot 1.8s infinite",
        shine: "shine 3.2s infinite",
      },
    },
  },
  plugins: [],
};
