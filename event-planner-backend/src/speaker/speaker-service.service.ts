import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Speaker } from '../typeorm';

@Injectable()
export class SpeakerService {
  constructor(
    @InjectRepository(Speaker)
    private readonly speakerRepository: Repository<Speaker>,
  ) {}

  async findAll(): Promise<Speaker[]> {
    return await this.speakerRepository.find();
  }

  async findOne(id: number): Promise<Speaker> {
    return await this.speakerRepository.findOne({ where: { id } });
  }

  async create(speaker: Speaker): Promise<Speaker> {
    return await this.speakerRepository.save(speaker);
  }

  async update(speaker: Speaker): Promise<void> {
    await this.speakerRepository.update(speaker.id, speaker);
  }

  async delete(id: number): Promise<void> {
    await this.speakerRepository.delete(id);
  }
}
