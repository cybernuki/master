import {  IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ListOddNumbersParams {
  @IsNumber()
  @ApiProperty({
    description: 'target odd number',
    type: Number,
  })
  target: number;
}
