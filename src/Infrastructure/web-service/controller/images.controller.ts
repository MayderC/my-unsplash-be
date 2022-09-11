import { Controller, Get, Post } from '@nestjs/common';
import { ImageService } from 'src/Application/Adapters/services/ImageService';
import { API_PATH } from '../../common/constant/index';

@Controller(API_PATH + '/image')
export class ImagesController {

  constructor(private readonly imageService : ImageService){}

  @Post()
  save(){
    return this.imageService.save()
  }


}
