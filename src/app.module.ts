import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuickSilverModule } from '@libs/quicksilver';

@Module({
  imports: [QuickSilverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
