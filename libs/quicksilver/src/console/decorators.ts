import 'reflect-metadata';
import { QuickSilverConsoleConstants } from './constants';
import { CommandMetaOptions } from './interfaces';

/**
 * Command decorator function to add a new command to CommandMeta class
 * @param command string
 * @param options Record<string, any>
 */
export function Command(command: string, options?: CommandMetaOptions) {
  options = options || ({} as CommandMetaOptions);
  return function (...args: string[] | any[]) {
    switch (args.length) {
      case 1:
        Reflect.defineMetadata(
          QuickSilverConsoleConstants.commandName,
          command,
          args[0],
        );
        Reflect.defineMetadata(
          QuickSilverConsoleConstants.commandOptions,
          options,
          args[0],
        );
        break;

      case 3:
        Reflect.defineMetadata(
          QuickSilverConsoleConstants.commandName,
          command,
          args[0],
          args[1],
        );
        Reflect.defineMetadata(
          QuickSilverConsoleConstants.commandOptions,
          options,
          args[0],
          args[1],
        );
        break;
    }
  };
}
