/**
 * Import required Angular dependencies and theme interface
 */
import { InjectionToken } from '@angular/core';
import { GandamTheme } from './theme.interface';

/**
 * Default empty theme configuration
 */
export const DEFAULT_THEME: GandamTheme = {};

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