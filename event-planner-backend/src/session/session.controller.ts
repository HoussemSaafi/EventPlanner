/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { SessionService} from './session-service.service';
import { SessionEntity } from '../typeorm';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get()
  async findAll(): Promise<SessionEntity[]> {
    return this.sessionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<SessionEntity> {
    return this.sessionService.findOne(id);
  }
  @Post()
  async create(@Body() session: SessionEntity): Promise<SessionEntity> {
    return this.sessionService.create(session);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() session: SessionEntity): Promise<void> {
    session.id = id;
    await this.sessionService.update(session);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.sessionService.delete(id);
  }
}
