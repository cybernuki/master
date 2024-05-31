import { Module } from '@nestjs/common';
import { GithubConsumingModule } from './github-consuming/github-consuming.module';
import { NomenclatureModule } from './nomenclature/nomenclature.module';
import { LogicalThinkingModule } from './logical-thinking/logical-thinking.module';
import { DatabaseModelingController } from './database-modeling/database-modeling.controller';
import { DatabaseModelingModule } from './database-modeling/database-modeling.module';

@Module({
  imports: [GithubConsumingModule, NomenclatureModule, LogicalThinkingModule, DatabaseModelingModule],
  controllers: [DatabaseModelingController],
})
export class AppModule {}
