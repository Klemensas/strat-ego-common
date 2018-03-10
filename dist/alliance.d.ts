import { BaseModel } from './baseModel';
import { Player } from './player';
import { Profile } from '.';
export declare type PermissionNames = 'viewInvites' | 'editInvites' | 'manageForum' | 'editProfile' | 'viewManagement' | 'manageRoles' | 'manageAlliance';
export declare type AlliancePermissions = {
    [name in PermissionNames]: boolean;
};
export declare type DiplomacyType = 'alliance' | 'war' | 'nap';
export declare type DiplomacyStatus = 'pending' | 'ongoing';
export declare type WarDeclarationPayload = {
    targetName: string;
    reason: string;
};
export declare const ALLIANCE_PERMISSIONS: PermissionNames[];
export declare type EventType = 'diplomacy' | 'membership' | 'forum' | 'roles' | 'invitation' | 'management';
export declare type EventStatus = 'proposeAlliance' | 'cancelAlliance' | 'rejectAlliance' | 'startAlliance' | 'endAlliance' | 'proposeNap' | 'cancelNap' | 'rejectNap' | 'startNap' | 'endNap' | 'startWar' | 'endWar' | 'join' | 'leave' | 'remove' | 'update' | 'update' | 'updateMember' | 'create' | 'reject' | 'cancel' | 'updateProfile' | 'create';
export interface Alliance extends BaseModel {
    id: number;
    name: string;
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
    playerId?: number;
    player?: Player | Partial<Player>;
    allianceId?: number;
    alliance?: Alliance | Partial<Alliance>;
}
export interface AllianceRoleSocketPayload {
    created?: AllianceRole[];
    updated?: AllianceRole[];
    removed?: number[];
    updatedMember?: {
        id: number;
        role: AllianceRole;
    }[];
}
export interface AllianceEventSocketMessage<T> {
    event: AllianceEvent;
    data: T;
}
export interface AllianceMember extends Profile {
    allianceRole: AllianceRole;
}
