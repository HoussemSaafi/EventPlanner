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

  @Get('myEvents/:id')
  async findAllEventsByAdmin(@Param('id') adminId: number): Promise<Event[]> {
    return this.eventService.getEventsByOrganizer(adminId);
  }

  @Post('/all')
  async findAllAdmin(@Body() dto): Promise<Event[]>{
    const adminId = dto.id;
    return this.eventService.getEventsByOrganizer(adminId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }
  @Post()
  async create(@Body() event: any): Promise<Event> {
    return this.eventService.create(event);
  }

  @Post('/one')
  async getOneByEvent(@Body() dto: any): Promise<any> {
    const id = dto.id;
    return this.eventService.findOne(id);
  }

  @Put()
  async update(@Body() event: Event): Promise<void> {
    await this.eventService.update(event);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.eventService.delete(id);
  }
}
