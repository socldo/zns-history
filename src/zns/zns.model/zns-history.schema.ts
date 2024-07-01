import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ZnsHistoryDocument = ZnsHistory & Document;

@Schema({ collection: "zns_histories" })
export class ZnsHistory {

    @Prop({ required: false })
    zns_campaign_id: string;

    @Prop({ required: false })
    phone: string;

    @Prop({ required: false })
    msg_id: string;

    @Prop({ required: false })
    delivery_time: string;

    @Prop({ required: false })
    is_read: number;
}

export const ZnsHistorySchema = SchemaFactory.createForClass(ZnsHistory);
