export interface EcwidSearchResult<T> {
  total: number;
  count: number;
  offset: number;
  limit: number;
  items: T[];
}
