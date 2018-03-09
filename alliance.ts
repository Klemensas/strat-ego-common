import { BaseModel } from './baseModel';
import { Player } from './player';
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

export type DiplomacyType = 'alliance' | 'war' | 'nap';
export type DiplomacyStatus = 'pending' | 'ongoing';

export type WarDeclarationPayload = { targetName: string; reason: string; };

export const ALLIANCE_PERMISSIONS: PermissionNames[] = [
  'viewInvites',
  'editInvites',
  'manageForum',
  'editProfile',
  'viewManagement',
  'manageRoles',
  'manageAlliance',
];

export type EventType = 'diplomacy' | 'membership' | 'forum' | 'roles' | 'invitation' | 'management';
export type EventStatus =
  'proposeAlliance' | 'cancelAlliance' | 'rejectAlliance' | 'startAlliance' | 'endAlliance' | 'proposeNap' | 'cancelNap' | 'rejectNap' | 'startNap' | 'endNap' | 'startWar' | 'endWar' |
  'join' | 'leave' | 'remove' |
  'update' |
  'update' | 'updateMember' |
  'create' | 'reject' | 'cancel' |
  'updateProfile' | 'create'
;

export interface Alliance extends BaseModel {
  id: number;
  name: string;

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
  originAlliance?: Alliance | Partial<Alliance>;
  targetAllianceId?: number;
  targetAlliance?: Alliance | Partial<Alliance>;
  originPlayerId?: number;
  originPlayer?: Player | Partial<Player>;
  targetPlayerId?: number;
  targetPlayer?: Player | Partial<Player>;
}

export interface AllianceEvent extends BaseModel {
  id: number;
  type: EventType;
  status: EventStatus;

  // Associations
  originAllianceId?: number;
  originAlliance?: Alliance | Partial<Alliance>;
  targetAllianceId?: number;
  targetAlliance?: Alliance | Partial<Alliance>;
  originPlayerId?: number;
  originPlayer?: Player | Partial<Player>;
  targetPlayerId?: number;
  targetPlayer?: Player | Partial<Player>;
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

export interface AllianceRoleSocketPayload {
  created?: AllianceRole[];
  updated?: AllianceRole[];
  removed?: number[];
  updatedMember?: { id: number; role: AllianceRole }[];
}

export interface AllianceEventSocketMessage<T> {
  event: AllianceEvent;
  data: T;
}

export interface AllianceMember extends Profile {
  allianceRole: AllianceRole;
}
