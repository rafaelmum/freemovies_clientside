import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { UserProfile } from '../model/user-profile';
import { Feedback } from '../model/feedback';
import { PointsService } from '../service/points.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'buy-points',
  template: `
    <div>
        <h3>
            Buy Points
        </h3>
        <span>$2 = 10 points = 1 movie</span>
        <input type='text' [name]='inputValue'>
        <button>Buy</button>
    </div>
  `,
  styles: [],
  providers: [PointsService],
})
export class BuyPointsComponent implements OnInit {
  userProfile: UserProfile;
  inputValue: number;

  constructor (private pointsService: PointsService) {}

  ngOnInit (): void {
    this.pointsService.buyPoints(1, 1);
  }
}