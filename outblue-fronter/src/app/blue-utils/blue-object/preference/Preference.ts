import { ProjectNamePreference } from './ProjectNamePreference';

export class Preference {
  projects: {
    name: {
      switch: ProjectNamePreference,
      context: ProjectNamePreference,
      table: ProjectNamePreference,
      chip: ProjectNamePreference
    }
  };
}
