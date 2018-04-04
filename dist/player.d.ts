import { BaseModel } from './baseModel';
import { Alliance, AllianceRole } from './alliance';
import { Town } from './Town';
import { Profile } from './user';
export interface Player extends BaseModel {
    id: number;
    userId: number;
    name: string;
    towns?: Array<Town | Partial<Town>>;
    allianceId?: number;
    alliance?: Alliance | Partial<Alliance>;
    allianceRoleId?: number;
    allianceRole?: AllianceRole | Partial<AllianceRole>;
    invitations?: Array<Alliance | Partial<Alliance> | Profile>;
}