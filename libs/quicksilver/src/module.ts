import { Global, Module } from '@nestjs/common';
import config from '@config/index';
import { ConfigModule } from '@nestjs/config';
import { DiscoveryModule } from '@nestjs/core';
import { BaseValidator } from './validator';
import { ConsoleExplorer, ListCommands } from './console';
import { DbOperationsCommand } from './database/commands/migrations';
import { ObjectionService } from './database';
import { EventExplorer } from './events';
import { StorageService } from './storage/service';
import { CacheMetadata } from './cache/metadata';
import { CacheService } from './cache';
import { QueueService } from './queue';
import { QueueConsoleCommands } from './queue/console';
import { QueueExplorer } from './queue/explorer';

@Global()
@Module({
  imports: [
    DiscoveryModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: config,
    }),
  ],
  providers: [
    BaseValidator,
    ConsoleExplorer,
    ListCommands,
    DbOperationsCommand,
    ObjectionService,
    EventExplorer,
    StorageService,
    CacheMetadata,
    CacheService,
    QueueService,
    QueueConsoleCommands,
    QueueExplorer,
  ],
  exports: [],
})
export class QuickSilverModule {}
