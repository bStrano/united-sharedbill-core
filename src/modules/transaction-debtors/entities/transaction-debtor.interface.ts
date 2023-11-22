import { ParticipantInterface } from '../../participants/entities/participant.interface';
import { TransactionInterface } from '../../transactions/entities/transaction.interface';

export interface TransactionDebtorInterface {
  participantId: string;
  transactionId: string;
  total: number;

  participant?: ParticipantInterface;
  transaction?: TransactionInterface;
}
