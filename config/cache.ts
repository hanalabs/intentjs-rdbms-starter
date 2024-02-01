import { CacheOptions } from '@libs/quicksilver/cache';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'cache',
  () =>
    ({
      isGlobal: true,
      default: 'redis',
      stores: {},
    }) as CacheOptions,
);
