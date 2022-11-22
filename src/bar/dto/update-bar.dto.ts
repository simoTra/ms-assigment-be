import { IsString } from 'class-validator';

export class UpdateBarDto {
  @IsString()
  barName: string;

  @IsString()
  barPosition: string;

  @IsString()
  barModel: string;
}
