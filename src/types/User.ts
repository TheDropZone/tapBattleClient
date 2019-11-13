import { Battle } from './Battle';

export interface User {
    id: string;
    taps: number;
    totalMillisPlayed: number;
    username: string;
    battles: Battle[];
}