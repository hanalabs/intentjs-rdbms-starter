import { Command, ConsoleIO } from '@libs/quicksilver/console';

@Command('sum')
export class SumCommand {
  async handle(_cli: ConsoleIO): Promise<void> {
    const num1 = await _cli.ask('Enter the first number');
    const num2 = await _cli.ask('Enter the second number');
    _cli.info(`Sum of ${num1} and ${num2} is ${+num1 + +num2}`);
  }
}
