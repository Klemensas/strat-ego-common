import { World } from './World';

export interface Token {
  id: number;
  role: string;
}

export interface Profile {
  id: number;
  name: string;
}

export type UserRoles = 'admin' | 'member';

export type UserProviders = 'local' |
  'facebook' |
  'twitter' |
  'google' |
  'github';

export class User {
  readonly id: number;
  name: string;
  email: string;
  password: string;
  salt: string;
  role: UserRoles;
  provider: UserProviders;
  facebook?: any;
  twitter?: any;
  google?: any;
  github?: any;
  worlds?: World[];
  createdAt?: string;
  updatedAt?: string;
}