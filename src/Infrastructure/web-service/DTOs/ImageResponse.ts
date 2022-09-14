import { ApiProperty } from '@nestjs/swagger';
import { IImage } from 'src/Application/Entities/Image';


export class imageResponse implements IImage{

  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  url: string

}
