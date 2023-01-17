import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin, User } from '../typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from './auth.controller';
import { AuthenticationService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Admin]),
    JwtModule.register({ secret: 'SECRETProjetWeb' }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthModule {}
