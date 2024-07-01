import { Module } from '@nestjs/common';
import { ZnsService } from './zns.service';
import { ZnsController } from './zns.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ZnsHistory, ZnsHistorySchema } from './zns.model/zns-history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ZnsHistory.name, schema: ZnsHistorySchema },
    ])
  ],
  providers: [ZnsService],
  controllers: [ZnsController]
})
export class ZnsModule {}
