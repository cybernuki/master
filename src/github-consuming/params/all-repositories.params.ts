import {  Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AllRepositoryParams {
  @Min(10)
  @ApiProperty({
    description: 'limits the number of results',
    minimum: 10,
  })
  per_page: number;
}
