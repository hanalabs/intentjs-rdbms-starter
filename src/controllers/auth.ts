import { RestController } from '@libs/quicksilver';
import { Controller } from '@nestjs/common';

@Controller('')
export class AuthController extends RestController {
  constructor() {
    super();
  }
}
