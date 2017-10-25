import { IUser } from '../user/user';
import { Feedback } from './feedback';
//import { MovieDisk } from './movie-disk';
import { Movie } from '../movie';

export class UserProfile {
    user: IUser;
    //movieDiskGivenArray: MovieDisk[];
    //movieDiskReceivedArray: MovieDisk[];
    movieDiskGivenArray: Movie[];
    movieDiskReceivedArray: Movie[];
    feedbackGivenArray: Feedback[];
    feedbackReceivedArray: Feedback[];
}