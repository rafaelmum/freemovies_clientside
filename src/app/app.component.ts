import { Component } from '@angular/core';
import {MovieComponent} from './component/movie.component';

@Component({
  selector: 'app-root',
  template: `
  <movie-list></movie-list>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
