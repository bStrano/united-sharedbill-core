import { IconsEnum } from '../../../../shared/enums/icons.enum';

export interface TransactionTimelineContent {
  id: string;
  title: string;
  total: number;
  createdAt: Date | string;
  isOwner: boolean;
  icon: IconsEnum;
  ownersCount: number;
  userAmount: number;
  owners: {
    name: string;
    amount: number;
  }[];
}
