/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable  } from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName:string;

  @Column()
  lastName:string;

  @Column({nullable: true})
  facebookLink:string;

  @Column({nullable: true})
  instaLink:string;

  @Column({nullable: true})
  linkedinLink:string;

  @Column()
  role: string;

  @Column({nullable: true})
  image:string;


  @ManyToMany(type => Event,{
    nullable: true,
    onDelete: 'SET NULL'
  })
  @JoinTable()
  events: Event[];
}