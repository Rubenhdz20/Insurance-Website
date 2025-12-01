# Coco Mendoza Seguros - Insurance Website

## Project Overview

This is an insurance agency website for Coco Mendoza Seguros, an Allianz-certified insurance advisor. The website offers information about insurance services including home, auto, health, and retirement insurance products.

**Language:** Spanish (es)
**Target Market:** Insurance customers seeking personalized coverage solutions

## Tech Stack

- **Framework:** Astro 5.16.3
- **Styling:** Tailwind CSS 4.1.17 with Vite integration
- **Fonts:** Inter (body text), Poppins (headings)
- **Package Manager:** npm

## Project Structure

```
InsuranceWeb/
├── src/
│   ├── assets/
│   │   ├── icon/         # Icon assets
│   │   └── logo.png      # Main logo
│   ├── components/
│   │   ├── Header.astro  # Main navigation header with mobile menu
│   │   └── Hero.astro    # Hero section with CTA
│   ├── layouts/
│   │   └── Layout.astro  # Base layout template
│   ├── pages/
│   │   └── index.astro   # Homepage
│   └── styles/
│       └── global.css    # Global styles
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
└── package.json
```

## Design System

### Color Palette

- **Backgrounds:**
  - Beige: `#FAF7F2` (default), `#F5F0E8` (dark)

- **Brand Colors:**
  - Blue Primary: `#2B7EC1`
  - Blue Dark: `#003E7A`
  - Blue Light: `#E3F2FD`

- **Text Colors:**
  - Heading: `#1A1A1A`
  - Body: `#4A4A4A`
  - Light: `#666666`

- **Accents:**
  - WhatsApp: `#25D366`
  - Border: `#E5E5E5`

### Typography

- **Body Font:** Inter (weights: 400, 500, 600)
- **Heading Font:** Poppins (weights: 600, 700)

### Spacing & Layout

- **Max Container Width:** 1200px
- **Standard Padding:** 24px (px-6)

## Key Features

### Current Implementation

1. **Responsive Header** (src/components/Header.astro)
   - Sticky navigation
   - Hamburger menu for mobile
   - Animated menu toggle
   - Navigation links: Inicio, Servicios, Nosotros, Contacto
   - CTA button for "Cotizar"

2. **Hero Section** (src/components/Hero.astro)
   - Company logo display
   - Main headline and subheadline
   - WhatsApp CTA button for direct contact
   - Allianz certification badge
   - Configurable WhatsApp number and message

### WhatsApp Integration

The Hero component includes WhatsApp contact functionality:
- **Number:** Currently set to `521234567890` (needs to be replaced)
- **Default Message:** "Hola, me interesa obtener información sobre seguros"
- Update the `whatsappNumber` variable in src/components/Hero.astro:2

## Development

### Setup

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm preview
```

## Important Notes for AI Assistants

### Code Style & Preferences

1. **Spanish Content:** All user-facing content should be in Spanish
2. **Tailwind Classes:** Use the custom design tokens defined in tailwind.config.mjs
3. **Component Structure:** Follow Astro component patterns with frontmatter, markup, styles, and scripts
4. **Responsive Design:** Mobile-first approach, ensure components work on all screen sizes

### Known Placeholders to Update

- [ ] WhatsApp number in src/components/Hero.astro:2 (currently `521234567890`)
- [ ] Any additional service sections to be added
- [ ] Company contact information
- [ ] SEO meta tags and descriptions

### Design Patterns

- Use `max-w-container mx-auto` for content containers
- Use `px-6` for horizontal padding
- Use `py-12` for vertical section spacing
- Sticky header with `sticky top-0 z-50`
- Border styling: `border-border/30` for subtle borders

### Navigation Structure

The site is designed as a single-page application with anchor links:
- `#servicios` - Services section (to be implemented)
- `#nosotros` - About section (to be implemented)
- `#contacto` - Contact section (to be implemented)
- `#cotizar` - Quote section (to be implemented)

### Brand Guidelines

- Always reference Allianz as the backing insurance provider
- Maintain professional, trustworthy tone
- Focus on personalized service and customer security
- Key insurance products: Hogar (Home), Auto, Salud (Health), Retiro (Retirement)

## Git Status

Current branch: main

Recent changes:
- Added Tailwind CSS configuration
- Created Header and Hero components
- Set up responsive navigation
- Implemented WhatsApp integration
- Added custom design system

## Next Steps

Potential features to implement:
1. Services section with insurance product details
2. About section (Nosotros) with company information
3. Contact form section
4. Quote calculator/form (Cotizar)
5. Testimonials section
6. FAQ section
7. Footer with additional links and information
8. SEO optimization (meta tags, Open Graph, schema markup)
