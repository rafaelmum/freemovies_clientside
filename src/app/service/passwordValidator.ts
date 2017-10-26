import {AbstractControl, ValidationErrors} from '@angular/forms';
import { AuthService } from '../service/auth.service';

export class PasswordValidators {
    
    constructor(private authService: AuthService) {
      }
      
       firstn : String =this.authService.currentUser.firstname;
static passwordCriteria(control: AbstractControl): ValidationErrors | null {
   
//if ((control.value as string).includes(this.firstt)) {
    if ((control.value as string).indexOf(' ') >= 0) {
     
  //   console.log(this.firstt);
        return {cannotContainSpace: true};
        }
        return null;
}
}
