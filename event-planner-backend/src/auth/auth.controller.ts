/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
  Get,
  Query, Headers,
} from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
import { User } from '../typeorm'
import { AuthenticationService } from './auth.service';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() body) {
    try {
      await this.authenticationService.createUser(body.email, body.password, body.firstName, body.lastName, body.facebookLink, body.instaLink, body.linkedinLink, body.image, body.role);
      return { message: 'User created successfully' };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Post('register/admin')
  async registerAdmin(@Body() body) {
    try {
      await this.authenticationService.createAdmin(body.email, body.password, body.firstName, body.lastName, body.facebookLink, body.instaLink, body.linkedinLink, body.image, body.role);
      return { message: 'admin created successfully' };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('login/user')
  async userLogin(@Body() body) {
    try {
      const user = await this.authenticationService.validateUser(body.email, body.password);
      if (!user) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
      return this.authenticationService.loginUser(user);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('login/admin')
  async adminLogin(@Body() body) {
    try {
      const admin = await this.authenticationService.validateAdmin(body.email, body.password);
      if (!admin) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
      return this.authenticationService.loginAdmin(admin);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('meUser')
  async getProfileUser(@Query('access_token') token: string, @Res() response) {
    const user = await this.authenticationService.getUser(token);
    const data = JSON.stringify(user);
    return response.send(data);
  }

  @Get('meAdmin')
  async getProfileAdmin( @Headers() headers, @Res() response) {
    const token = headers.authorization.split(' ')[1];
    const user = await this.authenticationService.getAdmin(token);
    const data = JSON.stringify(user);
    return response.send(data);
  }

  @Get('is-admin')
  async isAdmin(@Query('access_token') token: string) {
    try {
      const admin = await this.authenticationService.getAdmin(token);
      return await this.authenticationService.isAdmin(admin);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // @Delete()
  // async deleteAll() {
  //   return this.authenticationService.deleteAll();
  // }

}