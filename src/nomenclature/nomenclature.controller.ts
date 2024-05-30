import { Controller, Get, Query } from '@nestjs/common';
import { CalculateSineParams } from './params/calculate-sine.params';
import { NomenclatureService } from './nomenclature.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('second exercise')
@Controller('nomenclature')
export class NomenclatureController {

  constructor(private readonly nomenclatureService: NomenclatureService) { }

  @Get('calculate-sine')
  calculateSine(
    @Query() params: CalculateSineParams,
  ) {
    return this.nomenclatureService.calculateSine(params);
  }
}
