import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event, Sponsor} from '../typeorm';
import { SponsorService } from './sponsor-service.service';
import { SponsorController } from './sponsor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sponsor, Event])],
  controllers: [SponsorController],
  providers: [SponsorService],
})
export class SponsorModule {}
