import { Profile } from './user';
import { Coords } from '.';

export interface MapTown {
  id: number;
  name: string;
  location: Coords;
  player: Profile;
  alliance: Profile;
  score: number;
}

export interface MapAllianceMark {
  [id: number]: string;
}