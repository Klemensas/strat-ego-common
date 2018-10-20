import { BaseModel } from './baseModel';
import { Player } from './player';
import { BuildingQueue } from './buildingQueue';
import { UnitQueue } from './unitQueue';
import { Movement } from './movement';
import { Report } from './report';
import { Dict } from './util';
import { Profile } from './user';
import { PlayerProfile } from './player';
export interface Resources {
    wood: number;
    clay: number;
    iron: number;
}
export interface TownBuildings {
    [name: string]: {
        level: number;
        queued: number;
    };
}
export declare type Coords = [number, number];
export interface TownUnit {
    inside: number;
    queued: number;
}
export declare type TownQueues = Array<Partial<BuildingQueue | UnitQueue>>;
export declare type QueueType = 'Movement' | 'UnitQueue' | 'BuildingQueue';
export interface Town extends BaseModel {
    id: number;
    name: string;
    loyalty: number;
    location: Coords;
    production: Resources;
    resources: Resources;
    units: Dict<TownUnit>;
    buildings: TownBuildings;
    score: number;
    playerId?: number;
    player?: Player | Partial<Player>;
    buildingQueues?: Array<BuildingQueue | Partial<BuildingQueue>>;
    unitQueues?: Array<UnitQueue | Partial<UnitQueue>>;
    originMovements?: Array<Movement | Partial<Movement>>;
    targetMovements?: Array<Movement | Partial<Movement>>;
    originReports?: Array<Report | Partial<Report>>;
    targetReports?: Array<Report | Partial<Report>>;
    targetSupport?: Array<TownSupport | Partial<TownSupport>>;
    originSupport?: Array<TownSupport | Partial<TownSupport>>;
}
export interface TownSupport extends BaseModel {
    id: number;
    units: Dict<number>;
    originTownId?: number;
    originTown: Town | Partial<Town>;
    targetTownId?: number;
    targetTown: Town | Partial<Town>;
}
export interface UpdateSupportPayload {
    town?: number;
    support?: number;
}
export interface UpdateSupportSuccessPayload extends UpdateSupportPayload {
    movement: Partial<Movement>;
}
export interface SupportMovementResult {
    town: number;
    movement: number;
    support: TownSupport;
}
export interface TownProfile extends Profile {
    playerId?: number;
    player?: PlayerProfile;
    score?: number;
    location?: Coords;
}
