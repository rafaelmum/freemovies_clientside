import { IUser } from '../model/user';
import { Movie } from '../model/movie';

export class UserProfile {
    user: IUser;
    movieGivenArray: Movie[];
    movieReceivedArray: Movie[];
}