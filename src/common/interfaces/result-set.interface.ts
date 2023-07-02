export interface ResultSet<T> {
  items?: T;
  meta: {
    skipped: number;
    limit: number;
    total: number;
  };
}
