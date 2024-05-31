import { Module } from '@nestjs/common';
import { GithubConsumingRepository } from './github-consuming.repository';
import { GithubConsumingService } from './github-consuming.service';
import { GithubConsumingController } from './github-consuming.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [GithubConsumingController],
  imports: [HttpModule],
  providers: [GithubConsumingService, GithubConsumingRepository],
})
export class GithubConsumingModule { }
