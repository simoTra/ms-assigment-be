import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBarDto } from './dto/create-bar.dto';
import { UpdateBarDto } from './dto/update-bar.dto';
import { Bar } from './entity/bar.entity';

@Injectable()
export class BarService {
  constructor(
    @InjectRepository(Bar)
    private barRepository: Repository<Bar>,
  ) {}

  getBars(): Promise<Bar[]> {
    return this.barRepository.find();
  }

  getBarById(@Param('barId', ParseIntPipe) barId: number): Promise<Bar> {
    return this.barRepository.findOneBy({ barId });
  }

  getBarByName(barName: string): Promise<Bar> {
    return this.barRepository.findOneBy({ barName });
  }

  getBarsByPosition(barPosition: string): Promise<Bar[]> {
    return this.barRepository.find({ where: { barPosition } });
  }

  getBarsByModel(barModel: string): Promise<Bar[]> {
    return this.barRepository.findBy({ barModel });
  }

  createBar(createBarDto: CreateBarDto) {
    return this.barRepository.save(createBarDto);
  }

  updateBar(updateBarDto: UpdateBarDto, barId: number) {
    return this.barRepository.update(barId, updateBarDto);
  }

  deleteBar(barId: number) {
    return this.barRepository.delete(barId);
  }
}
