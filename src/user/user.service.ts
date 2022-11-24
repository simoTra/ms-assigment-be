import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  getUserById(userId: number): Promise<User> {
    return this.userRepository.findOneBy({ userId });
  }

  getUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email });
  }

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.getUserByEmail(createUserDto.email);
    if (user) {
      throw new HttpException(
        `User with email ${createUserDto.email} is already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.userRepository.save(createUserDto);
  }

  async updateUser(updateUserDto: UpdateUserDto, userId: number) {
    const user = await this.getUserByEmail(updateUserDto.email);
    if (user) {
      throw new HttpException(
        `User with email ${updateUserDto.email} is already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.userRepository.update(userId, updateUserDto);
  }

  deleteUser(userId: number) {
    return this.userRepository.delete(userId);
  }
}
