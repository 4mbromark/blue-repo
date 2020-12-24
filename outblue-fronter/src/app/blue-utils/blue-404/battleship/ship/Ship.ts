import { Cell } from './Cell';

export class Ship {
  name: string;
  type: string;
  position: {
    ax: number;
    ay: number;
    bx: number;
    by: number;
  };
  cells: Cell[];
  status: string;

}
