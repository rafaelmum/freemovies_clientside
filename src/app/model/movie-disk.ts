import { Movie } from '../model/movie';
import { IUser } from '../user/user';

export class MovieDisk {
    movie: Movie;
    user: IUser;
    date: Date;
}