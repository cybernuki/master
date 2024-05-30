import { Module } from '@nestjs/common';
import { GithubConsumingModule } from './github-consuming/github-consuming.module';

@Module({
  imports: [GithubConsumingModule],
  controllers: [],
})
export class AppModule {}
