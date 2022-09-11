import { IImage } from "src/Application/Entities/Image"

export interface IImageService {
  save(image: IImage): Promise<IImage>
  getAll(): Promise<IImage[]>
  delete(id: string): void
}