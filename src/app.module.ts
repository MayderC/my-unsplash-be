import { Module } from '@nestjs/common';
import { ImagesController } from './Infrastructure/web-service/controller/images.controller';
import { ImageService } from './Application/Adapters/services/ImageService';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [ ImagesController],
  providers: [ImageService],
})
export class AppModule {}
