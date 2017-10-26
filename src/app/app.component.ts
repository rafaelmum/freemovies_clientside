import { Component } from '@angular/core';
import {MovieComponent} from './component/movie.component';

import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  constructor( public authService: AuthService, ) { }
}
