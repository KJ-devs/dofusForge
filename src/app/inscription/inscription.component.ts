import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { PasswordValidationService } from '../services/authentification/password-validation.service';
import { AbstractControl } from '@angular/forms';
import { AuthService } from '../services/authentification/auth.service';
import { UserService } from '../services/database/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  isValidFormSubmitted = false;
  constructor(private FormBuilder: FormBuilder,private router: Router,private pvs: PasswordValidationService,private auth: AuthService,private userService: UserService) { }
  
  registerForm = this.FormBuilder.group(
    {
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  },
  {
    validator: this.pvs.passwordMatchValidator('password', 'confirmPassword')
  });

  get email(): AbstractControl | null {
    return this.registerForm.get('email');
  }
  get username(): AbstractControl | null  {
    return this.registerForm.get('username');
  }
  get password(): AbstractControl | null  {
    return this.registerForm.get('password');
  }
  get confirmPassword(): AbstractControl | null  {
    return this.registerForm.get('confirmPassword');
  }
  async onSubmit() {
    if(this.registerForm.valid) {
      this.isValidFormSubmitted = true;
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      try {
        const authResult = await this.auth.createNewUser(email, password);
        const user: User = {
          id: authResult.user?.uid,
          email: this.registerForm.get('email')?.value,
          username: this.registerForm.get('username')?.value,
          password: this.registerForm.get('password')?.value,
        };
        await this.userService.newUser(user);
        this.router.navigate(['/Connexion']);

      } catch (error) {
        console.log(error);
      }
    }
  }
  ngOnInit(): void {
  }

}
