import { Resources } from './town';
import { BaseModel } from './baseModel';
import { Dict, Town } from '.';

export interface CombatStrength {
  general: number;
  cavalry: number;
  archer: number;
  total?: number;
}

export enum MovementType {
  attack = 0,
  support,
  return,
}

export enum MovementTypeName {
  'Attack' = 0,
  'Support',
  'Return',
};


export interface MovementPayload {
  units: Dict<number>;
  type: MovementType;
}

export interface Movement extends BaseModel {
  id: number;
  units: { [name: string]: number };
  haul: Resources;
  type: MovementType;
  originTownId: number;
  originTown: Partial<Town>;
  targetTownId: number;
  targetTown: Partial<Town>;
  endsAt: string;
}
