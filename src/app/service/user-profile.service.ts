import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from '../service/auth.service';

@Injectable()
export class UserProfileService {
    constructor(private http: Http, public authService: AuthService) {}

    getUser() {
        return this.http.get('http://localhost:3001/userprofile/user/' + this.authService.currentUser.username).do(res => {
            res.json();
        });
    }

    getMovieGivenArray() {
        return this.http.get('http://localhost:3001/userprofile/movieGiven/' + this.authService.currentUser.username).do(res => {
            res.json();
        });
    }

    getMovieReceivedArray() {
        return this.http.get('http://localhost:3001/userprofile/movieReceived/' + this.authService.currentUser.username).do(res => {
            res.json();
        });
    }
}