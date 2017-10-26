import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { UserProfile } from '../model/user-profile';
import { IUser } from '../model/user';
import { Feedback } from '../model/feedback';
import { UserProfileService } from '../service/user-profile.service';
import { DashboardMoviePipe } from '../pipe/dashboard-movie.pipe';
import { DashboardMovieDirective } from '../directive/dashboard-movie.directive';
import { AuthService } from '../service/auth.service';

import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dashboard',
  template: `
    <h1>
        {{userProfile.user.firstname}} - Dashboard
        <br>
        Points: {{userProfile.user.points}}
    </h1>
    <div>
        <h3>
            Movies Given
        </h3>
        <div *ngFor='let movieGiven of userProfile.movieGivenArray'>
            <span>{{movieGiven.title}} - {{movieGiven.year}}</span>
            <!--<span dashboardMovieDirective>{{movieGiven.feedback | dashboard_movie_pipe}}</span>-->
        </div>
        <h3>
            Movies Received
        </h3>
        <div *ngFor='let movieReceived of userProfile.movieReceivedArray'>
            <span>{{movieReceived.title}} - {{movieReceived.year}}</span>
            <!--<span dashboardMovieDirective>{{movieReceived.feedback | dashboard_movie_pipe}}</span>-->
        </div>
    </div>
  `,
  styles: [],
  providers: [UserProfileService],
})
export class DashboardComponent implements OnInit {
  userProfile: UserProfile = new UserProfile();

  constructor (private userProfileService: UserProfileService, public authService: AuthService,
    private http: Http) {}

  ngOnInit (): void {
    console.log('username: ' + this.authService.currentUser.username);
    this.userProfile = this.userProfileService.getUserProfile('');
    //this.userProfile = this.userProfileService.getUserProfile(this.authService.currentUser.username);

    this.http.get('http://localhost:3001/userprofile/user/' + this.authService.currentUser.username).subscribe(res => {
        this.userProfile.user = res.json();
     });

     this.http.get('http://localhost:3001/userprofile/movieGiven/' + this.authService.currentUser.username).subscribe(res => {
        this.userProfile.movieGivenArray = res.json();
     });

     this.http.get('http://localhost:3001/userprofile/movieReceived/' + this.authService.currentUser.username).subscribe(res => {
        this.userProfile.movieReceivedArray = res.json();
     });
  }
}