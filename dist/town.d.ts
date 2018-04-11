import { BaseModel } from './baseModel';
import { Player } from './player';
import { BuildingQueue } from './buildingQueue';
import { UnitQueue } from './unitQueue';
import { Movement } from './movement';
import { Report } from './report';
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
    outside: number;
    queued: number;
}
export interface TownUnits {
    [name: string]: TownUnit;
}
export interface TownError {
    error: string;
    type: string;
    data: any;
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
    units: TownUnits;
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
}
