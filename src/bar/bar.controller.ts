import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BarService } from './bar.service';
import { CreateBarDto } from './dto/create-bar.dto';

@Controller('bar')
export class BarController {
  constructor(private readonly barService: BarService) {}

  @Get()
  getBars() {
    return this.barService.getBars();
  }

  @Post()
  store(@Body() createBarDto: CreateBarDto) {
    return this.barService.createBar(createBarDto);
  }
}
