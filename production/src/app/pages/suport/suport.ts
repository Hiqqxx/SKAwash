import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [FormsModule, CommonModule, PopupComponent],
  templateUrl: './suport.html',
  styleUrl: './suport.scss',
})
export class SuportComponent {

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

  popSuporte: boolean = false;
  mensagem: string = ''
  
  enviarMensagem(){
    if(!this.mensagem.trim()) return;

    this.popSuporte = true;
    this.mensagem = ''
  }
  fecharPopSuporte(){
    this.popSuporte = false
  }
}

