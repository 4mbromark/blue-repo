export class ProjectNamePreference {
  type: 'NORMAL' | 'EXTENDED' | 'REDUCED' | 'PERSONALIZED';
  toUpperCase: boolean;
  showFather: boolean;
  fatherSeparator: 'DASH' | 'BRACKETS' | 'OF';
  fatherType: 'NORMAL' | 'EXTENDED' | 'REDUCED' | 'PERSOLANIZED';
  fatherToUpperCase: boolean;
}
