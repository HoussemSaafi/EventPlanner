/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Event} from './event.entity';

@Entity()
export class Sponsor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({nullable: true})
  logo: string;

  @ManyToOne(type => Event)
  event:Event;
}

