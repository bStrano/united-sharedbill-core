import { ParticipantInterface } from '../entities/participant.interface';

export interface ParticipantWithBalance extends ParticipantInterface {
  balance: number;
  credit: number;
  debit: number;
}
