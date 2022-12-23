import { Module } from '@nestjs/common';
import { EventService } from './event-service.service';

@Module({
  imports: [],
  controllers: [],
  providers: [EventService],
})
export class EventModule {}
