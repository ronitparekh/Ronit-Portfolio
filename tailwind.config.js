/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* ---------------- FONTS ---------------- */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        satoshi: ["Satoshi", "Inter", "system-ui", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        poppins: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },

      /* ---------------- COLORS ---------------- */
      colors: {
        bg: "#0b0b0b",
        card: "#111111",
        border: "#1f1f1f",
        textPrimary: "#ffffff",
        textSecondary: "#b5b5b5",
      },

      /* ---------------- RADIUS ---------------- */
      borderRadius: {
        pill: "9999px",
      },

      /* ---------------- KEYFRAMES ---------------- */
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          // With `gap-4` between the two duplicated groups, subtract half the gap
          // so the loop point remains seamless.
          "100%": { transform: "translateX(calc(-50% - 0.5rem))" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(calc(-50% - 0.5rem))" },
          "100%": { transform: "translateX(0)" },
        },
      },

      /* ---------------- ANIMATIONS ---------------- */
      animation: {
        marquee: "marquee 40s linear infinite",
        marqueeReverse: "marqueeReverse 45s linear infinite",
      },
    },
  },
  plugins: [],
};
