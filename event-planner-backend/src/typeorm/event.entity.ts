/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToOne, JoinColumn } from 'typeorm';
import { Schedule } from './schedule.entity';
import { Speaker } from './speaker.entity';
import { Sponsor } from './sponsor.entity';
import { User } from './user.entity';
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  dateStart: Date;

  @Column()
  dateEnd:Date;

  @Column()
  location: string;

  @Column()
  description:string;

  @Column()
  organizer:string;
  
  @Column()
  venue: string;

  @OneToOne(() => Schedule)
  @JoinColumn()
  schedule:Schedule;

  @ManyToMany(type => User)
  @JoinTable()
  attendees: User[];

  @ManyToMany(type => Speaker)
  @JoinTable()
  speakers:Speaker[];
  

  @ManyToMany(type => Sponsor)
  @JoinTable()
  sponsors:Sponsor[];

  @ManyToMany(type => User)
  @JoinTable()
  staff:User[];

}
