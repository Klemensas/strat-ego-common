import { BaseModel } from './baseModel';
import { Player, PlayerProfile } from './player';
import { Profile } from '.';

export type PermissionNames =
'viewInvites' |
'editInvites' |
'manageForum' |
'editProfile' |
'viewManagement' |
'manageRoles' |
'manageAlliance';

export type AlliancePermissions = {
[name in PermissionNames]: boolean;
};

export enum DiplomacyType {
  'alliance' = 0,
  'war',
  'nap',
}
export enum DiplomacyStatus {
  'pending' = 0,
  'ongoing',
}

export enum EventType {
  'diplomacy' = 0,
  'invitation',
  'membership',
  'roles',
  'management',
  'profile',
  'forum',
}
export enum EventStatus {
  'proposeAlliance' = 0,
  'cancelAlliance',
  'rejectAlliance',
  'startAlliance',
  'endAlliance',
  'proposeNap',
  'cancelNap',
  'rejectNap',
  'startNap',
  'endNap',
  'startWar',
  'endWar',
  'join',
  'leave',
  'remove',
  'update',
  'updateMember',
  'reject',
  'cancel',
  'updateProfile',
  'create',
}

export const diplomacyTypeToEventStatus = {
  0: EventStatus.proposeAlliance,
  2: EventStatus.proposeNap,
};
export const diplomacyTypeName = {
  0: 'Alliance',
  2: 'Nap',
};

export interface WarDeclarationPayload {
  targetName: string;
  reason: string;
}

export const ALLIANCE_PERMISSIONS: PermissionNames[] = [
  'viewInvites',
  'editInvites',
  'manageForum',
  'editProfile',
  'viewManagement',
  'manageRoles',
  'manageAlliance',
];

export interface Alliance extends BaseModel {
  id: number;
  name: string;
  description: string;
  avatarUrl: string;

  // Associations
  roles?: Array<AllianceRole | Partial<AllianceRole>>;
  defaultRoleId?: number;
  defaultRole?: AllianceRole | Partial<AllianceRole>;
  masterRoleId?: number;
  masterRole?: AllianceRole | Partial<AllianceRole>;
  members?: Array<Player | Partial<Player>>;
  invitations?: Array<Player | Partial<Player> | Profile>;
  diplomacyOrigin?: Array<AllianceDiplomacy | Partial<AllianceDiplomacy>>;
  diplomacyTarget?: Array<AllianceDiplomacy | Partial<AllianceDiplomacy>>;
  eventOrigin?: Array<AllianceEvent | Partial<AllianceEvent>>;
  eventTarget?: Array<AllianceEvent | Partial<AllianceEvent>>;
  events?: Array<AllianceEvent | Partial<AllianceEvent>>;
  messages?: Array<AllianceMessage | Partial<AllianceMessage>>;
}

export interface AllianceRole extends BaseModel {
  id?: number;
  name?: string;
  permissions?: AlliancePermissions;

  // Associations
  allianceId?: number;
  alliance?: Alliance | Partial<Alliance>;
  players?: Array<Player | Partial<Player>>;
}

export interface AllianceDiplomacy extends BaseModel {
  id: number;
  type: DiplomacyType;
  status: DiplomacyStatus;
  data?: any;

  // Associations
  originAllianceId?: number;
  originAlliance?: Alliance | AllianceProfile;
  targetAllianceId?: number;
  targetAlliance?: Alliance | AllianceProfile;
  originPlayerId?: number;
  originPlayer?: Player | PlayerProfile;
  targetPlayerId?: number;
  targetPlayer?: Player | PlayerProfile;
}

export interface AllianceEvent extends BaseModel {
  id: number;
  type: EventType;
  status: EventStatus;

  // Associations
  originAllianceId?: number;
  originAlliance?: Alliance | AllianceProfile;
  targetAllianceId?: number;
  targetAlliance?: Alliance | AllianceProfile;
  originPlayerId?: number;
  originPlayer?: Player | PlayerProfile;
  targetPlayerId?: number;
  targetPlayer?: Player | PlayerProfile;
}

export interface AllianceMessage extends BaseModel {
  id?: number;
  text?: string;

  // Associations
  playerId?: number;
  player?: Player | Partial<Player>;
  allianceId?: number;
  alliance?: Alliance | Partial<Alliance>;
}

export interface MessagePayload {
  text: string;
  messageStamp: number;
}

export interface AllianceRoleSocketPayload {
  created?: AllianceRole[];
  updated?: AllianceRole[];
  removed?: number[];
  updatedMember?: Array<{ id: number; role: AllianceRole }>;
}

export interface AllianceEventSocketMessage<T> {
  event: AllianceEvent;
  data: T;
}

export interface AllianceMember extends Profile {
  allianceRole: AllianceRole;
}

export interface PlayerRolePayload {
  playerId: number;
  roleId: number;
}

export interface RoleUpdatePayload {
  roles: Array<Partial<AllianceRole>>;
  newRoles: Array<Partial<AllianceRole>>;
}

export interface ForumCategoryPayload {
  name: string;
  description: string;
}

export interface AllianceProfile extends Profile {
  score?: number;
  members?: Array<Partial<PlayerProfile>>;
  description?: string;
  avatarUrl?: string;
}