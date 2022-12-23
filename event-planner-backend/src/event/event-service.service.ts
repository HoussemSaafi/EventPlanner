import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return await this.eventRepository.find();
  }

  async findOne(id: number): Promise<Event> {
    return await this.eventRepository.findOne({ where: { id } });
  }

  async create(event: Event): Promise<Event> {
    return await this.eventRepository.save(event);
  }

  async update(event: Event): Promise<void> {
    await this.eventRepository.update(event.id, event);
  }

  async delete(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
