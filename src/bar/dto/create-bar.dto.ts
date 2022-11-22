import { IsString } from 'class-validator';

export class CreateBarDto {
  @IsString()
  barName: string;

  @IsString()
  barPosition: string;

  @IsString()
  barModel: string;
}
