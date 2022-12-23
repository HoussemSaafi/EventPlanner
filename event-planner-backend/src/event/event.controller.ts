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
import { EventService } from './event-service.service';
import { Event } from '../typeorm';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }
  @Post()
  async create(@Body() event: Event): Promise<Event> {
    return this.eventService.create(event);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() event: Event): Promise<void> {
    event.id = id;
    await this.eventService.update(event);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.eventService.delete(id);
  }
}
