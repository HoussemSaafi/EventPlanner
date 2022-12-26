/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(email: string, password: string, firstName:string, lastName:string, facebookLink:string, instaLink:string, linkedinLink:string, image:string, role : string): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({ email, password: hashedPassword, firstName, lastName, facebookLink, instaLink, linkedinLink, image, role });
    await this.userRepository.save(newUser);
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: User): Promise<{ access_token: string }> {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  
  async getUser(token: string): Promise<User> {
    const payload = this.jwtService.verify(token);
    const user = await this.userRepository.findOne({ where: { email: payload.email }});
    return user;
  }

  async isAdmin(user: User): Promise<boolean> {
    return user.role === 'admin';
  }

  async deleteAll(): Promise<void> {
    await this.userRepository.delete({});
  }
}