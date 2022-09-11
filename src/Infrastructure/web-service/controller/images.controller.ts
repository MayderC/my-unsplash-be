import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ImageService } from 'src/Application/Adapters/services/ImageService';
import { API_PATH } from '../../common/constant/index';
import { imageRequest } from '../DTOs/imageRequest';
import {ApiOkResponse} from '@nestjs/swagger'
import { imageResponse } from '../DTOs/ImageResponse';

@Controller(API_PATH + '/image')
export class ImagesController {

  constructor(private readonly imageService : ImageService){}

  @ApiOkResponse({
    isArray: false,
    type: imageResponse
  })
  @Post()
  async save(@Body() image: imageRequest) {
    try {
      return await this.imageService.save(image)
    } catch (error) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({
    isArray: true,
    type: imageResponse
  })
  @Get()
  async getAll(){
    try {
      return await this.imageService.getAll();
    } catch (error) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
    }
  }

  @Delete('/id')
  async delete(@Param('id') id: string){
    try {
      return await this.imageService.delete(id)
    } catch (error) {
      
    }
  }



}
