import { Preference } from './../../../../blue-utils/blue-object/preference/Preference';
import { Component } from '@angular/core';
import { ProjectNamePreference } from 'src/app/blue-utils/blue-object/preference/ProjectNamePreference';
import { PreferenceService } from 'src/app/blue-utils/blue-service/preference.service';

@Component({
  selector: 'app-projects-preference',
  templateUrl: './projects-preference.component.html',
  styleUrls: ['./projects-preference.component.css']
})
export class ProjectsPreferenceComponent {

  lp: {
    switch: ProjectNamePreference,
    context: ProjectNamePreference,
    table: ProjectNamePreference,
    chip: ProjectNamePreference
  };

  main = {
    name: 'High Five',
    extendedName: 'High Five Life Project',
    reducedname: 'HF',
    personalized: 'HIGH FIVE',
  };
  son = {
    name: 'Photo Compartment',
    extendedName: 'High Five Life Project',
    reducedname: 'Photo Comp.',
    personalized: 'PHOTO COMPARTMENT',
  };

  addMainName = true;
  addMainNameExtended = true;
  addMainNameReduced = true;
  addMainNamePersonalized = true;
  addMainNameUppercase = true;
  addMainNameAfter = true;

  addDash = true;
  addBrackets = true;
  addOf = true;

  subNameExtended = true;
  subNameReduced = true;
  subNamePersonalized = true;
  subNameUppercase = true;

  constructor(private preferenceService: PreferenceService) {
    this.preferenceService.getPreference().subscribe((preference: Preference) => {
      this.lp = preference.projects.name;
    });
  }

















  getSubNameExample() {
    let name = '';

    if (this.lp.switch.showFather) {
      name += this.getFatherExample();
      if (this.lp.switch.fatherSeparator === 'DASH') {
        name += ' -';
      } else {
        name += ' ';
      }
    }

    name += this.getSubSubNameExample();

    if (this.addMainNameAfter) {
      name += ' ';
      if (this.addDash) {
        name += '- ';
      } else if (this.addBrackets) {
        name += '(';
      } else if (this.addOf) {
        name += 'of ';
      }
      name += this.getFatherExample();
      if (this.addBrackets) {
        name += ')';
      }
    }

    return name;
  }

  getFatherExample() {
    let name = '';

    if (this.addMainNameReduced) {
      name += this.main.reducedname;
    } else if (this.addMainNameExtended) {
      name += this.main.personalized;
    } else if (this.addMainNamePersonalized) {
      name += this.main.personalized;
    } else {
      name += this.main.name;
    }

    if (this.addMainNameUppercase) {
      name = name.toUpperCase();
    }
    return name;
  }

  getSubSubNameExample() {
    let name = '';

    if (this.subNameReduced) {
      name += this.son.reducedname;
    } else if (this.subNameExtended) {
      name += this.son.extendedName;
    } else if (this.subNamePersonalized) {
      name += this.son.personalized;
    } else {
      name += this.son.name;
    }

    if (this.subNameUppercase) {
      name = name.toUpperCase();
    }
    return name;
  }

}
