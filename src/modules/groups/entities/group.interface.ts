import { ParticipantInterface } from '../../participants/entities/participant.interface';
import { IconsEnum } from '../../../shared/enums/icons.enum';
import { ParticipantInvation } from '../../participants/entities/participant-invation';
import { UserInterface } from '../../users/entities/UserInterface';

export interface GroupInterface {
  id: string;
  title: string;
  description: string;
  icon: IconsEnum;
  ownerId: string;
  participantsCount: number;
  owner?: UserInterface;
  participants?: ParticipantInterface[];
  groupInvitations?: ParticipantInvation[];
  createdAt: Date;
  updatedAt?: Date;
}
