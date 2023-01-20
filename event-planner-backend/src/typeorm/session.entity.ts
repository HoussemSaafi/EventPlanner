/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, JoinTable, Column, ManyToOne } from 'typeorm';
import { Speaker } from './speaker.entity';
import { Event } from './event.entity'
@Entity()
export class SessionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  activity: string;

  @Column()
  title: string;  
  
  
  @Column({nullable: true})
  description: string;  

  @Column()
  startTime: string; 

  @Column()
  endTime:string;

  @ManyToOne(type => Speaker,{
    nullable: true,
    onDelete: 'SET NULL'
  })
  @JoinTable()
  speaker:Speaker;

  @ManyToOne(type => Event)
  event:Event;

}