import { Injectable } from "@nestjs/common";
import { IImage } from "src/Application/Entities/Image";
import { IImageRepository } from "src/Application/Ports/repositories/ImageRepository";

@Injectable()
export class ImageRepository implements IImageRepository {
  delete(id: string): void {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<IImage> {
    throw new Error("Method not implemented.");
  }
  save(image: IImage): Promise<IImage> {
    throw new Error("Method not implemented.");
  }
  
}