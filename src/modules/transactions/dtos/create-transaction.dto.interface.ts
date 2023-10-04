export interface CreateTransactionDtoInterface {
  title: string;
  description: string;
  total: number;
  groupId: string;
  owners: ParticipantAmountInterface[];
  participants: ParticipantAmountInterface[];
}

export interface ParticipantAmountInterface {
  value: number;
  participantId: string;
}
