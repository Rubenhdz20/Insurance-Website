/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        beige: {
          default: '#FAF7F2',
          dark: '#F5F0E8',
        },
        
        // Brand colors
        blue: {
          primary: '#2B7EC1',
          dark: '#003E7A',
          light: '#E3F2FD',
        },
        
        // Text colors
        text: {
          heading: '#1A1A1A',
          body: '#4A4A4A',
          light: '#666666',
        },
        
        // Accents
        whatsapp: '#25D366',
        border: '#E5E5E5',
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      
      boxShadow: {
        'sm': '0 2px 4px rgba(0,0,0,0.06)',
        'md': '0 2px 8px rgba(0,0,0,0.08)',
        'lg': '0 4px 12px rgba(0,0,0,0.15)',
      },
      
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}