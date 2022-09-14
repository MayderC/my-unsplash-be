import { IImage } from 'src/Application/Entities/Image';
export interface IImageRepository{
  save(image: IImage): Promise<IImage>
  getAll() : Promise<IImage[]>
  delete(id: string): void
}