import { User } from './User';
import { Unit } from './Unit';
import { Building } from './Building';

export interface WorldData {
  world: World;
  units: Unit[];
  unitMap: { [name: string]: Unit };
  buildings: Building[];
  buildingMap: { [name: string]: Building };
}

export interface World {
  readonly name: string;
  baseProduction: number;
  speed: number;
  size: number;
  regionSize: number;
  fillTime: number;
  fillPercent: number;
  barbPercent: number;
  timeQouta: number;
  generationArea: number;
  currentRing: number;
  initialLoyalty: number;
  loyaltyRegeneration: number;
  loyaltyReductionRange: [number, number];
  users?: Array<User | Partial<User>>;
  createdAt?: string;
  updatedAt?: string;

}