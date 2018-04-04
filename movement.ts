import { Resources } from './Town';
import { BaseModel } from './baseModel';

export interface CombatStrength {
  general: number;
  cavalry: number;
  archer: number;
  total?: number;
}

export const enum MovementType {
  attack = 0,
  support,
  return,
};

export enum MovementTypeName {
  'Attack' = 0,
  'Support',
  'Return',
};


export type MovementUnit = [string, number];

export interface Movement extends BaseModel {
  id: number;
  units: { [name: string]: number };
  haul: Resources;
  type: MovementType;
  endsAt: string;
}