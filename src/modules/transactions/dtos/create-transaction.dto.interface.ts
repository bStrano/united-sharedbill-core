export interface CreateTransactionDtoInterface {
  title: string;
  description: string;
  total: number;
  groupId: string;
  owners: ParticipantAmountInterface[];
  debtors: ParticipantAmountInterface[];
}

export interface ParticipantAmountInterface {
  value: number;
  participantId: string;
}
