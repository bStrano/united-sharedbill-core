import { TransactionInterface } from '../../transactions/entities/transaction.interface';
import { TransactionDebtorInterface } from '../../transaction-debtors/entities/transaction-debtor.interface';
import { TransactionOwnerInterface } from '../../transaction-owners/entities/transaction-owner.interface';
import { GroupInterface } from '../../groups/entities/group.interface';
import { UserInterface } from '../../users/entities/UserInterface';

export interface ParticipantInterface {
  id: string;
  userId: string;
  groupId: string;
  group?: GroupInterface;
  transactions?: TransactionInterface[];
  transactionOwners?: TransactionOwnerInterface[];
  transactionDebtors?: TransactionDebtorInterface[];
  user?: UserInterface;
  createdAt: Date;
  updatedAt?: Date;
}
