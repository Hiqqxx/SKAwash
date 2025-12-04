import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class CreateComponent {
 constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/login']);
  };
   onHome() {
    this.router.navigate(['/home']);
  };
}
