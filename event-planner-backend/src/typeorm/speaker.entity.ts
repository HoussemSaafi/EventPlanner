/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Admin} from "./admin.entity";

@Entity()
export class Speaker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName:string;

  @Column()
  lastName:string;

  @Column()
  job: string;

  @Column({nullable: true})
  company:string;

  @Column({nullable: true})
  description:string;
  
  @Column({nullable: true})
  linkedinLink:string;

  @ManyToOne(type => Event)
  event:Event;

  @Column({nullable: true})
  image:string;
}