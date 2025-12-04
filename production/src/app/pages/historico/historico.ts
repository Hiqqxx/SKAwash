import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  imports: [CommonModule],
  templateUrl: './historico.html',
  styleUrls: ['./historico.scss']
})
export class HistoricoComponent{
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

