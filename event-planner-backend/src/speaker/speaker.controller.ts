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
  constructor(private readonly speakerService: SpeakerService,
  ) {}

  @Post('/all')
  async findAll(@Body() body : any): Promise<Speaker[]> {
    const eventId = +body.eventId;
    return this.speakerService.findSpeakersByEventId(eventId);
  }

  @Post()
  async create(@Body() speaker: any): Promise<any> {
    return this.speakerService.create(speaker);
  }

  @Post('/one')
  async getOneByEvent(@Body() dto: any): Promise<any> {
    const id = dto.id;
    return this.speakerService.findOne(id);
  }

  @Put()
  async update(@Body('id') id: number, @Body() speaker: Speaker): Promise<void> {
    speaker.id = id;
    await this.speakerService.update(speaker);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.speakerService.delete(id);
  }
}
