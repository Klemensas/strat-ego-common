import { BaseModel } from './baseModel';
import { Alliance, AllianceRole } from './alliance';
import { Town } from './town';
import { Profile } from './user';
import { Report } from '.';

export interface Player extends BaseModel {
  id: number;
  userId: number;
  name: string;

  // Associations
  towns?: Array<Town | Partial<Town>>;
  originReports: Array<Report | Partial<Report>>;
  targetReports: Array<Report | Partial<Report>>;
  allianceId?: number;
  alliance?: Alliance | Partial<Alliance>;
  allianceRoleId?: number;
  allianceRole?: AllianceRole | Partial<AllianceRole>;
  invitations?: Array<Alliance | Partial<Alliance> | Profile>;
}

export interface RankProfile extends Profile {
  score?: number;
}