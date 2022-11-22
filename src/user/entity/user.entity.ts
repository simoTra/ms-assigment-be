import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsEmail } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ unique: true })
  @IsString()
  username: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  password: string;
}
