import { ApiProperty } from '@nestjs/swagger';
import { Repository } from '../data/repository';

export class AllRepositoriesResponseDTO {
  @ApiProperty({ type: () => [Repository] })
  data: Repository[]
}
