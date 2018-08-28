import { World } from './world';
export interface Token {
    id: number;
    role: string;
}
export interface Profile {
    id?: number;
    name?: string;
    createdAt?: number | string;
}
export interface Credentials {
    name?: string;
    email: string;
    password: string;
}
export declare type UserRoles = 'admin' | 'member';
export declare type UserProviders = 'local' | 'facebook' | 'twitter' | 'google' | 'github';
export interface User {
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
    worlds?: Array<World | Partial<World>>;
    createdAt?: string;
    updatedAt?: string;
}
