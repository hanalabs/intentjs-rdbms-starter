import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntentModule } from '@libs/quicksilver';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SumCommand } from './sum';

@Module({
  imports: [
    IntentModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SumCommand],
})
export class AppModule {}
