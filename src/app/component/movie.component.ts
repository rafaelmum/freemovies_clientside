import { Component} from '@angular/core';

import {MovieService } from '../service/movie.service';
import {Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from '../service/auth.service';
import { UserProfileService } from '../service/user-profile.service';

@Component({
  selector: 'movie-list',
  templateUrl: '../view/movie-template.html',
  styles: [],
  providers: [UserProfileService]
})
export class MovieComponent {
   displaysearch: boolean= false;
   searchtitle: string='';
   movietoadd: Movie = new Movie();
   movietodisplay: Movie[] = [];
   movietodisplay1 = [];
   moviesearched: Movie[]=[]; 
  
   constructor(private http: HttpClient, private movieservice: MovieService,public authService: AuthService,
        private userProfileService: UserProfileService) {}
   
   
    

   

    find(){
        this.http.get('http://localhost:3001/movie/movies/' + this.searchtitle).map((arr)=> {
            this.movietodisplay1 = JSON.parse(JSON.stringify(arr));
         }).subscribe();
        
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
        this.displaysearch=true;
        this.http.get('http://localhost:3001/movie/movies').map((arr)=> {
           this.movietodisplay1 = JSON.parse(JSON.stringify(arr));
        }).subscribe();
        
    }

    rent(movid){
        console.log("client"+movid + "  "+ this.authService.currentUser.username);
        this.http.get('http://localhost:3001/movie/update/' + this.authService.currentUser.username + "/" + movid  ).map((arr)=> {
            this.movietodisplay1 = JSON.parse(JSON.stringify(arr));
        }).subscribe();        
        
        // Update users points.
        this.userProfileService.updateUserPoints(this.authService.currentUser.username, movid).subscribe(res => {
            res.json();
        });
    }

}
