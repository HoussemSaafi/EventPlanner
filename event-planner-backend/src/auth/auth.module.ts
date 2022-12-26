import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from './auth.controller';
import { AuthenticationService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ secret: 'SECRETProjetWeb' }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthModule {}
