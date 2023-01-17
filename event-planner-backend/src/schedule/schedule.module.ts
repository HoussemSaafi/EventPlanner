import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule-service.service';
import { ScheduleController } from './schedule.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Schedule } from "../typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Schedule])],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
