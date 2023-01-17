import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sponsor } from '../typeorm';

@Injectable()
export class SponsorService {
  constructor(
    @InjectRepository(Sponsor)
    private readonly sponsorRepository: Repository<Sponsor>,
  ) {}

  async findAll(): Promise<Sponsor[]> {
    return await this.sponsorRepository.find();
  }

  async findOne(id: number): Promise<Sponsor> {
    return await this.sponsorRepository.findOne({ where: { id } });
  }

  async create(sponsor: Sponsor): Promise<Sponsor> {
    return await this.sponsorRepository.save(sponsor);
  }

  async update(sponsor: Sponsor): Promise<void> {
    await this.sponsorRepository.update(sponsor.id, sponsor);
  }

  async delete(id: number): Promise<void> {
    await this.sponsorRepository.delete(id);
  }
}
