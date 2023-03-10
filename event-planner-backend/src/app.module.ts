import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { UserModule } from './user/user.module';
import { StaffModule } from './staff/staff.module';
import { SponsorModule } from './sponsor/sponsor.module';
import { SessionModule } from './session/session.module';
import { AuthModule } from './auth/auth.module';
import { SpeakerModule } from './speaker/speaker.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
    AuthModule,
    EventModule,
    UserModule,
    SessionModule,
    StaffModule,
    SponsorModule,
    SpeakerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
