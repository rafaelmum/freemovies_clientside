import { Injectable } from '@angular/core';
import { UserProfile } from '../model/user-profile';

@Injectable()
export class UserProfileService {
    getUserProfile(): UserProfile {
        return (new UserProfile());
    }
}