import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback-service.service';

@Module({
  imports: [],
  controllers: [],
  providers: [FeedbackService],
})
export class FeedbackModule {}
