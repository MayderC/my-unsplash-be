import { Module } from '@nestjs/common';
import { AppController } from './Infrastructure/web-service/controller/app.controller';
import { AppService } from './Application/Adapters/app.service';
import { ImagesController } from './Infrastructure/web-service/controller/images.controller';
import { ImageService } from './Application/Adapters/services/ImageService';

@Module({
  imports: [],
  controllers: [AppController, ImagesController],
  providers: [AppService, ImageService],
})
export class AppModule {}
