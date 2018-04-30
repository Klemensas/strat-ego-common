import { Resources } from './town';
import { BaseModel } from './baseModel';
import { Dict } from '.';
export interface CombatStrength {
    general: number;
    cavalry: number;
    archer: number;
    total?: number;
}
export declare enum MovementType {
    attack = 0,
    support = 1,
    return = 2,
}
export declare enum MovementTypeName {
    'Attack' = 0,
    'Support' = 1,
    'Return' = 2,
}
export interface MovementPayload {
    units: Dict<number>;
    type: MovementType;
}
export interface Movement extends BaseModel {
    id: number;
    units: {
        [name: string]: number;
    };
    haul: Resources;
    type: MovementType;
    endsAt: string;
}
