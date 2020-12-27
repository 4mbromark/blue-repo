import { StandardProductBarComponent } from './../../../standard-product-bar/standard-product-bar.component';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { ColorSelector } from './../../../../blue-enum/selector/color-selector';
import { ColorSlider } from './../../../../blue-object/selector/ColorSlider';
import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Tag } from 'src/app/blue-utils/blue-enum/word/tag';
import { Config } from 'src/app/blue-utils/blue-enum/word/config';

@Component({
  selector: 'app-color-alice-selector',
  templateUrl: './color-alice-selector.component.html',
  styleUrls: ['./color-alice-selector.component.css']
})
export class ColorAliceSelectorComponent implements OnInit {

  tags = Tag;

  range = [];
  rangeSupport = [];

  type = Tag.PALETTE_RGB;
  sliders: ColorSlider[] = ColorSelector.COLOR_SLIDERS_RGB;
  selector = Tag.PALETTE_RED;
  professional = false;

  constructor(
    private languageService: LanguageService
  ) { }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  ngOnInit(): void {
    this.setType(Tag.PALETTE_RGB);
  }

  setType(type: string, event?: any): void {
    this.type = type;
    this.range = [];
    this.rangeSupport = [];
    switch (type) {
      case Tag.PALETTE_RGB: {
        this.sliders = ColorSelector.COLOR_SLIDERS_RGB;
        this.selector = Tag.PALETTE_RED;
        for (let i = 0; i < 255; i += 30) {
          this.range.push(i);
        }
        break;
      }
      case Tag.PALETTE_CMYK: {
        this.sliders = ColorSelector.COLOR_SLIDERS_CMYK;
        this.selector = Tag.PALETTE_CYAN;
        for (let i = 0; i < 100; i += 12) {
          this.range.push(i);
        }
        break;
      }
      case Tag.PALETTE_HSL: {
        this.sliders = ColorSelector.COLOR_SLIDERS_HSL;
        this.selector = Tag.PALETTE_HUE;
        for (let i = 0; i < 360; i += 40) {
          this.range.push(i);
        }
        for (let i = 0; i < 100; i += 12) {
          this.rangeSupport.push(i);
        }
        break;
      }
    }
    if (event) {
      event.stopPropagation();
    }
  }
  setSelector(slider: ColorSlider, event: any): void {
    if (!this.professional) {
      this.selector = slider.color;
    }
    event.stopPropagation();
  }
  setProfessional(event: any) {
    this.professional = !this.professional;
    if (this.professional) {
      this.selector = '';
    } else {
      switch (this.type) {
        case Tag.PALETTE_RGB: {
          this.selector = Tag.PALETTE_RED;
          break;
        }
        case Tag.PALETTE_CMYK: {
          this.selector = Tag.PALETTE_CYAN;
          break;
        }
        case Tag.PALETTE_HSL: {
          this.selector = Tag.PALETTE_HUE;
          break;
        }
      }
    }
    event.stopPropagation();
  }

  getColorRange(color: string): number[] {
    const slider = this.sliders.find(s => s.color === color);
    if (!this.professional && color === this.selector || this.professional && slider.check) {
      return [slider.value];
    } else if (this.type === Tag.PALETTE_HSL && slider.color !== Tag.PALETTE_HUE) {
      return this.rangeSupport;
    }
    return this.range;
  }

  onSliderChange(event: MatSliderChange, slider: ColorSlider): void {
    // this.sliders.find(s => s.color === slider.color).value = event.value;
    slider.value = event.value;
  }

  getColorByValues(): string {
    switch (this.type) {
      case Tag.PALETTE_RGB: {
        return 'rgb(' + this.sliders[0].value + ',' + this.sliders[1].value + ',' + this.sliders[2].value + ')';
      }
      case Tag.PALETTE_CYAN: {
        return;
      }
      case Tag.PALETTE_HSL: {
        return 'hsl(' + this.sliders[0].value + ',' + this.sliders[1].value + '%,' + this.sliders[2].value + '%)';
      }
    }
  }
  getColorBySlider(slider: ColorSlider): string {
    return slider.style.replace(Config.SLIDER, '' + slider.value);
  }

  checkSlider(slider: ColorSlider): void {
    this.sliders.forEach((s: ColorSlider) => {
      if (slider.color === s.color) {
        s.check = true;
      } else {
        s.check = false;
      }
    });
  }
}
