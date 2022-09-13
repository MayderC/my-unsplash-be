import { Module } from '@nestjs/common';
import { ImagesController } from './Infrastructure/web-service/controller/images.controller';
import { ImageService } from './Application/Adapters/services/ImageService';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Image, ImageSchema } from './Infrastructure/database/models/images.model';
import { ImageRepository } from './Application/Adapters/repositories/ImageRepository';

@Module({
  imports: [
  ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONEXION),
    MongooseModule.forFeature([{name : Image.name, schema : ImageSchema}])
],
  controllers: [ ImagesController],
  providers: [
    ImageService,
    ImageRepository
  ],
})
export class AppModule {}
