import { Component } from '@angular/core';

@Component({
  
  selector: 'add-movie',
  template: `
    <div class="container pagecontainer">
      <form #form="ngForm" (ngSubmit)="submit(form)">
      
          <div class="form-group">
          <label for="movie_title">Movie Title</label>
          <input [(ngModel)]= "movietoadd.title"  name="movie_title" #MovieTitle="ngModel" id="movie_title" type="text" class="form-control">         
          </div> 
          <div class="form-group">
          <label for="movie_year">Movie Year</label>
          <input [(ngModel)]= "movietoadd.year"  name="movie_year" #MovieYear="ngModel" id="year" type="text" class="form-control">         
          </div> 
          <div class="form-group">
          <label for="movie_duration">Movie Duration</label>
          <input [(ngModel)]= "movietoadd.duration"  name="movie_duration" #MovieDuration="ngModel" id="duration" type="text" class="form-control">         
          </div>  
          
          <button class="btn btn-primary">Add Movie</button>
      </form >
      </div>
      <div class="container">
      `,
  styles: []
})
export class AddMovie {

    
}
