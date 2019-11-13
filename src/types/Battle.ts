import { User } from './User';
import { BattleStatus } from './BattleStatus';

export interface Battle {
    id: string;
    battleStatus: BattleStatus;
    player1: User;
    player2: User;
    player1Taps: number;
    player2Taps: number;
    timestamp: Date;
    winner: User;
    timer: number;
}