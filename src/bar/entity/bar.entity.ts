import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class Bar {
  @PrimaryGeneratedColumn()
  barId: number;

  @Column({ unique: true })
  @IsString()
  barName: string;

  @Column()
  @IsString()
  barPosition: string;

  @Column()
  @IsString()
  barModel: string;
}
