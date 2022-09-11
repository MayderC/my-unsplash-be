
import { Injectable } from '@nestjs/common';
import { IImage } from 'src/Application/Entities/Image';
import { IImageService } from '../../Ports/services/IImageService';

@Injectable()
export class ImageService implements IImageService {

  constructor(){}

  save(image: IImage): Promise<IImage> {
    return Promise.resolve(image)
  }

  getAll(): Promise<IImage[]> {

    return Promise.resolve([
      {name: "!", url: ""},
      {name: "!", url: ""},
      {name: "!", url: ""},
      {name: "!", url: ""},
      {name: "!", url: "", id: 1},
    ])
  }

  delete(id: string): void{
    console.log("deleted", id)
  }
}