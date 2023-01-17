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
import { Speaker } from '../typeorm';
import {SpeakerService} from "./speaker-service.service";

@Controller('speakers')
export class SpeakerController {
  constructor(private readonly speakerService: SpeakerService) {}

  @Get()
  async findAll(): Promise<Speaker[]> {
    return this.speakerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Speaker> {
    return this.speakerService.findOne(id);
  }
  @Post()
  async create(@Body() speaker: Speaker): Promise<Speaker> {
    return this.speakerService.create(speaker);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() speaker: Speaker): Promise<void> {
    speaker.id = id;
    await this.speakerService.update(speaker);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.speakerService.delete(id);
  }
}
