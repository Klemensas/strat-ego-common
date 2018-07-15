export interface Dict<T> {
    [key: string]: T;
}
export interface ActionError {
    error: string;
    type: string;
    data: any;
}
