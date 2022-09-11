
import { Injectable } from '@nestjs/common';
import { IImageService } from '../../Ports/services/IImageService';

@Injectable()
export class ImageService implements IImageService {
  save(): Promise<any> {
    return Promise.resolve({msg : "Saved"})
  }
  getAll(): Promise<any> {

    return Promise.resolve([
      {msg: "!"},
      {msg: "2"},
      {msg: "3"},
      {msg: "4"},
      {msg: "5"},
      {msg: "6"},
    ])
  }
  delete(id: string): Promise<any> {
    return Promise.resolve({msg : "Deleted"})
  }
}