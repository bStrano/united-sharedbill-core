import { ParticipantInterface } from '../../participants/entities/participant.interface';
import { TransactionInterface } from '../../transactions/entities/transaction.interface';

export interface TransactionOwnerInterface {
  participantId: string;
  transactionId: string;
  total: number;
  createdAt: Date;
  updatedAt?: Date;
  participant?: ParticipantInterface;
  transaction?: TransactionInterface;
}
