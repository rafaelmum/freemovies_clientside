import { Injectable } from '@angular/core';
import { UserProfile } from '../model/user-profile';

// For mocking.
import { IUser } from '../user/user';
import { Movie } from '../model/movie';
import { Feedback } from '../model/feedback';
import { FeedbackType } from '../model/feedback-type';

@Injectable()
export class UserProfileService {
    getUserProfile(userId: number): UserProfile {
        
        // Mocked backend call.
        let userProfile = new UserProfile();

        // Filling User.
        class User implements IUser {
            firstname = 'Rafael';
            lastname = 'Costa';
            username = 'rlc';
            points = 10;
        }

        let user = new User();

        userProfile.user = user;

        // Filling Movie arrays.
        let movieArray: Movie[] = new Array<Movie>();
        let movie: Movie = new Movie();
        movie.title = 'The Godfather';
        movie.year = 1972;

        let feedback: Feedback = new Feedback();
        feedback.feedbackType = FeedbackType.POSITIVE;
        feedback.text = 'Honest guy. Recommended.';
        feedback.userTo = user;
        feedback.userFrom = user;

        movie.feedback = feedback;

        movieArray.push(movie);

        movie = new Movie();
        movie.title = 'Scarface';
        movie.year = 1980;

        feedback = new Feedback();
        feedback.feedbackType = FeedbackType.NEGATIVE;
        feedback.text = 'Not a good trade.';
        feedback.userTo = user;
        feedback.userFrom = user;

        movie.feedback = feedback;

        movieArray.push(movie);
        
        userProfile.movieGivenArray = movieArray;
        userProfile.movieReceivedArray = movieArray;

        return userProfile;
    }
}