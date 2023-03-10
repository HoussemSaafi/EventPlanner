import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SessionEntity } from '../typeorm';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(SessionEntity)
    private readonly sessionEntityRepository: Repository<SessionEntity>,
  ) {}

  async findAll(eventId: number): Promise<SessionEntity[]> {
    const sessions = this.sessionEntityRepository
      .createQueryBuilder('session')
      .leftJoin('session.event', 'event')
      .where('event.id = :eventId', { eventId })
      .getMany();
    return sessions;
  }

  async findOne(id: number): Promise<SessionEntity> {
    return await this.sessionEntityRepository.findOne({ where: { id } });
  }

  async create(session: SessionEntity): Promise<SessionEntity> {
    return await this.sessionEntityRepository.save(session);
  }

  async update(sessionEntity: SessionEntity): Promise<void> {
    await this.sessionEntityRepository.update(sessionEntity.id, sessionEntity);
  }

  async delete(id: number): Promise<void> {
    await this.sessionEntityRepository.delete(id);
  }
}
