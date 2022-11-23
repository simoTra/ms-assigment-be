import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BarService } from './bar.service';
import { CreateBarDto } from './dto/create-bar.dto';
import { UpdateBarDto } from './dto/update-bar.dto';
import { Bar } from './entity/bar.entity';

@Controller('bar')
@UseGuards(AuthGuard('jwt'))
export class BarController {
  constructor(private readonly barService: BarService) {}

  @Get()
  getBars(): Promise<Bar[]> {
    return this.barService.getBars();
  }

  @Get('/id/:barId')
  getBarById(@Param('barId', ParseIntPipe) barId: number): Promise<Bar> {
    return this.barService.getBarById(barId);
  }

  @Get('/name/:barName')
  getBarByName(barName: string): Promise<Bar> {
    return this.barService.getBarByName(barName);
  }

  @Get('/position/:barPosition')
  getBarByPosition(position: string): Promise<Bar> {
    return this.barService.getBarByName(position);
  }

  @Get('/model/:barModel')
  getBarByModel(model: string): Promise<Bar> {
    return this.barService.getBarByName(model);
  }

  @Post()
  store(@Body() createBarDto: CreateBarDto) {
    return this.barService.createBar(createBarDto);
  }

  @Patch('/:barId')
  update(
    @Body() updateBarDto: UpdateBarDto,
    @Param('barId', ParseIntPipe) barId: number,
  ) {
    return this.barService.updateBar(updateBarDto, barId);
  }

  @Delete('/:barId')
  delete(@Param('barId', ParseIntPipe) barId: number) {
    return this.barService.deleteBar(barId);
  }
}
