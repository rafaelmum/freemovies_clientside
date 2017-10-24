import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { UserProfile } from '../model/user-profile';
import { Feedback } from '../model/feedback';
import { UserProfileService } from '../service/user-profile.service';
import { Observable } from 'rxjs/Observable';

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
  styles: [],
  providers: [UserProfileService],
})
export class DahsBoardComponent implements OnInit {
  title = 'app';
  userProfile: UserProfile;
  postedMovies: Movie[];
  gottenMovies: Movie[];
  feedbacks: Feedback[];

  //constructor (private userProfileService: UserProfileService, private movieService: MovieService) {}
  constructor (private userProfileService: UserProfileService) {}

  ngOnInit (): void {
    //(new Observable(this.userProfileService.getUserProfile())).subscribe(
        //userProfile => this.userProfile = userProfile);
    //postedMovies = movieService.getPostedMoviesByUser(userProfile.getId);
    //gottenMovies = movieService.getGottenMoviesByUser();
  }
}