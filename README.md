# Coco Mendoza Seguros

Sitio web corporativo para Coco Mendoza Seguros, asesor certificado de seguros Allianz. La plataforma ofrece información sobre servicios de seguros personalizados incluyendo hogar, auto, salud y retiro.

## Tecnologías

- **Framework:** Astro 5.16.3
- **Estilos:** Tailwind CSS 4.1.17
- **Fuentes:** Inter (cuerpo), Poppins (encabezados)
- **Package Manager:** npm

## Estructura del Proyecto

```text
InsuranceWeb/
├── src/
│   ├── assets/
│   │   ├── icon/         # Iconos del sitio
│   │   └── logo.png      # Logo principal
│   ├── components/
│   │   ├── Header.astro  # Navegación principal con menú móvil
│   │   └── Hero.astro    # Sección hero con CTA de WhatsApp
│   ├── layouts/
│   │   └── Layout.astro  # Layout base del sitio
│   ├── pages/
│   │   └── index.astro   # Página principal
│   └── styles/
│       └── global.css    # Estilos globales
├── astro.config.mjs      # Configuración de Astro
├── tailwind.config.mjs   # Configuración de Tailwind
└── package.json
```

## Características

- **Diseño Responsive:** Optimizado para dispositivos móviles y desktop
- **Integración WhatsApp:** Contacto directo desde el hero
- **Navegación Sticky:** Header fijo con menú hamburguesa móvil
- **Sistema de Diseño Personalizado:** Paleta de colores y tipografía definida
- **Certificación Allianz:** Badge de certificación visible

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando           | Acción                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Instala las dependencias                        |
| `npm run dev`     | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Genera el sitio de producción en `./dist/`      |
| `npm run preview` | Vista previa del build de producción            |

## Configuración

### WhatsApp

Para actualizar el número de WhatsApp, edita la variable `whatsappNumber` en `src/components/Hero.astro`:

```astro
const whatsappNumber = "521234567890"; // Actualizar con número real
```

### Paleta de Colores

El sitio utiliza colores personalizados definidos en `tailwind.config.mjs`:

- **Fondos:** Beige (`#FAF7F2`)
- **Primario:** Azul (`#2B7EC1`)
- **Oscuro:** Azul Oscuro (`#003E7A`)
- **Acento:** WhatsApp (`#25D366`)

## Estructura de Navegación

El sitio está diseñado como una aplicación de página única (SPA) con enlaces de ancla:

- `#servicios` - Sección de servicios
- `#nosotros` - Sección acerca de
- `#contacto` - Sección de contacto
- `#cotizar` - Formulario de cotización

## Productos de Seguro

- Seguro de Hogar
- Seguro de Auto
- Seguro de Salud
- Seguro de Retiro

## Licencia

© 2025 Coco Mendoza Seguros. Todos los derechos reservados.
