// tslint:disable: max-line-length
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { Config } from '../word/config';
import { Tag } from '../word/tag';
import { ColorSlider } from './../../blue-object/selector/ColorSlider';

export class ColorSelector {
  public static COLOR_SLIDERS_RGB: ColorSlider[] = [
    { title: LanguageLabel.PALETTE_RED, color: Tag.PALETTE_RED, letter: 'R', min: 0, max: 255, style: 'rgb(' + Config.SLIDER + ',0,0);', value: 0, check: true },
    { title: LanguageLabel.PALETTE_GREEN, color: Tag.PALETTE_GREEN, letter: 'G', min: 0, max: 255, style: 'rgb(0,' + Config.SLIDER + ',0);', value: 0, check: false },
    { title: LanguageLabel.PALETTE_BLUE, color: Tag.PALETTE_BLUE, letter: 'B', min: 0, max: 255,  style: 'rgb(0,0,' + Config.SLIDER + ');', value: 0, check: false },
  ];

  public static COLOR_SLIDERS_CMYK: ColorSlider[] = [
    { title: LanguageLabel.PALETTE_CYAN, color: Tag.PALETTE_CYAN, letter: 'C', min: 0, max: 100, style: 'cmyk(' + Config.SLIDER + '%,0%,0%,0%);', value: 0, check: true },
    { title: LanguageLabel.PALETTE_MAGENTA, color: Tag.PALETTE_MAGENTA, letter: 'M', min: 0, max: 100, style: 'cmyk(0%,' + Config.SLIDER + '%,0%,0%);', value: 0, check: false },
    { title: LanguageLabel.PALETTE_YELLOW, color: Tag.PALETTE_YELLOW, letter: 'Y', min: 0, max: 100, style: 'cmyk(0%,0%,' + Config.SLIDER + '%,0%);', value: 0, check: false },
    { title: LanguageLabel.PALETTE_KEY, color: Tag.PALETTE_KEY, letter: 'K', min: 0, max: 100, style: 'cmyk(0%,0%,0%,' + Config.SLIDER + '%);', value: 0, check: false },
  ];

  public static COLOR_SLIDERS_HSL: ColorSlider[] = [
    { title: LanguageLabel.PALETTE_HUE, color: Tag.PALETTE_HUE, letter: 'H', min: 0, max: 360, style: 'hsl(' + Config.SLIDER + ',50%,50%);', value: 0, check: true },
    { title: LanguageLabel.PALETTE_SATURATION, color: Tag.PALETTE_SATURATION, letter: 'S', min: 0, max: 100, style: 'hsl(0,' + Config.SLIDER + '%,50%);', value: 50, check: false, step: 10 },
    { title: LanguageLabel.PALETTE_LIGHTNESS, color: Tag.PALETTE_LIGHTNESS, letter: 'L', min: 0, max: 100,  style: 'hsl(0,0%,' + Config.SLIDER + '%);', value: 50, check: false, step: 10 },
  ];
}
