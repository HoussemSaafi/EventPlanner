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
import {Speaker, Sponsor} from '../typeorm';
import { SponsorService } from "./sponsor-service.service";

@Controller('sponsors')
export class SponsorController {
  constructor(private readonly sponsorService: SponsorService) {}

  // @Get()
  // async findAll(): Promise<Sponsor[]> {
  //   return this.sponsorService.findAll();
  // }

  @Post('/all')
  async findAll(@Body() body : any): Promise<Sponsor[]> {
    const eventId = +body.eventId;
    return this.sponsorService.findSponsorsByEventId(eventId);
  }

  @Post('/one')
  async getOneByEvent(@Body() dto: any): Promise<any> {
    const id = dto.id;
    return this.sponsorService.findOne(id);
  }
  @Post()
  async create(@Body() sponsor: any): Promise<Sponsor> {
    return this.sponsorService.create(sponsor);
  }

  @Put()
  async update(@Body('id') id: number, @Body() sponsor: Sponsor): Promise<void> {
    sponsor.id = id;
    await this.sponsorService.update(sponsor);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.sponsorService.delete(id);
  }
}
