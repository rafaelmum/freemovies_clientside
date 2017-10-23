import { Component } from '@angular/core';
import {Movie } from './movie'
@Component({
  selector: 'movie-list',
  template: `    
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Movie Rent</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li (click)="movietodisplay= listMovie" ><a href="#">Movies</a></li>
      <li ><a href="#">Add Movies</a></li>    
          
    </ul>
  </div>
</nav>
<form #search="ngForm" (ngSubmit)="find(search)">
<div class="row">
<div class="col-lg-6">
  <div class="input-group">
    
  </div>
</div>
<div class="col-lg-6">
  <div class="input-group">
    <input [(ngModel)]= "searchtitle"  name="search" #search="ngModel" id="movie_title"  type="text" class="form-control" placeholder="Search for...">
    <span class="input-group-btn">
      <button class="btn btn-secondary"  (click)="find()" type="button">Go!</button>
    </span>
  </div>
</div>
</div> 
</form>
       
    <div class="container">
    <table class="table" *ngIf="movietodisplay.length > 0">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Year</th>
        <th>Duration</th>
        <th>Owner</th>
        <th>Rent</th>
      </tr>
      <tr *ngFor="let movie of movietodisplay">
      <td>{{movie.id}}</td>
      <td>{{movie.title}}</td>
      <td>{{movie.year}}</td>
      <td>{{movie.duration}}</td>
      <td>{{movie.owner}}</td>
      <td><a href="">Rent</a></td>
     </tr>
    </table>
    </div>

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

    
  `,
  styles: []
})
export class MovieComponent {
   user:String= 'sami';
   searchtitle: String='';
   movietoadd: Movie = new Movie();
   movietodisplay: Movie[]=[];
   listMovie: Movie[] = [
    { 
        id: 1,
        title: 'gameofthrone',
        year: 2014,
        duration: 1.5,
        owner: 'david'
    },
    {
        id: 2,
        title: 'Titanic',
        year: 2003,
        duration: 1.8,
        owner: 'cris'
    },
    {
        id: 3,
        title: 'Titanic',
        year: 2008,
        duration: 2.1,
        owner: 'jery'
    },
    {
        id: 4,
        title: 'Revenant',
        year: 2016,
        duration: 1.7,
        owner: 'jennifer'
    }
    
      ];

      submit(form){
        this.movietoadd.owner =  this.user;
        this.movietoadd.id=  this.listMovie.length + 1;
        this.listMovie.push(this.movietoadd)
    }

    find(form){
        console.log(this.searchtitle);
        this.listMovie.forEach(movie=>{
            if(movie.title==this.searchtitle){
                this.movietodisplay.push(movie);
            }
        });
    }
}
