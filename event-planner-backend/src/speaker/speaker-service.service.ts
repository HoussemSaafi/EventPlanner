import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event, Speaker } from '../typeorm';

@Injectable()
export class SpeakerService {
  constructor(
    @InjectRepository(Speaker)
    private readonly speakerRepository: Repository<Speaker>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async findAll(): Promise<Speaker[]> {
    return await this.speakerRepository.find();
  }

  async findOne(id: number): Promise<Speaker> {
    return await this.speakerRepository.findOne({ where: { id } });
  }

  async create(speaker: any): Promise<Speaker> {
    const id = speaker.eventId;
    const event = await this.eventRepository.findOne({ where: { id } });
    const speakerObject = new Speaker(speaker.firstName, speaker.lastName,speaker.job,speaker.company,event);
    return await this.speakerRepository.save(speakerObject);
  }

  async update(speaker: Speaker): Promise<void> {
    await this.speakerRepository.update(speaker.id, speaker);
  }

  async delete(id: number): Promise<void> {
    await this.speakerRepository.delete(id);
  }
}
