import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent }
        
    ])
  ],
  declarations: [    
    RegisterComponent,
  ],
  providers: [
    AuthService,
    UserService,
  ]
})
export class UserModule {}