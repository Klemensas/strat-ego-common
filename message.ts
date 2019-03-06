import { BaseModel } from './baseModel';
import { Profile } from './user';

export interface Thread extends BaseModel {
  id: number;
  title: string;
  messages: Message[];
  participants: Profile[];
}

export interface Message extends BaseModel {
  id: number;
  senderId: number;
  threadId: number;
  text: string;
  states: MessageState[];
}

export interface MessageState extends BaseModel {
  id: number;
  playerId: number;
  messageId: number;
  read: boolean;
}

export interface MessageState extends BaseModel {
  id: number;
  playerId: number;
  messageId: number;
  read: boolean;
}