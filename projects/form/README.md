# GandamUI Form Library

A powerful and flexible form handling library for Angular applications.

## Installation

Install the library using npm:

```bash
npm install @gandam/form
```

## Tailwind CSS Configuration

GandamUI Form Library is built with Tailwind CSS for styling. To properly use the library with Tailwind CSS, you need to configure your `tailwind.config.js` as follows:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}", // Scan your application files
    "./node_modules/@gandam/**/*.{html,ts,js,mjs}", // Scan GandamUI components
  ],
  theme: {
    extend: {}, // Add your custom theme extensions here
  },
  plugins: [], // Add any required Tailwind plugins here
};
```

### Configuration Explanation

#### Content Paths

- `./src/**/*.{html,ts,js,jsx,tsx}`: Scans all your application source files for Tailwind classes
- `./node_modules/@gandam/**/*.{html,ts,js,jsx,tsx,mjs}`: Ensures Tailwind processes styles in GandamUI components

#### Theme Customization

Use the `theme.extend` section to customize or override default Tailwind styles. This ensures compatibility with GandamUI components while allowing for your own styling preferences.

#### Plugins

Add any Tailwind plugins that enhance your development experience or provide additional utilities.

### Important Notes

- Always include the GandamUI path in your content configuration to ensure proper styling
- Avoid overriding base styles that might affect GandamUI components
- Keep your Tailwind configuration in sync with your project's styling needs

## Theme Customization

GandamUI provides a powerful theme package that allows you to customize the appearance of components. Install the theme package using npm:

```bash
npm install @gandam/theme
```

### Basic Theme Configuration

To customize the theme, import and configure the theme module in your application:

```typescript
import { provideGandam } from "@gandam/theme";

export const appConfig: ApplicationConfig = {
  providers: [
    provideGandam({
      colors: {
        text: "text-gray-900",
        background: "bg-gray-100",
        border: "border-gray-300",
        icon: "text-gray-400",
      },
      input: {
        text: "text-gray-50",
        border: "border-gray-300",
        placeholder: "text-gray-400",
        borderRadius: "rounded-lg shadow-sm",
      },
    }),
  ],
};
```

### Theme Options

The theme package supports customization of various aspects:

- **Colors**: Customize the color palette for components
- **Typography**: Define font families, sizes, and weights
- **Borders**: Customize border styles and radiuses

Refer to the @gandam/theme documentation for detailed customization options.
