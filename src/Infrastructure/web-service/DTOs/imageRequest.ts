import { ApiProperty } from '@nestjs/swagger';
export class imageRequest {

  @ApiProperty()
  name: string

  @ApiProperty()
  url: string

}


