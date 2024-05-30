import { Controller, Get, Query } from '@nestjs/common';
import { GithubConsumingService } from './github-consuming.service';
import { AllRepositoryParams } from './params/all-repositories.params';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AllRepositoriesResponseDTO } from './dto/all-repositories-response.dto';

@ApiTags('first Question')
@Controller('github-consuming')
export class GithubConsumingController {
  constructor(private readonly githubConsumingService: GithubConsumingService) { }

  @Get('repository')
  @ApiOkResponse({
    type: AllRepositoriesResponseDTO,
    isArray: true,
  })
  findAllRepositories(
    @Query() params: AllRepositoryParams,
  ) {
    return this.githubConsumingService.findAllRepositories(params);
  }
}
