import { Resources } from "./Town";
import { Requirements } from "./Building";

export type AttackType = 'general' | 'archer' | 'cavalry' | 'siege';

export interface Combat {
  attack: number;
  defense: {
    general: number;
    cavalry: number;
    archer: number;
  };
}

export interface Unit {
  id: number;
  name: string;
  attackType: string;
  speed: number;
  recruitTime: number;
  haul: number;
  requirements?: Requirements[];
  costs: Resources;
  combat: Combat;
  createdAt?: string;
  updatedAt?: string;
}