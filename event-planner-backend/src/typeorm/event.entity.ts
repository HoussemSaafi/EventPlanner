/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { Admin } from './admin.entity';
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
  isFree: boolean;

  @Column({ nullable: true })
  goal:string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  description:string;

  @ManyToOne(type => Admin)
  organizer:Admin;

  @Column({ nullable: true })
  venue: string;

  @OneToOne(() => Schedule,{
    nullable: true,
    onDelete: 'SET NULL'
  })
  @JoinColumn()
  schedule:Schedule;

  @ManyToMany(type => User,{
    nullable: true,
    onDelete: 'SET NULL'
  })
  @JoinTable()
  attendees: User[];

  @OneToMany(type => Speaker,speaker => speaker.event)
  speaker:Speaker;
  

  @OneToMany(type => Sponsor,sponsor => sponsor.event)
  sponsors:Sponsor;

  @ManyToMany(type => User, {
  nullable: true,
  onDelete: 'SET NULL'
})
  @JoinTable()
  staff:User[];

}
