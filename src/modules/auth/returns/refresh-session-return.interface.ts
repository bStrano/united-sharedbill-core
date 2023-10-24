import { UserInterface } from '../../users/entities/UserInterface';

export interface RefreshSessionReturnInterface {
  accessToken: string;
  refreshToken: string;
  user: UserInterface;
}
