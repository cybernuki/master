import { Module } from '@nestjs/common';
import { GithubConsumingModule } from './github-consuming/github-consuming.module';
import { NomenclatureModule } from './nomenclature/nomenclature.module';
import { LogicalThinkingModule } from './logical-thinking/logical-thinking.module';

@Module({
  imports: [GithubConsumingModule, NomenclatureModule, LogicalThinkingModule],
  controllers: [],
})
export class AppModule {}
