import { ParticipantInterface } from '../../participants/entities/participant.interface';
import { IconsEnum } from '../../../shared/enums/icons.enum';
import { ParticipantInvation } from '../../participants/entities/participant-invation';

export interface GroupInterface {
  id: string;
  title: string;
  description: string;
  icon: IconsEnum;
  ownerId: string;
  owner?: ParticipantInterface;
  participants?: ParticipantInterface[];
  groupInvitations?: ParticipantInvation[];
  createdAt: Date;
  updatedAt: Date;
}
