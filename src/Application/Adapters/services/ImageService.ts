
import { Injectable } from '@nestjs/common';
import { IImage } from 'src/Application/Entities/Image';
import { IImageService } from '../../Ports/services/IImageService';
import { ImageRepository } from './../repositories/ImageRepository';

@Injectable()
export class ImageService implements IImageService {

  constructor(private imageRepository: ImageRepository){}

  async save(image: IImage): Promise<IImage> {
    return await this.imageRepository.save(image)
  }

 async getAll(): Promise<IImage[]> {
    return await this.imageRepository.getAll();
  }

  async delete(id: string): Promise<void>{
    this.imageRepository.delete(id)
  }
}