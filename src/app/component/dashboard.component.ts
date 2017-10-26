import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { UserProfile } from '../model/user-profile';
import { Feedback } from '../model/feedback';
import { UserProfileService } from '../service/user-profile.service';
import { DashboardMoviePipe } from '../pipe/dashboard-movie.pipe';
import { DashboardMovieDirective } from '../directive/dashboard-movie.directive';

@Component({
  selector: 'app-root', //dashboard
  template: `
    <h1>
        {{userProfile.user.firstname}} - Dashboard
        <br>
        Points: {{userProfile.user.points}}
    </h1>
    <div>
        <button>Movies</button>
        <button>Buy Points</button>
        <button>Sign Out</button>
    </div>
    <div>
        <h3>
            Movies Given
        </h3>
        <div *ngFor='let movieGiven of userProfile.movieGivenArray'>
            <span>{{movieGiven.title}} - {{movieGiven.year}}</span>
            <span dashboardMovieDirective>{{movieGiven.feedback | dashboard_movie_pipe}}</span>
        </div>
        <h3>
            Movies Received
        </h3>
        <div *ngFor='let movieReceived of userProfile.movieReceivedArray'>
            <span>{{movieReceived.title}} - {{movieReceived.year}}</span>
            <span dashboardMovieDirective>{{movieReceived.feedback | dashboard_movie_pipe}}</span>
        </div>
    </div>
  `,
  styles: [],
  providers: [UserProfileService],
})
export class DashboardComponent implements OnInit {
  userProfile: UserProfile;

  constructor (private userProfileService: UserProfileService) {}

  ngOnInit (): void {
    this.userProfile = this.userProfileService.getUserProfile(1);
  }
}