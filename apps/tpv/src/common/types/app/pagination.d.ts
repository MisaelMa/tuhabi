export interface PaginationNest<T> {
  total: number;
  data: T[],
  lastPage: number;
  page: number;
}
