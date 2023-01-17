import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Speaker } from '../typeorm';
import { SpeakerService } from './speaker-service.service';
import { SpeakerController } from './speaker.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Speaker])],
  controllers: [SpeakerController],
  providers: [SpeakerService],
})
export class SpeakerModule {}
