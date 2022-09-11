import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/Application/Adapters/app.service';
import { API_PATH } from 'src/Infrastructure/common/constant';



@Controller(API_PATH)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bye')
  getBye(){
    return this.appService.getBye()
  }
}
