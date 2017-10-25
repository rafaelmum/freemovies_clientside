import { Injectable } from '@angular/core';
import { UserProfile } from '../model/user-profile';

@Injectable()
export class UserProfileService {
    getUserProfile(userId: number): UserProfile {
        
        // backend call.
        return (new UserProfile());
    }
}