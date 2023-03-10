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
    const events = this.eventRepository
      .createQueryBuilder('event')
      .leftJoin('event.organizer', 'organizer')
      .where('organizer.id = :organizerId', { organizerId })
      .getMany();
    return events;
  }

  async findOne(id: number): Promise<Event> {
    return await this.eventRepository.findOne({ where: { id } });
  }

  async create(event: Event): Promise<Event> {
    event.isFree = true;
    return await this.eventRepository.save(event);
  }

  async update(event: Event): Promise<void> {
    const eventId = +event.id;
    await this.eventRepository.update(eventId, event);
  }

  async delete(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
