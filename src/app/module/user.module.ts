import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../component/register.component';
import { PasswordComponent } from '../component/password.component';
import { ProfileComponent } from '../component/profile.component';
import { LogoutComponent } from '../component/logout.component';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from '../service/auth-guard.service';
import { UserService } from '../service/user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent },
      { path: 'password', canActivate: [ AuthGuard], component: PasswordComponent },
      { path: 'profile', canActivate: [ AuthGuard], component: ProfileComponent },
      { path: 'logout', canActivate: [ AuthGuard], component: LogoutComponent }
        
    ])
  ],
  declarations: [    
    RegisterComponent,
    PasswordComponent,
    LogoutComponent,
    ProfileComponent
  ],
  providers: [
    AuthService,
    UserService,
  ]
})
export class UserModule {}