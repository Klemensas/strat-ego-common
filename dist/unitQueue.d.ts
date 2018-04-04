import { BaseModel } from './baseModel';
import { Town } from './town';
export interface UnitQueue extends BaseModel {
    id: number;
    name: string;
    amount: number;
    recruitTime: number;
    endsAt: number | string;
    townId?: number;
    town?: Partial<Town>;
}
