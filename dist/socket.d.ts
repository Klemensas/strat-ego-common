import { Coords, MovementPayload } from '.';
export interface SocketPayload {
    town: number;
}
export interface NamePayload extends SocketPayload {
    name: string;
}
export interface BuildPayload extends SocketPayload {
    building: string;
}
export interface PayloadUnit {
    type: string;
    amount: number;
}
export interface RecruitPayload extends SocketPayload {
    units: PayloadUnit[];
}
export interface TroopMovementPayload extends SocketPayload, MovementPayload {
    target: Coords;
}
