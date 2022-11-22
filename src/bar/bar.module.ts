import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarController } from './bar.controller';
import { BarService } from './bar.service';
import { Bar } from './entity/bar.entity';

@Module({
  controllers: [BarController],
  providers: [BarService],
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([Bar])],
})
export class BarModule {}
