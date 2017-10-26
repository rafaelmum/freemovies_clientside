import { IUser } from '../user/user';
import { Movie } from '../model/movie';

export class UserProfile {
    user: IUser;
    movieGivenArray: Movie[];
    movieReceivedArray: Movie[];
}