/* eslint-disable prettier/prettier */
import {Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToMany} from 'typeorm';
import { Event } from './event.entity';
import {User} from "./user.entity";

@Entity()
export class Admin extends User{

  @OneToMany(type => Event,event => event.organizer)
  myEvents: Event[];
}