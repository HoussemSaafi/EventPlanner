/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository} from 'typeorm';
import { Admin,User } from '../typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(email: string, password: string, firstName:string, lastName:string, facebookLink:string, instaLink:string, linkedinLink:string, image:string, role : string): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);
    role = "user";
    const newUser = this.userRepository.create({ email, password: hashedPassword, firstName, lastName, facebookLink, instaLink, linkedinLink, image, role });
    await this.userRepository.save(newUser);
  }

  async createAdmin(email: string, password: string, firstName:string, lastName:string, facebookLink:string, instaLink:string, linkedinLink:string, image:string, role : string): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);
    role = "admin"
    const newAdmin = this.adminRepository.create({ email, password: hashedPassword, firstName, lastName, facebookLink, instaLink, linkedinLink, image, role });
    await this.adminRepository.save(newAdmin);
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async validateAdmin(email: string, password: string): Promise<Admin> {
    const admin = await this.adminRepository.findOne({ where: { email } });
    if (admin && (await bcrypt.compare(password, admin.password))) {
      return admin;
    }
    return null;
  }

  async loginUser(user: User): Promise<{ access_token: string }> {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async loginAdmin(admin: Admin): Promise<{ access_token: string }> {
    const payload = { email: admin.email, sub: admin.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  
  async getUser(token: string): Promise<User> {
    const payload = this.jwtService.verify(token);
    const user = await this.userRepository.findOne({ where: { email: payload.email }});
    return user;
  }

  async getAdmin(token: string): Promise<Admin> {
    const payload = this.jwtService.verify(token);
    const admin = await this.adminRepository.findOne({ where: { email: payload.email }});
    return admin;
  }

  async isAdmin(user: User): Promise<boolean> {
    return user.role === 'admin';
  }

  async deleteAll(): Promise<void> {
    await this.userRepository.delete({});
  }
}