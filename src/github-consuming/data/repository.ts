import { Expose, Type, plainToInstance } from 'class-transformer'
import { Owner } from './owner'

export class Repository {
  @Expose()
  id: number

  @Expose()
  node_id: string

  @Expose()
  name: string

  @Expose()
  full_name: string

  @Expose()
  @Type(() => Owner)
  owner: Owner

  @Expose()
  private: boolean

  @Expose()
  description: string

  @Expose()
  fork: boolean

  @Expose()
  url: string

  @Expose()
  watchers_count: string

  constructor(partial: Partial<Repository>) {
    Object.assign(this, partial);
  }

  static plainToInstance(partial: Partial<Repository>) {
    return plainToInstance(Repository, partial,  { excludeExtraneousValues: true });
  }
}
