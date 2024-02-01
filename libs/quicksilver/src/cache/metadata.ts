import { Injectable } from '@nestjs/common';
import { CacheOptions } from './interfaces';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CacheMetadata {
  private static data: CacheOptions;

  constructor(config: ConfigService) {
    CacheMetadata.data = config.get('cache');
  }

  static getData(): CacheOptions {
    return CacheMetadata.data;
  }
}
