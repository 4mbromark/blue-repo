import { BaseEntity } from "src/app/blue-database/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { User } from "./user.entity";

@Entity({
  name: 'BLUE_PROJECT'
})
@Unique('PROJECT_NAME', ['idUser', 'name'])
export class Project extends BaseEntity {

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
    name: 'NAME',
    type: 'varchar',
    length: 256,
    nullable: false
  })
  name: string;

  @Column({
    name: 'NAME_CODE',
    type: 'varchar',
    length: 256,
    default: null
  })
  nameCode: string;

  @Column({
    name: 'NAME_EXTENDED',
    type: 'varchar',
    length: 256,
    default: null
  })
  nameExtended: string;

  @Column({
    name: 'NAME_CUSTOMIZED',
    type: 'varchar',
    length: 256,
    default: null
  })
  nameCustomized: string;

  @Column({
    name: 'SUBPROJECT_OF',
    type: 'bigint',
    default: null
  })
  subprojectOf: number;

  @Column({
    name: 'START_DATE',
    type: 'date',
    default: null
  })
  startDate: Date;

  @Column({
    name: 'END_DATE',
    type: 'date',
    default: null
  })
  endDate: Date;

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