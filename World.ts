import { User } from './User';

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

  createdAt: string;
  updatedAt: string;

}