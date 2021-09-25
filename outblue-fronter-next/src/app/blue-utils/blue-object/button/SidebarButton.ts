import { Button } from './Button';
import { OpenWindowAction } from './OpenWindowAction';

export class SidebarButton extends Button {
  routerlink?: string;
  show?: SidebarButton[];
  form?: OpenWindowAction;
}
