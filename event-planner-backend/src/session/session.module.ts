import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionService } from './session-service.service';
import { SessionController } from './session.controller';
import { SessionEntity } from '../typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SessionEntity])],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
