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
import { ConfigModule, ConfigService  } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    EventModule,
    AttendeeModule,
    OrganizerModule,
    ScheduleModule,
    StaffModule,
    SponsorModule,
    FeedbackModule,
    CalendarModule,
    SpecialAttendeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
