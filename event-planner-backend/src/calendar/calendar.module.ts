import { Module } from '@nestjs/common';
import { CalendarService } from './calendar-service.service';

@Module({
  imports: [],
  controllers: [],
  providers: [CalendarService],
})
export class CalendarModule {}
