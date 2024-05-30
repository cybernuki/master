import { Module } from '@nestjs/common';
import { GithubConsumingModule } from './github-consuming/github-consuming.module';
import { NomenclatureModule } from './nomenclature/nomenclature.module';

@Module({
  imports: [GithubConsumingModule, NomenclatureModule],
  controllers: [],
})
export class AppModule {}
