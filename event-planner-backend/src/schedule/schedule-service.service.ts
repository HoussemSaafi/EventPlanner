import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from '../typeorm';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  async findAll(): Promise<Schedule[]> {
    return await this.scheduleRepository.find();
  }

  async findOne(id: number): Promise<Schedule> {
    return await this.scheduleRepository.findOne({ where: { id } });
  }

  async create(schedule: Schedule): Promise<Schedule> {
    return await this.scheduleRepository.save(schedule);
  }

  async update(schedule: Schedule): Promise<void> {
    await this.scheduleRepository.update(schedule.id, schedule);
  }

  async delete(id: number): Promise<void> {
    await this.scheduleRepository.delete(id);
  }
}
