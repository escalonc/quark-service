import { Connection, createConnection } from 'mysql2/promise';
import DatabaseConfiguration from 'data/databaseConfiguration';

export class MySqlConnectionFactory {
  async create({
    database,
    host,
    password,
    user,
  }: DatabaseConfiguration): Promise<Connection> {
    const connection: Connection = await createConnection({
      host,
      user,
      password,
      database,
    });

    return connection;
  }
}
