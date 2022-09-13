import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsString} from 'class-validator'
export class imageRequest {

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  url: string

}


