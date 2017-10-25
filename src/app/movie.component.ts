import { Component} from '@angular/core';
import {Movie } from './movie';
import {MovieService } from './movie.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-template.html'   
  ,
  styles: []
})
export class MovieComponent {
   user:String= 'sami';
   searchtitle: String='';
   movietoadd: Movie = new Movie();
   movietodisplay: Movie[]=[];
   moviesearched: Movie[]=[]; 
   results: string[];
   constructor(private http: HttpClient) {}
   
   
    

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
                this.moviesearched.push(movie);
            }
        });
        this.movietodisplay= this.moviesearched;
    }

    displayall(){
        this.http.get('http://localhost:3001/movies').subscribe(data => {
            // Read the result field from the JSON response.
            console.log(data);
        });
    }
}
