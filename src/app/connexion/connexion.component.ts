import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentification/auth.service';
import { FormBuilder,Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private auth: AuthService,private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
    loginForm = this.FormBuilder.group(
    {
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }
  get username(): AbstractControl | null  {
    return this.loginForm.get('password');
  }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.auth.Connexion(email,password);
    
  }
}
