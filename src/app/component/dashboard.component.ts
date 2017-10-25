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
        Welcome {{userProfile.user.name}}!
        Points: {{userProfile.user.points}}!
    </h1>
    <div>
        <h3>
            Movies Given
        </h3>
        <div *ngFor='let movieDiskGiven of userProfile.movieDiskGivenArray'>
            {{movieDiskGiven.title}} - {{movieDiskGiven.year}}
        </div>
        <h3>
            Movies Received
        </h3>
        <div *ngFor='let movieDiskReceived of userProfile.movieDiskReceivedArray'>
            {{movieDiskReceived.title}} - {{movieDiskReceived.year}}
        </div>
    </div>
    <div>
        <h3>
            Feedbacks Given
        </h3>
        <div *ngFor='let feedback of userProfile.feedbackGivenArray'>
            {{feedback.userTo.firstname}} - {{feedback.userTo.feedbackType}} - {{feedback.userTo.text}}
        </div>
        <h3>
            Feedbacks Received
        </h3>
        <div *ngFor='let feedback of userProfile.feedbackReceivedArray'>
            {{feedback.userFrom.firstname}} - {{feedback.userFrom.feedbackType}} - {{feedback.userFrom.text}}
        </div>
    </div>
  `,
  styles: [],
  providers: [UserProfileService],
})
export class DahsBoardComponent implements OnInit {
  title = 'app';
  userProfile: UserProfile;

  constructor (private userProfileService: UserProfileService) {}

  ngOnInit (): void {
    this.userProfile = this.userProfileService.getUserProfile(1);
  }
}