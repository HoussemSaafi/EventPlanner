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
import { Sponsor } from '../typeorm';
import { SponsorService } from "./sponsor-service.service";

@Controller('sponsors')
export class SponsorController {
  constructor(private readonly sponsorService: SponsorService) {}

  @Get()
  async findAll(): Promise<Sponsor[]> {
    return this.sponsorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Sponsor> {
    return this.sponsorService.findOne(id);
  }
  @Post()
  async create(@Body() speaker: Sponsor): Promise<Sponsor> {
    return this.sponsorService.create(speaker);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() sponsor: Sponsor): Promise<void> {
    sponsor.id = id;
    await this.sponsorService.update(sponsor);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.sponsorService.delete(id);
  }
}
