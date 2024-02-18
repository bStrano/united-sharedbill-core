export interface ParticipantWithBalance {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
  balance: number;
  credit: number;
  debit: number;
}
