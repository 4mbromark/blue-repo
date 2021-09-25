import { SessionPreference } from './SessionPreference';
import { SidebarPreference } from './SidebarPreference';
import { ProjectNamePreference } from './ProjectNamePreference';
import { TablePreference } from './TablePreference';

export class Preferences {
  /*language: string;*/
  sidebar: SidebarPreference;
  session: SessionPreference;
  table: TablePreference;
  /*projects: {
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
  };*/
}
