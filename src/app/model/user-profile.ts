import { IUser } from '../user/user';
import { Feedback } from './feedback';
import { MovieDisk } from './movie-disk';

export class UserProfile {
    user: IUser;
    feedbackGivenArray: Feedback[];
    feedbackReceivedArray: Feedback[];
    movieDiskGivenArray: MovieDisk[];
    movieDiskReceivedArray: MovieDisk[];
}