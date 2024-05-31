import { Module } from '@nestjs/common';
import { LogicalThinkingController } from './logical-thinking.controller';
import { LogicalThinkingService } from './logical-thinking.service';

@Module({
  controllers: [LogicalThinkingController],
  providers: [LogicalThinkingService]
})
export class LogicalThinkingModule {}
