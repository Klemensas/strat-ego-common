import { Resources } from "./Town";
export interface Requirements {
    item: string;
    level: number;
}
export interface Building {
    readonly id: number;
    name: string;
    levels: {
        max: number;
        min: number;
    };
    requirements?: Requirements[];
    data: [{
        buildTime: number;
        costs: Resources;
        storage?: number;
        population?: number;
        recruitment?: number;
        production?: number;
        defense?: number;
    }];
    createdAt?: string;
    updatedAt?: string;
}
