export default interface BaseRepository<TShow, TCreate, TUpdate> {
  all(): Promise<TShow>;
  add(entity: TCreate): Promise<TCreate>;
  update(entity: TUpdate): Promise<TUpdate>;
  delete(id: number): Promise<void>;
}
