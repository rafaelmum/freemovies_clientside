import { Component} from '@angular/core';

import {MovieService } from '../service/movie.service';
import {Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'movie-list',
  templateUrl: '../view/movie-template.html',
  styles: []
})
export class MovieComponent {
   user:String= 'sami';
   searchtitle: String='';
   movietoadd: Movie = new Movie();
   movietodisplay: Movie[] = [];
   movietodisplay1 = [];
   moviesearched: Movie[]=[]; 
   results: string[];
   constructor(private http: HttpClient, private movieservice: MovieService) {}
   
   
    

   

    find(form){
        console.log(this.searchtitle);
        this.movietodisplay1.forEach(movie=>{
            if(movie.title==this.searchtitle){
                this.moviesearched.push(movie);
            }
        });
        this.movietodisplay1= this.moviesearched;
    }

    displayall(){ 
        
        this.movieservice.hi();
        this.http.get('http://localhost:3001/movies').map((arr)=> {
           this.movietodisplay1 = JSON.parse(JSON.stringify(arr));
        }).subscribe();
        //this.movietodisplay= this.listMovie;
        
        
        
        
    }
}
