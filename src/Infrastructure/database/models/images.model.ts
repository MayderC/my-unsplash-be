import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IImage } from './../../../Application/Entities/Image';

export type ImageDocument = Image & Document;

@Schema()
export class Image implements IImage{
  @Prop()
  name: string;

  @Prop()
  url: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);