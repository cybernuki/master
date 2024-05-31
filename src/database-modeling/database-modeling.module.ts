import { Module } from '@nestjs/common';
import { DatabaseModelingController } from './database-modeling.controller';

@Module({
  controllers: [DatabaseModelingController]
})
export class DatabaseModelingModule {}
