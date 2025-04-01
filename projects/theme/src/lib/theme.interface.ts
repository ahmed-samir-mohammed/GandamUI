export interface BaseColors {
  text?: string;
  background?: string;
  border?: string;
  icon?: string;
  error?: string;
}

export interface ButtonColors {
  default?: string;
  text?: string;
  hover?: string;
  hoverText?: string;
  active?: string;
  activeText?: string;
  disabled?: string;
}

export interface InputColors {
  default?: string;
  background?: string;
  text?: string;
  placeholder?: string;
  border?: string;
  borderRadius?: string;
  focus?: string;
}

export interface GandamTheme {
  borderRadius?: string;
  typography?: string;
  colors?: BaseColors;
  button?: ButtonColors;
  input?: InputColors;
}
