import { Injectable } from '@nestjs/common';
import { IAppService } from '../Ports/services/IApp.service';

@Injectable()
export class AppService implements IAppService{
  getBye(): string {
    
    return "Byeeee"
  }
  getHello(): string {
    return 'Hello World!';
  }
}
