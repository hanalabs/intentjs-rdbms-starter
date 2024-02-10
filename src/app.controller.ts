import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
// import * as markdownit from 'markdown-it';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  async getHello() {
    return { username: 'vinayak' };
  }
}
