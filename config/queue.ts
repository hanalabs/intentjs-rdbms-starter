import { QueueOptions } from '@libs/quicksilver/queue';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'queue',
  () =>
    ({
      isGlobal: true,
      default: 'pg',
      connections: {},
    }) as QueueOptions,
);
