/**
 * Import required Angular dependencies and theme interface
 */
import { InjectionToken } from '@angular/core';
import { GandamTheme } from './theme.interface';

/**
 * Default empty theme configuration
 */
export const DEFAULT_THEME: GandamTheme = {
  borderRadius: '4px',
  typography: 'sans-serif',
  colors: {
    text: '#000',
    background: '#fff',
    border: '#ccc',
    icon: '#555',
    error: '#f00',
  },
  button: {
    default: 'bg-blue-500',
    text: 'text-white',
    hover: 'bg-blue-600',
    hoverText: 'text-white',
    active: 'bg-blue-700',
    activeText: 'text-white',
    disabled: 'bg-gray-400',
  },
  input: {
    default: 'border border-gray-300',
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
export const GANDAM_THEME = new InjectionToken<GandamTheme>('GANDAM_THEME');

/**
 * Provider function to configure Gandam theme
 * @param theme - Partial theme configuration to override defaults
 * @returns Provider configuration object
 */
export function provideGandam(theme: Partial<GandamTheme> = {}) {
  return {
    provide: GANDAM_THEME,
    useValue: { ...DEFAULT_THEME, ...theme },
  };
}
