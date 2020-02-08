import { Connection, createConnection } from 'mariadb';
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
