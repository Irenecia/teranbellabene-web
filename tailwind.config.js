/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#f5bb85",
        "surface-container": "#efedec",
        tertiary: "#5c4e3f",
        "surface-dim": "#dbdad8",
        "on-secondary-container": "#586673",
        outline: "#837469",
        secondary: "#52606c",
        "secondary-fixed-dim": "#b9c8d7",
        "tertiary-fixed-dim": "#d7c3b0",
        "primary-container": "#8c5f31",
        "on-error": "#ffffff",
        "primary-fixed": "#ffdcbf",
        "inverse-primary": "#f5bb85",
        "tertiary-fixed": "#f4dfcb",
        "inverse-on-surface": "#f2f0ee",
        "on-background": "#1b1c1b",
        "on-tertiary-fixed-variant": "#524436",
        "on-primary-fixed-variant": "#653e12",
        "surface-variant": "#e4e2e0",
        "surface-container-low": "#f5f3f1",
        primary: "#70471c",
        "surface-container-high": "#eae8e6",
        error: "#ba1a1a",
        "on-primary-container": "#ffe4ce",
        "on-error-container": "#93000a",
        "error-container": "#ffdad6",
        "secondary-fixed": "#d5e4f3",
        surface: "#fbf9f7",
        "on-tertiary-container": "#fbe6d2",
        "on-secondary": "#ffffff",
        "on-primary": "#ffffff",
        "on-secondary-fixed-variant": "#3a4854",
        "surface-container-highest": "#e4e2e0",
        "on-surface-variant": "#50453b",
        "tertiary-container": "#766656",
        "secondary-container": "#d5e4f3",
        "surface-container-lowest": "#ffffff",
        background: "#fbf9f7",
        "surface-tint": "#805528",
        "on-primary-fixed": "#2d1600",
        "outline-variant": "#d5c3b6",
        "on-tertiary-fixed": "#241a0e",
        "on-tertiary": "#ffffff",
        "surface-bright": "#fbf9f7",
        "inverse-surface": "#30302f",
        "on-surface": "#1b1c1b",
        "on-secondary-fixed": "#0e1d28"
      },
      spacing: {
        unit: "8px",
        "section-gap": "120px",
        "margin-edge": "40px",
        "container-max": "1200px",
        gutter: "24px"
      },
      fontFamily: {
        "headline-lg": ["Newsreader", "serif"],
        caption: ["Manrope", "sans-serif"],
        "label-md": ["Manrope", "sans-serif"],
        "headline-md": ["Newsreader", "serif"],
        "headline-xl": ["Newsreader", "serif"],
        "body-lg": ["Manrope", "sans-serif"],
        "body-md": ["Manrope", "sans-serif"]
      },
      fontSize: {
        "headline-lg": ["36px", { lineHeight: "1.2", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "1.4", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "400" }],
        "headline-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    }
  },
  plugins: []
};
