import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IImage } from "src/Application/Entities/Image";
import { IImageRepository } from "src/Application/Ports/repositories/ImageRepository";
import { Image, ImageDocument } from "src/Infrastructure/database/models/images.model";


@Injectable()
export class ImageRepository implements IImageRepository {

  constructor(@InjectModel(Image.name) private imageModel: Model<ImageDocument> ){}

  async delete(id: string): Promise<void> {
    await this.imageModel.findByIdAndDelete(id)
  }

  async getAll(): Promise<IImage[]> {
    return await this.imageModel.find()
  }

  async save(image: IImage): Promise<IImage> {
    return this.imageModel.create(image)
  }
  
}