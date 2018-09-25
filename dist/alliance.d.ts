import { BaseModel } from './baseModel';
import { Player, PlayerProfile } from './player';
import { Profile } from '.';
export declare type PermissionNames = 'viewInvites' | 'editInvites' | 'manageForum' | 'editProfile' | 'viewManagement' | 'manageRoles' | 'manageAlliance';
export declare type AlliancePermissions = {
    [name in PermissionNames]: boolean;
};
export declare enum DiplomacyType {
    'alliance' = 0,
    'war' = 1,
    'nap' = 2,
}
export declare enum DiplomacyStatus {
    'pending' = 0,
    'ongoing' = 1,
}
export declare enum EventType {
    'diplomacy' = 0,
    'invitation' = 1,
    'membership' = 2,
    'roles' = 3,
    'management' = 4,
    'profile' = 5,
    'forum' = 6,
}
export declare enum EventStatus {
    'proposeAlliance' = 0,
    'cancelAlliance' = 1,
    'rejectAlliance' = 2,
    'startAlliance' = 3,
    'endAlliance' = 4,
    'proposeNap' = 5,
    'cancelNap' = 6,
    'rejectNap' = 7,
    'startNap' = 8,
    'endNap' = 9,
    'startWar' = 10,
    'endWar' = 11,
    'join' = 12,
    'leave' = 13,
    'remove' = 14,
    'update' = 15,
    'updateMember' = 16,
    'reject' = 17,
    'cancel' = 18,
    'updateProfile' = 19,
    'create' = 20,
}
export declare const diplomacyTypeToEventStatus: {
    0: EventStatus;
    2: EventStatus;
};
export declare const diplomacyTypeName: {
    0: string;
    2: string;
};
export interface WarDeclarationPayload {
    targetName: string;
    reason: string;
}
export declare const ALLIANCE_PERMISSIONS: PermissionNames[];
export interface Alliance extends BaseModel {
    id: number;
    name: string;
    description: string;
    avatarUrl: string;
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
    allianceId?: number;
    alliance?: Alliance | Partial<Alliance>;
    players?: Array<Player | Partial<Player>>;
}
export interface AllianceDiplomacy extends BaseModel {
    id: number;
    type: DiplomacyType;
    status: DiplomacyStatus;
    data?: any;
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
    updatedMember?: Array<{
        id: number;
        role: AllianceRole;
    }>;
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
