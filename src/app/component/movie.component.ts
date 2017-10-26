import { Component} from '@angular/core';

import {MovieService } from '../service/movie.service';
import {Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from '../user/auth.service';
@Component({
  selector: 'movie-list',
  templateUrl: '../view/movie-template.html',
  styles: []
})
export class MovieComponent {
   user:string= 'sami';
   searchtitle: String='';
   movietoadd: Movie = new Movie();
   movietodisplay: Movie[] = [];
   movietodisplay1 = [];
   moviesearched: Movie[]=[]; 
  
   constructor(private http: HttpClient, private movieservice: MovieService,public authService: AuthService) {}
   
   
    

   

    find(){
        console.log("formmmmmmmmmmmmmmm");
        this.movietodisplay1.forEach(movie=>{
            if(movie.title==this.searchtitle){
                this.moviesearched.push(movie);
                
            }
        });
        this.movietodisplay1= this.moviesearched;
    }
    submitForm(form){
        let movieinstance: Movie=new Movie();
        movieinstance.title=form.value.title;
        movieinstance.year=form.value.year;
        movieinstance.duration=form.value.duration;
        movieinstance.owner=this.authService.currentUser.username;        
        this.http.post('http://localhost:3001/movie/add', movieinstance).subscribe();
        
    }
    displayall(){         
        
        this.http.get('http://localhost:3001/movie/movies').map((arr)=> {
           this.movietodisplay1 = JSON.parse(JSON.stringify(arr));
        }).subscribe();
        
    }

}
