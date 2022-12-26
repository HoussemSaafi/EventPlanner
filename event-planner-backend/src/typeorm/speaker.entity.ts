/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  company:string;

  @Column()
  description:string;
  
  @Column()
  linkedinLink:string;

  @Column()
  image:string;
}