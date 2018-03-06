import { User } from './User';
import { Unit } from './Unit';
import { Building } from './Building';

export class WorldData {
  world: World;
  units: Unit[];
  unitMap: { [name: string]: Unit };
  buildings: Building[];
  buildingMap: { [name: string]: Building };
}

export class World {
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
  users?: User[];
  createdAt?: string;
  updatedAt?: string;

}