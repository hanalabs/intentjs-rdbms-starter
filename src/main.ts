import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Edge } from 'edgejs-cjs';
import { marked } from 'marked';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const edge = Edge.create({ cache: false });

  edge.mount(new URL(`file://${join(__dirname, '../..', 'views')}`));

  const markdown = {
    block: true,
    seekable: false,
    tagName: 'markdown',
    compile(parser, buffer, token) {
      const mdStr = token.children
        .map((c) => c.value?.trim())
        .filter((v) => v)
        .join('\n');
      // const markdown = marked({ html: true });
      const result = marked.parse(mdStr);
      console.log(mdStr);
      buffer.outputRaw(result);
    },
  };

  edge.registerTag(markdown);

  app.engine('edge', (path, options, callback) =>
    edge
      .render(path, options)
      .catch((error) => callback(error))
      .then((rendered) => callback(null, rendered)),
  );
  app.setViewEngine('edge');
  // bindEdge(app);
  await app.listen(3000);
}

bootstrap();
