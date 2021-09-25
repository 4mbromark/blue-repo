import { BaseEntity } from "src/app/blue-database/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity({
  name: 'BLUE_TASKLIST'
})
export class Task extends BaseEntity {

  @ManyToOne(() => User, (User) => User.id)
  @JoinColumn({
    name: 'ID_USER'
  })
  @Column({
    name: 'ID_USER',
    type: 'number',
    nullable: false
  })
  idUser: number;

  @Column({
    name: 'STATUS',
    type: 'int',
    nullable: false,
    default: 0
  })
  status: number;

  @Column({
    name: 'PRIORITY',
    type: 'int',
    default: null
  })
  priority: number;

  @Column({
    name: 'PERCENTAGE',
    type: 'int',
    nullable: false,
    default: 0
  })
  percentage: number;

  @Column({
    name: 'NAME',
    type: 'varchar',
    length: 256,
    nullable: false
  })
  name: string;

  @Column({
    name: 'DESCRIPTION',
    type: 'varchar',
    length: 4000,
    default: null
  })
  description: string;

  @Column({
    name: 'TASK_OF',
    type: 'bigint',
    default: null
  })
  taskOf: number;

  @Column({
    name: 'COLOR',
    type: 'varchar',
    length: 50,
    default: null
  })
  color: string;

  @Column({
    name: 'COLOR_ROW',
    type: 'varchar',
    length: 50,
    default: null
  })
  colorRow: string;
}