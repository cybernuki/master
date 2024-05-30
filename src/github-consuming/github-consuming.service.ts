import { Injectable } from '@nestjs/common';
import { AllRepositoriesResponseDTO } from './dto/all-repositories-response.dto';
import { AllRepositoryParams } from './params/all-repositories.params';
import { GithubConsumingRepository } from './github-consuming.repository';
import { catchError, firstValueFrom, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Repository } from './data/repository';


@Injectable()
export class GithubConsumingService {

  constructor(private readonly githubConsumingRepository: GithubConsumingRepository) {
  }

  async findAllRepositories(params: AllRepositoryParams): Promise<AllRepositoriesResponseDTO> {
    const response = await firstValueFrom(
      this.githubConsumingRepository.getRepositories(params.per_page).pipe(
        catchError(() => {
          throw 'Error while searching for public repositories';
        }),
        map((res: AxiosResponse) => {
          return {
            data: res.data.items.map((item: any) => {return Repository.plainToInstance(item as Repository)})
          }
        })
      ),
    );
    return response;
  }
}
