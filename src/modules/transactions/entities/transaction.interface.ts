import { IconsEnum } from '../../../shared/enums/icons.enum';
import { ParticipantInterface } from '../../participants/entities/participant.interface';
import { GroupInterface } from '../../groups/entities/group.interface';
import { UserInterface } from '../../users/entities/UserInterface';

export interface TransactionInterface {
  id: string;
  title: string;
  description: string;
  total: number;
  icon: IconsEnum;
  isSettled: boolean;
  groupId: string;
  creatorId: string;

  owners?: ParticipantInterface[];
  creator?: ParticipantInterface;
  group?: GroupInterface;
  creators?: UserInterface;
}
