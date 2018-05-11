import { BaseModel } from './baseModel';
import { Alliance, AllianceRole } from './alliance';
import { Town } from './town';
import { Profile } from './user';
import { Report } from '.';

export interface Player extends BaseModel {
  id: number;
  userId: number;
  name: string;
  description: string;
  avatarUrl: string;
  score?: number;

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

export interface PlayerProfile extends Profile {
  score?: number;
}

export interface ProfileUpdate {
  description?: string;
  avatarUrl?: string;
}