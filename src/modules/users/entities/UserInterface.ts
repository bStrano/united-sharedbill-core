import { TransactionInterface } from '../../transactions/entities/transaction.interface';
import { GroupInterface } from '../../groups/entities/group.interface';
import { ParticipantInterface } from '../../participants/entities/participant.interface';

export interface UserInterface {
  id: string;
  name: string;
  email: string;
  oauthId: string;
  avatar?: string;
  password: string;
  groups?: GroupInterface[];
  participants?: ParticipantInterface[];
  transactionsCreatedByMe?: TransactionInterface[];
}
