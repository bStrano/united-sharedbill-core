import { IconsEnum } from '../../../shared/enums/icons.enum';
import { ParticipantInterface } from '../../participants/entities/participant.interface';
import { GroupInterface } from '../../groups/group.interface';

export interface TransactionInterface {
  id: string;
  title: string;
  description: string;
  total: number;
  icon: IconsEnum;
  isSettled: boolean;
  groupId: string;
  ownedId: string;
  creatorId: string;

  owner?: ParticipantInterface;
  creator?: ParticipantInterface;
  group?: GroupInterface;
}
