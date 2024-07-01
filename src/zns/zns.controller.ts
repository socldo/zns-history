
import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Request, Response } from "express";
import { ZnsService } from './zns.service';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { EventDto } from './zns.dto/zns.dto';
import { ZnsTrackingRequestDto } from './zns.dto/zns-message.dto';
import { GrpcMethod } from '@nestjs/microservices';

class AnyObjectDto {
    [key: string]: any;
}

@Controller('zns-history')
export class ZnsController {

    constructor(
        private readonly znsService: ZnsService
    ) { }

    /**
      * 
      * @param data 
      * input: authentication_code
      * -> get access_token, refresh_token
      * -> save db
      * @returns 
      */
    @GrpcMethod('ZnsWebhookService', 'ZnsTracking')
    async AuthenticationCode(dto: ZnsTrackingRequestDto): Promise<ResponseData> {
        let response: ResponseData = new ResponseData();

        try {
            
            await this.znsService.trackingMessage(dto.tracking_id, dto.phone, dto.msg_id, dto.delivery_time);

            response.setStatusGrpc(HttpStatus.OK);
            response.setMessageGrpc("Thành công");

        } catch (error) {
            console.log(error);
        }

        return response;
    }

}
