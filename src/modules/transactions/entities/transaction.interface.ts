import { IconsEnum } from '../../../shared/enums/icons.enum';
import { GroupInterface } from '../../groups/entities/group.interface';
import { UserInterface } from '../../users/entities/UserInterface';
import { TransactionOwnerInterface } from '../../transaction-owners/entities/transaction-owner.interface';
import { TransactionDebtorInterface } from '../../transaction-debtors/entities/transaction-debtor.interface';

export interface TransactionInterface {
  id: string;
  title: string;
  description: string;
  total: number;
  icon: IconsEnum;
  isSettled: boolean;
  groupId: string;
  creatorId: string;
  debtors?: TransactionDebtorInterface[];
  owners?: TransactionOwnerInterface[];
  creator?: UserInterface;
  group?: GroupInterface;
  createdAt: Date;
  updatedAt: Date;
}
