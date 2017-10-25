import { Component } from '@angular/core';
import {MovieComponent} from './component/movie.component';

import { AuthService } from './user/auth.service';

@Component({
  selector: '<movie-list></movie-list>',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  constructor( public authService: AuthService, ) { }
}
