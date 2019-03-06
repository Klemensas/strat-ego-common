export interface Dict<T> {
  [key: string]: T;
}

export interface ActionError {
  error: string;
  type: string;
  data: any;
}

export interface Paging {
  page: number;
  pageSize: number;
}

export interface Paged<T> {
  results: T[];
  total: number;
  pageSize: number;
}