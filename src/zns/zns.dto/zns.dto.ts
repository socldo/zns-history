import { ApiProperty } from '@nestjs/swagger';

class SenderDto {
  @ApiProperty({
    example: "2893352839501541173",
    description: "ID của người gửi",
  })
  readonly id: string;
}

class RecipientDto {
  @ApiProperty({
    example: "84123456789",
    description: "ID của người nhận",
  })
  readonly id: string;
}

class MessageDto {
  @ApiProperty({
    example: "1602960467432",
    description: "Thời gian giao hàng",
  })
  readonly delivery_time: string;

  @ApiProperty({
    example: "15a0cc0bbb13bd4ce403",
    description: "ID của tin nhắn",
  })
  readonly msg_id: string;

  @ApiProperty({
    example: "tracking_id",
    description: "ID theo dõi",
  })
  readonly tracking_id: string;
}

export class EventDto {
  @ApiProperty({
    example: {
      id: "2893352839501541173"
    },
    description: "Thông tin người gửi",
  })
  readonly sender: SenderDto;

  @ApiProperty({
    example: {
      id: "84123456789"
    },
    description: "Thông tin người nhận",
  })
  readonly recipient: RecipientDto;

  @ApiProperty({
    example: "user_received_message",
    description: "Tên sự kiện",
  })
  readonly event_name: string;

  @ApiProperty({
    example: {
      delivery_time: "1602960467432",
      msg_id: "15a0cc0bbb13bd4ce403",
      tracking_id: "tracking_id"
    },
    description: "Thông tin tin nhắn",
  })
  readonly message: MessageDto;

  @ApiProperty({
    example: "2074138120372622546",
    description: "ID của ứng dụng",
  })
  readonly app_id: string;

  @ApiProperty({
    example: "1602560967477",
    description: "Dấu thời gian",
  })
  readonly timestamp: string;
}
