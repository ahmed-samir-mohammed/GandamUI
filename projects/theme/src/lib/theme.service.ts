import { InjectionToken } from '@angular/core';
import { GandamTheme } from './GandamThem';

export const DEFAULT_THEME: GandamTheme = {
  primaryColor: 'bg-slate-800',
  secondaryColor: 'bg-gray-500',
  borderRadius: 'rounded-lg',
};

export const GANDAM_THEME = new InjectionToken<GandamTheme>('GANDAM_THEME');

export function provideGandamTheme(theme: Partial<GandamTheme> = {}) {
  return {
    provide: GANDAM_THEME,
    useValue: { ...DEFAULT_THEME, ...theme },
  };
}


/*
- text color
- bg color
- border color
- typography
- 
*/