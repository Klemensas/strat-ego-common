import { Resources } from './town';

export interface Requirements {
  item: string;
  level: number;
}

export interface BuildingLevelData {
  score: number;
  buildTime: number;
  costs: Resources;
  storage?: number;
  population?: number;
  recruitment?: number;
  production?: number;
  defense?: number;
}

export interface Building {
  readonly id: number;
  name: string;
  levels: {
    max: number;
    min: number;
  };
  requirements?: Requirements[];
  data: BuildingLevelData[];
  createdAt?: string;
  updatedAt?: string;
};