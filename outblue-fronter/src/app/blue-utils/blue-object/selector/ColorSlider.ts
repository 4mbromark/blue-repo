export class ColorSlider {
  title: string;
  color: string;
  letter: 'R' | 'G' | 'B' | 'C' | 'M' | 'Y' | 'K' | 'H' | 'S' | 'L';
  min: 0;
  max: 100 | 255 | 360;
  style: string;
  value?: number;
  check?: boolean;
  step?: number;
}
