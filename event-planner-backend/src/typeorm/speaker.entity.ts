/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Admin} from "./admin.entity";
import {Event} from "./event.entity";

@Entity()
export class Speaker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  job: string;

  @Column({nullable: true})
  company: string;

  @Column({nullable: true})
  description: string;

  @Column({nullable:true})
    email : string;

  
  @Column({nullable: true})
  linkedinLink:string;

  @ManyToOne(type => Event)
  event:Event;

  @Column({nullable: true})
  image:string;


  constructor(firstName: string, lastName: string, job: string, company: string, event: Event) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
    this.company = company;
    this.event = event;
  }
}