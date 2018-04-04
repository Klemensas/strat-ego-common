import { BaseModel } from './baseModel';
import { Town } from './town';

export interface BuildingQueue extends BaseModel {
  id: number;
  name: string;
  level: number;
  buildTime: number;
  endsAt: number | string;

  townId?: number;
  town?: Partial<Town>;
}