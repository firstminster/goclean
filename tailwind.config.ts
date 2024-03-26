import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: '1440px',
      contentContainer: '1140px',
      containerSmall: '1024px',
      containerxs: '768px'
    },
    screens: {
      xs: '320px',
      sm: '375px',
      sml: '500px',
      md: '667px',
      mdl: '768px',
      lg: '960px',
      lgl: '1024px',
      xl: '1280px'
    },
    fontFamily: {
      bodyFont: ["Montserrat", "sans-serif"],
      titleFont: ["Inter", 'sans-serif']
      // titleFont: ["Space Mono", 'monospace']
    },
    boxShadow: {
      navbarShadow: '0 10px 30px -10px rgba(2,12,27,0.7)'
    },
    colors: {
      bodyColor: '#0A192F',
      textGreen: '#078320',
      textLight: '#ccd6f6',
      textDark: '#8892b0',
      textBlue: '#1c7bfd',
      hoverColor: 'rgba(100, 255, 218, 0.1)'
    }

  },
  plugins: [],
};
export default config;


