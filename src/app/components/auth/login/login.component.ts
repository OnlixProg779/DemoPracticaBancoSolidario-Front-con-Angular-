import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsFormsService } from 'src/app/shared/service/validators-forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  returnUrl = '/dashboard/default';
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public validatorService: ValidatorsFormsService
  ) {

  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', {
        validators:[Validators.required]
      }],
      password: ['', {
        validators:[Validators.required]
      }],
    });
  }

  ngOnInit() {
    this.createLoginForm();
  }

  onSubmit() {}

  login(userModel: any) {
    userModel = this.loginForm.value;
    this.router.navigateByUrl(this.returnUrl);
  }
  
  
}
