export interface T_response<T> {
  ok: boolean;
  data: T;
}

export interface T_page<T> {
  list: T[];
  count: number;
}
