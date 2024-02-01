#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const core_1 = require('@nestjs/core');
const console_1 = require('./dist/libs/quicksilver/src/console');
const yargs = require('yargs-parser');
const fs = require('fs');

function checkFileExistsSync(filepath) {
  let flag = true;
  try {
    fs.accessSync(filepath, fs.constants.F_OK);
  } catch (e) {
    flag = false;
  }
  return flag;
}

if (!checkFileExistsSync('./dist/src/main.js')) {
  // CHANGE THE FILE TO CHECK IF NEEDED
  console_1.Logger.error(' PLEASE BUILD THE CLI PROJECT FIRST ');
  console_1.Logger.info('🪄  Run command: `npm run build` '); // CHANGE THE BUILD COMMAND IF NEEDED
  return process.exit();
}

const app_1 = require('./dist/src/app.module'); // CHANGE THE IMPORT IF NEEDED

async function bootstrap() {
  const app = await core_1.NestFactory.createApplicationContext(
    app_1.AppModule,
    { logger: false },
  );
  const argv = yargs(process.argv.slice(2));
  const c = argv._[0];
  argv.command = c;
  if (typeof argv.command != 'string') {
    console_1.Logger.error(' PLEASE ADD A COMMAND ');
    return process.exit();
  }
  const command = console_1.CommandMeta.getCommand(argv.command);
  if (!command || !command.target) {
    console_1.Logger.error(` ${argv.command} : command not found `);
    return process.exit();
  }
  await console_1.CommandRunner.handle(command, argv);
  return process.exit();
}
bootstrap();
//# sourceMappingURL=cli.js.map
