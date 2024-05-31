import { Expose, plainToInstance } from 'class-transformer'

export class Owner{
  @Expose()
  login: string

  @Expose()
  id: number


  constructor(partial: Partial<Owner>) { 
    Object.assign(this, partial);
  }

  static plainToInstance(partial: Partial<Owner>) {
    return plainToInstance(Owner, partial,  { excludeExtraneousValues: true });
  }
}
