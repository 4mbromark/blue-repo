import { ProjectNamePreference } from './ProjectNamePreference';

export class Preference {
  language: string;
  sidebar: {
    extended: boolean
  };
  projects: {
    name: {
      switch: ProjectNamePreference,
      context: ProjectNamePreference,
      table: ProjectNamePreference,
      chip: ProjectNamePreference
    }
    switch: {
      allSuper: boolean,
      allSub: boolean
    }
  };
}
