import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LogicalThinkingService } from './logical-thinking.service';
import { ListOddNumbersParams } from './params/list-odd-numbers.params';

@ApiTags('third exercise')
@Controller('logical-thinking')
export class LogicalThinkingController {
  constructor(private readonly logicalThinkingService: LogicalThinkingService) {
  }

  @Get('odd-list')
  getOddList(
    @Query() params: ListOddNumbersParams
  ){
    return this.logicalThinkingService.getOddList(params);
  }
}
