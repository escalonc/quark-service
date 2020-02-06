import BaseRepository from 'data/baseRepository';
import ShowTodoModel from './models/ShowTodoModel';
import CreateTodoModel from './models/CreateTodoModel';
import UpdateTodoModel from './models/UpdateTodoModel';
export default interface TodoRepository
  extends BaseRepository<ShowTodoModel, CreateTodoModel, UpdateTodoModel> {}
