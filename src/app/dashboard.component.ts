import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { UserProfile } from './user-profile';
import { Feedback } from './feedback';

@Component({
  selector: 'dashboard',
  template: `
    <h1>
        Welcome {{userProfile.name}}!
        Points: {{userProfile.points}}!
    </h1>
    <div>
        <h3>
            Posted Movies
        </h3>
        <div *ngFor='let postedMovie of postedMovies'>
            {{postedMovie.title}} - {{postedMovie.year}}
        </div>
        <h3>
            Gotten Movies
        </h3>
        <div *ngFor='let gottenMovie of gottenMovies'>
            {{gottenMovie.title}} - {{gottenMovie.year}}
        </div>
    </div>
    <div>
        <h3>
            Feedbacks Received
        </h3>
        <div *ngFor='let feedback of feedbacks'>
            {{feedback.userId}} - {{feedback.text}}
        </div>
    </div>
  `,
  styles: []
})
export class DahsBoardComponent implements OnInit {
  title = 'app';
  userProfile: UserProfile;
  postedMovies: Movie[];
  gottenMovies: Movie[];
  feedbacks: Feedback[];

  //constructor (userProfileService: UserProfileService, movieService: MovieService) {}

  ngOnInit () {
    //userProfile = userProfileService.getUserProfile();
    //postedMovies = movieService.getPostedMoviesByUser(userProfile.getId);
    //gottenMovies = movieService.getGottenMoviesByUser();
  }
}