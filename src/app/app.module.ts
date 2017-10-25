import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {  HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {MovieModule} from './module/movie.module'
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MovieModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
