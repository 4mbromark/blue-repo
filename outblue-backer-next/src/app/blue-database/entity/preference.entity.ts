import { BaseEntity } from "src/app/blue-database/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, Unique } from "typeorm";
import { User } from "./user.entity";

@Entity({
  name: 'BLUE_PREFERENCES'
})
export class Preference extends BaseEntity {

  @ManyToOne(() => User, (User) => User.id)
  @JoinColumn({
    name: 'ID_USER',
  })
  @Column({
    name: 'ID_USER',
    type: 'number',
    unique: true,
    nullable: false
  })
  idUser: number;

  @Column({
    name: 'PREFERENCES',
    type: 'text',
    default: null
  })
  preferences: string;
}