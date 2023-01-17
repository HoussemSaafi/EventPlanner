import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sponsor } from '../typeorm';
import { SponsorService } from './sponsor-service.service';
import { SponsorController } from './sponsor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sponsor])],
  controllers: [SponsorController],
  providers: [SponsorService],
})
export class SponsorModule {}
