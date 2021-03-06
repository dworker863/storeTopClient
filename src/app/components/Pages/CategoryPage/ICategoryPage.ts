import { IGood } from '../../../commonInterfaces/IGood';
import { IUser } from '../../../commonInterfaces/IUser';

export interface ICategoryPage {
  goods: IGood[];
  title: string;
  user: IUser;
}
