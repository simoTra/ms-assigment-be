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
    private userRepository: Repository<Bar>,
  ) {}

  getBars(): Promise<Bar[]> {
    return this.userRepository.find();
  }

  getBarById(@Param('barId', ParseIntPipe) barId: number) {
    return this.userRepository.findOneBy({ barId });
  }

  getBarByName(barName: string): Promise<Bar> {
    return this.userRepository.findOneBy({ barName });
  }

  getBarByPosition(barPosition: string): Promise<Bar> {
    return this.userRepository.findOneBy({ barPosition });
  }

  getBarByModel(barModel: string): Promise<Bar> {
    return this.userRepository.findOneBy({ barModel });
  }

  createBar(createBarDto: CreateBarDto) {
    return this.userRepository.save(createBarDto);
  }

  updateBar(updateBarDto: UpdateBarDto, barId: number) {
    return this.userRepository.update(barId, updateBarDto);
  }

  deleteBar(barId: number) {
    return this.userRepository.delete(barId);
  }
}
