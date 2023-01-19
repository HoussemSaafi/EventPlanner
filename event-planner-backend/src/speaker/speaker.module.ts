import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event, Speaker } from '../typeorm';
import { SpeakerService } from './speaker-service.service';
import { SpeakerController } from './speaker.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Speaker, Event])],
  controllers: [SpeakerController],
  providers: [SpeakerService],
})
export class SpeakerModule {}
