import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { UserProfile } from '../model/user-profile';
import { Feedback } from '../model/feedback';
import { UserProfileService } from '../service/user-profile.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root', //dashboard
  template: `
    <h1>
        {{userProfile.user.firstname}}'s Dashboard
        <br>
        Points: {{userProfile.user.points}}
    </h1>
    <div>
        <button>Movies</button>
        <button>Donate</button>
        <button>Sign Out</button>
    </div>
    <div>
        <h3>
            Movies Given
        </h3>
        <div *ngFor='let movieDiskGiven of userProfile.movieDiskGivenArray'>
            {{movieDiskGiven.title}} - {{movieDiskGiven.year}} [{{movieDiskGiven.feedback.feedbackType}} - "{{movieDiskGiven.feedback.text}}"]
        </div>
        <h3>
            Movies Received
        </h3>
        <div *ngFor='let movieDiskReceived of userProfile.movieDiskReceivedArray'>
            {{movieDiskReceived.title}} - {{movieDiskReceived.year}} [{{movieDiskReceived.feedback.feedbackType}} - "{{movieDiskReceived.feedback.text}}"]
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