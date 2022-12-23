import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule-service.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ScheduleService],
})
export class ScheduleModule {}
