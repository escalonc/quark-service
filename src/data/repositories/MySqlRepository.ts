import BaseRepository from '../baseRepository';
import { MySqlConnectionFactory } from 'data/factories/MySqlConnectionFactory';
import DatabaseConfiguration from 'data/databaseConfiguration';

export default class MySqlRepository<TShow, TCreate, TUpdate>
  implements BaseRepository<TShow, TCreate, TUpdate> {
  private readonly connectionFactory: MySqlConnectionFactory = new MySqlConnectionFactory();
  private readonly databaseConfiguration: DatabaseConfiguration = {
    database: '',
    host: '',
    password: '',
    user: '',
  };

  async all(): Promise<TShow[]> {
    const connection = await this.connectionFactory.create(
      this.databaseConfiguration
    );

    const data = await connection.query('select * from todos');
    return data[0] as TShow[];
  }
  add(entity: TCreate): Promise<TCreate> {
    throw new Error('Method not implemented.');
  }
  async update(entity: TUpdate): Promise<TUpdate> {
    throw new Error('Method not implemented.');
  }
  async delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
