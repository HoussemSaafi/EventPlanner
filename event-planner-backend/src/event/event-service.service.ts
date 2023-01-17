import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../typeorm';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return await this.eventRepository.find();
  }

  async getEventsByOrganizer(organizerId: number): Promise<Event[]> {
    const queryBuilder = this.eventRepository
      .createQueryBuilder('event')
      .where('event.organizerId = :organizerId', { organizerId });

    const query = queryBuilder.getQuery();
    console.log('query', query);
    return queryBuilder.getMany();
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
