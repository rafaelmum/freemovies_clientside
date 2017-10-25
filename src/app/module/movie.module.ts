import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {  HttpModule } from '@angular/http';


import {MovieComponent }  from '../component/movie.component';
import {AddMovie} from '../component/addmovie.component';
import {MovieService } from '../service/movie.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [  
    MovieComponent,
    AddMovie  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
    
  ],
  exports:[MovieComponent],
  providers: [MovieService]
})
export class MovieModule { }
