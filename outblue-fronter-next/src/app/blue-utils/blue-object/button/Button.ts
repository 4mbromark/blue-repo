import { ButtonAlt } from './ButtonAlt';
export class Button {
  type: 'main' | 'line';
  icon?: string;
  title?: string;

  name?: string; // titolo esteso o complementare
  tooltip?: string; // tooltip

  alt?: ButtonAlt;

  tag?: string; // riservato per tags
}
