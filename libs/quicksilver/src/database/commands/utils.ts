import { Inject, Injectable } from '@nestjs/common';
import { Command, ConsoleIO } from '../../console';
import { hanalabsNestObjection } from '../constants';
import { DatabaseOptions } from '../options';
import { ObjectionService } from '../service';

@Injectable()
export class DatabaseUtilitiesCommand {
  constructor(
    @Inject(hanalabsNestObjection.databaseOptions)
    private options: DatabaseOptions,
  ) {}

  @Command('db:column-info {tableName} {--connection==}')
  async listColumnInfo(_cli: ConsoleIO): Promise<void> {
    const conn = _cli.option<string>('connection') || this.options.default;
    const knex = ObjectionService.connection(conn);
    const tableName = _cli.argument<string>('tableName');

    const columnInfo = await knex.table(tableName).columnInfo();

    const arr = [];
    for (const column in columnInfo) {
      arr.push({
        column,
        ...columnInfo[column],
      });
    }

    _cli.table(arr);
  }
}
