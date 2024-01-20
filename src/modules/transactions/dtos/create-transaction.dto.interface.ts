import { IconsEnum } from "libs/united-sharedbill-core/src/shared/enums/icons.enum";
import { TransactionTypeEnum } from "../enums/transaction-type.enum";

export interface CreateTransactionDtoInterface {
  title: string;
  description: string;
  icon: IconsEnum;
  total: number;
  groupId: string;
  owners: ParticipantAmountInterface[];
  debtors: ParticipantAmountInterface[];
  transactionType: TransactionTypeEnum;
}

export interface ParticipantAmountInterface {
  value: number;
  participantId: string;
}
