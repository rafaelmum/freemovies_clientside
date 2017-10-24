import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../services/toastr.service'

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {

  constructor(private fb: FormBuilder, 
    private router: Router,
    private toastr: ToastrService) {
  }

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  loginForm: FormGroup = this.fb.group({
    username: this.username,
    password: this.password,
  });


  loginUser(formdata:any): void {
  }
  
}
