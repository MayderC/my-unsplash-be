
export interface IImageService {
  save(): Promise<any>
  getAll(): Promise<any>
  delete(id: string): Promise<any>
}