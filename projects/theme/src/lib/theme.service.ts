/**
 * Import required Angular dependencies and theme interface
 */
import { InjectionToken } from '@angular/core';
import { gandumTheme } from './theme.interface';

/**
 * Default empty theme configuration
 */
export const DEFAULT_THEME: gandumTheme = {
  typography: 'sans-serif',
  colors: {
    text: '#000',
    background: '#fff',
    border: '#ccc',
    icon: '#555',
    error: '#f00',
  },
  button: {
    text: 'text-white',
    hover: 'bg-blue-600',
    hoverText: 'text-white',
    active: 'bg-blue-700',
    activeText: 'text-white',
    disabled: 'bg-gray-400',
  },
  input: {
    background: 'bg-white',
    text: 'text-black',
    placeholder: 'text-gray-500',
    border: 'border-gray-300',
    focus: 'border-blue-500',
  },
};

/**
 * Injection token for providing theme configuration throughout the application
 */
export const gandum_THEME = new InjectionToken<gandumTheme>('gandum_THEME');

/**
 * Provider function to configure gandum theme
 * @param theme - Partial theme configuration to override defaults
 * @returns Provider configuration object
 */
export function providegandum(theme: Partial<gandumTheme> = {}) {
  return {
    provide: gandum_THEME,
    useValue: { ...DEFAULT_THEME, ...theme },
  };
}
