import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import  MaquinaLista  from '../../../assets/maquinas.json';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
lista = MaquinaLista;
 constructor(private router: Router) {}

  onHome() {
    this.router.navigate(['/home']);
  };
  onSuport(){
    this.router.navigate(['/suport'])
  };
  onMachine(){
    this.router.navigate(['/maquina/id:'])
  };
  onHistorico(){
    this.router.navigate(['/historico'])
  }
}
