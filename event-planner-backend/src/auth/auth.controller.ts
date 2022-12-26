/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
  Get,
  Req,
  Query,
} from '@nestjs/common';
import { User } from '../typeorm'
import { AuthenticationService } from './auth.service';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() body) {
    try {
      await this.authenticationService.createUser(body.email, body.password, body.role);
      return { message: 'User created successfully' };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('login')
  async login(@Body() body) {
    try {
      const user = await this.authenticationService.validateUser(body.email, body.password);
      if (!user) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
      return this.authenticationService.login(user);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('me')
  async getProfile(@Query('access_token') token: string) {
    console.log(token);
    return this.authenticationService.getUser(token);
  }

  @Get('is-admin')
  async isAdmin(@Req() req) {
    try {
      return await this.authenticationService.isAdmin(req.user);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}