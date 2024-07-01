import { ApiProperty } from '@nestjs/swagger';

export class ZnsTrackingRequestDto {
  @ApiProperty({
    example: "tracking_id_example",
    description: "ID theo dõi",
  })
  readonly tracking_id: string;

  @ApiProperty({
    example: "84123456789",
    description: "Số điện thoại",
  })
  readonly phone: string;

  @ApiProperty({
    example: "f19fa05e7c738428dd67",
    description: "ID của tin nhắn",
  })
  readonly msg_id: string;

  @ApiProperty({
    example: "1719301454061",
    description: "Thời gian giao hàng",
  })
  readonly delivery_time: string;
}
