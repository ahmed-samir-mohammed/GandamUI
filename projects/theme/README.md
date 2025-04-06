# @gandum/theme

A powerful and flexible theming system for Angular applications using gandum UI components.

## Installation

Install the theme package using npm:

```bash
npm install @gandum/theme
```

## Basic Setup

1. Import the theme module in your app.module.ts:

```typescript
import { providegandum } from "@gandum/theme";

export const appConfig: ApplicationConfig = {
  providers: [
    providegandum({
      // your theme configuration
    }),
  ],
};
```

2. Configure your Tailwind CSS setup by extending the theme configuration in tailwind.config.js:

```javascript
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/@gandum/**/*.{html,ts,mjs}"],
  theme: {
    extend: {
      // Your custom theme configurations
    },
  },
};
```

## Theme Customization

### Theme Interface

The `gandumTheme` interface provides a comprehensive set of customization options:

```typescript
import { gandumTheme } from "@gandum/theme";

export const myTheme: gandumTheme = {
  // Global Typography
  typography: string,

  // Global Colors
  colors: {
    text: string, // Default text color
    background: string, // Default background color
    border: string, // Default border color
    icon: string, // Default icon color
    error: string, // Error state color
  },

  // Button Customization
  button: {
    text: string, // Button text color
    background: string, // Button background color
    hover: string, // Hover state background
    hoverText: string, // Hover state text color
    active: string, // Active state background
    activeText: string, // Active state text color
    disabled: string, // Disabled state color
    border: string, // Button border color
    borderRadius: string, // Button border radius
    focus: string, // Focus state color
  },

  // Input Field Customization
  input: {
    background: string, // Input background color
    text: string, // Input text color
    placeholder: string, // Placeholder text color
    border: string, // Input border color
    borderRadius: string, // Input border radius
    focus: string, // Focus state color
  },

  // Card Component Customization
  card: {
    background: string, // Card background color
    hText: string, // Card heading text color
    pText: string, // Card paragraph text color
    border: string, // Card border color
    borderRadius: string, // Card border radius
  },
};
```

### Example Usage

Here's how to create a custom theme:

```typescript
import { gandumTheme } from "@gandum/theme";

export const myTheme: gandumTheme = {
  typography: "font-sans",
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
};
```

## Additional Resources

- [gandum UI Documentation](https://gandumui.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Angular Documentation](https://angular.dev)
