import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { AttendeeModule } from './attendee/attendee.module';
import { OrganizerModule } from './organizer/organizer.module';
import { ScheduleModule } from './schedule/schedule.module';
import { StaffModule } from './staff/staff.module';
import { SponsorModule } from './sponsor/sponsor.module';
import { FeedbackModule } from './feedback/feedback.module';
import { CalendarModule } from './calendar/calendar.module';
import { SpecialAttendeeModule } from './special-attendee/special-attendee.module';

@Module({
  imports: [EventModule, AttendeeModule, OrganizerModule, ScheduleModule, StaffModule, SponsorModule, FeedbackModule, CalendarModule, SpecialAttendeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
