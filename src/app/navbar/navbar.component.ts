import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentification/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  token: string | null = localStorage.getItem('token');

  constructor(private router: Router,private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  logout() {
    this.afAuth.signOut();
    localStorage.removeItem('token');
    this.router.navigate(['/Connexion']).then(() => {
      window.location.reload();
    });
    
  }
}
