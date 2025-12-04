import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  onCreate() {
    this.router.navigate(['/create']);
  };
   onHome() {
    this.router.navigate(['/home']);
  };
}


