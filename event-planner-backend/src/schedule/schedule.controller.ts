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
import { ScheduleService} from './schedule-service.service';
import { Schedule } from '../typeorm';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  async findAll(): Promise<Schedule[]> {
    return this.scheduleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Schedule> {
    return this.scheduleService.findOne(id);
  }
  @Post()
  async create(@Body() schedule: Schedule): Promise<Schedule> {
    return this.scheduleService.create(schedule);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() schedule: Schedule): Promise<void> {
    schedule.id = id;
    await this.scheduleService.update(schedule);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.scheduleService.delete(id);
  }
}
