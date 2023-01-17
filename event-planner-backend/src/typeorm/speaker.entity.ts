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

  @Column({nullable: true})
  company:string;

  @Column({nullable: true})
  description:string;
  
  @Column({nullable: true})
  linkedinLink:string;

  @Column({nullable: true})
  image:string;
}