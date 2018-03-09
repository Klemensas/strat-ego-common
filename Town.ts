import { BaseModel } from './baseModel';
import { Player } from './player';

export interface Resources {
  wood: number;
  clay: number;
  iron: number;
}

export interface TownBuildings {
  [name: string]: {
    level: number;
    queued: number;
  };
}

export type Coords = [number, number];

export interface TownUnits {
  [name: string]: {
    inside: number;
    outside: number;
    queued: number;
  };
}

export interface Town extends BaseModel {
  id: number;
  name: string;
  loyalty: number;
  location: Coords;
  production: Resources;
  resources: Resources;
  units: TownUnits;
  buildings: TownBuildings;

  playerId?: number;
  player?: Player | Partial<Player>;
}