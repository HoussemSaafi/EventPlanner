/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, JoinTable, Column, ManyToOne } from 'typeorm';
import { Schedule } from './schedule.entity';
import { Speaker } from './speaker.entity';
@Entity()
export class SessionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  activity: string;

  @Column()
  date: Date;

  @Column()
  title: string;  
  
  
  @Column()
  description: string;  

  @Column()
  startTime: string; 

  @Column()
  endTime:string;

  @ManyToOne(type => Speaker)
  @JoinTable()
  speaker:Speaker;
  
  @ManyToOne(type => Schedule)
  @JoinTable()
  schedule: Schedule;

}