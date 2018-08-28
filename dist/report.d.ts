import { Resources, Town } from './town';
import { BaseModel } from './baseModel';
import { Player } from './player';
import { Dict } from './util';
export interface CombatCasualties {
    units: Dict<number>;
    losses: Dict<number>;
}
export interface Haul {
    maxHaul: number;
    haul: Resources;
}
export declare enum CombatOutcome {
    attack = 0,
    defense = 1,
}
export interface Report extends BaseModel {
    id: number;
    outcome: CombatOutcome;
    origin: CombatCasualties;
    target: CombatCasualties;
    haul: Haul;
    loyaltyChange: number[];
    originTownId?: number;
    originTown: Partial<Town>;
    targetTownId?: number;
    targetTown: Partial<Town>;
    originPlayerId?: number;
    originPlayer: Partial<Player>;
    targetPlayerId?: number;
    targetPlayer: Partial<Player>;
}
