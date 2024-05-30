import {  IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CalculateSineParams {
  @IsNumber()
  @ApiProperty({
    description: 'First value to sum',
    type: Number,
  })
  sumA: number;

  @IsNumber()
  @ApiProperty({
    description: 'Second value to sum',
    type: Number,
  })
  sumB: number;

  @IsNumber()
  @ApiProperty({
    description: 'Multiplies the result of sumA+sumB',
    type: Number,
  })
  times: number;
}
