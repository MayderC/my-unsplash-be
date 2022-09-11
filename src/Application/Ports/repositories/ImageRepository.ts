
import { IImage } from 'src/Application/Entities/Image';
export interface IImageRepository{

  delete(id: string): void
  getAll() : Promise<IImage>
  save(image: IImage): Promise<IImage>
  
}