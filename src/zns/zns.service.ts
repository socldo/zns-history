import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { join } from 'path';
import { lastValueFrom } from 'rxjs';

import { ZnsHistory, ZnsHistoryDocument } from './zns.model/zns-history.schema';
import { Model } from 'mongoose';
import { ZnsWebhookServiceClient } from 'src/grpc/interfaces/webhook-zns';

@Injectable()
export class ZnsService implements OnModuleInit {

    private znsWebhookServiceClient: ZnsWebhookServiceClient;

    constructor(
        @InjectModel(ZnsHistory.name) private znsHistoryModel: Model<ZnsHistoryDocument>,
    ) {
    }

    onModuleInit() {
    }

    async trackingMessage(trackingId: string, phone: string, messageId: string, delivery_time: string): Promise<any> {
        let znsHistory: ZnsHistoryDocument = await this.znsHistoryModel.findOne({ msg_id: messageId }).exec();
        
        if (znsHistory) {
          
          znsHistory.is_read = 1;

          await znsHistory.save();

        } else {

          znsHistory = new this.znsHistoryModel({
            zns_campaign_id: trackingId,
            phone,
            msg_id: messageId,
            delivery_time,
            is_read: 0
          });

          await znsHistory.save();
        }
    }
}
