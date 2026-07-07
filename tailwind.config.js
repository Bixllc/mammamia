/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#14532a",
          dark: "#0d3d1f",
        },
        green: {
          mid: "#1f7a3c",
        },
        cream: {
          DEFAULT: "#fbf7ee",
          dark: "#eee6d3",
        },
        page: "#f6f0e4",
        gold: "#f6c94a",
        tomato: {
          DEFAULT: "#e0574d",
          hover: "#c8443b",
        },
        ink: "#1c3b28",
        muted: "#5a6f5f",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        display: ["'Cormorant Garamond'", "'Great Vibes'", "serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "16px",
        "card-lg": "28px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(20, 83, 42, 0.08), 0 12px 32px rgba(20, 83, 42, 0.12)",
        lift: "0 4px 14px rgba(20, 83, 42, 0.12), 0 20px 48px rgba(20, 83, 42, 0.16)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
