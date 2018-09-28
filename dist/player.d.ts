import { BaseModel } from './baseModel';
import { Alliance, AllianceRole, AllianceProfile } from './alliance';
import { Town, TownProfile } from './town';
import { Profile } from './user';
import { Report } from './report';
export interface Player extends BaseModel {
    id: number;
    userId: number;
    name: string;
    description: string;
    avatarUrl: string;
    tutorialStage: number;
    score?: number;
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
    allianceId?: number;
    alliance?: AllianceProfile;
    towns?: Array<TownProfile>;
    description?: string;
    avatarUrl?: string;
}
export interface ProfileUpdate {
    description?: string;
    avatarUrl?: string;
}
