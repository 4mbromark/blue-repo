import { type } from "node:os";
import { types } from "node:util";
import { BaseEntity } from "src/app/blue-database/base.entity";
import { Column, Entity } from "typeorm";

@Entity({
  name: 'BLUE_REGUSER'
})
export class User extends BaseEntity {

  @Column({
    name: 'NAME',
    type: 'varchar',
    length: 256,
    nullable: false
  })
  name: string;

  @Column({
    name: 'SURNAME',
    type: 'varchar',
    length: 256,
    nullable: false
  })
  surname: string;

  @Column({
    name: 'EMAIL',
    type: 'varchar',
    length: 256,
    unique: true,
    nullable: false
  })
  email: string;

  @Column({
    name: 'USERNAME',
    type: 'varchar',
    length: 256,
    unique: true,
    nullable: false
  })
  username: string;

  @Column({
    name: 'PSWD',
    type: 'varchar',
    length: 256,
    nullable: false
  })
  pswd: string;
}