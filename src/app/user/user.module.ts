import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { PasswordComponent } from './password.component';
import { LogoutComponent } from './logout.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent },
      { path: 'password', canActivate: [ AuthGuard], component: PasswordComponent },
      { path: 'logout', canActivate: [ AuthGuard], component: LogoutComponent }
        
    ])
  ],
  declarations: [    
    RegisterComponent,
    PasswordComponent,
    LogoutComponent
  ],
  providers: [
    AuthService,
    UserService,
  ]
})
export class UserModule {}