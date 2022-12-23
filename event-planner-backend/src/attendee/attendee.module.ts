import { Module } from '@nestjs/common';

import { AttendeeService } from './attendee-service.service';
@Module({
  imports: [],
  controllers: [],
  providers: [AttendeeService],
})
export class AttendeeModule {}
