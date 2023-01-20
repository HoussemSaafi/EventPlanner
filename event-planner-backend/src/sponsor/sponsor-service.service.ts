import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event, Speaker, Sponsor } from '../typeorm';

@Injectable()
export class SponsorService {
  constructor(
    @InjectRepository(Sponsor)
    private readonly sponsorRepository: Repository<Sponsor>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async findAll(): Promise<Sponsor[]> {
    return await this.sponsorRepository.find();
  }

  async findSponsorsByEventId(eventId: number): Promise<Sponsor[]> {
    const sponsors = this.sponsorRepository
      .createQueryBuilder('sponsor')
      .leftJoin('sponsor.event', 'event')
      .where('event.id = :eventId', { eventId })
      .getMany();
    return sponsors;
  }

  async findOne(id: number): Promise<any> {
    return await this.sponsorRepository.findOne({ where: { id } });
  }

  async create(sponsor: any): Promise<Sponsor> {
    const id = sponsor.eventId;
    const event = await this.eventRepository.findOne({ where: { id } });
    const sponsorObject = new Sponsor(sponsor.name, sponsor.website, event);
    return await this.sponsorRepository.save(sponsorObject);
  }

  async update(sponsor: any): Promise<void> {
    await this.sponsorRepository.update(sponsor.id, sponsor);
  }

  async delete(id: number): Promise<void> {
    await this.sponsorRepository.delete(id);
  }
}
