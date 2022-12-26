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

  @Column()
  facebookLink:string;

  @Column()
  instaLink:string;

  @Column()
  linkedinLink:string;

  @Column()
  role: string;

  @Column()
  image:string;


  @ManyToMany(type => Event)
  @JoinTable()
  events: Event[];
}