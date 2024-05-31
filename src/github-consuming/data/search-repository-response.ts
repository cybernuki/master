import { Repository } from './repository';

export class SearchRepositoryResponse {
  link: string | undefined;
  items: Repository[];
}
