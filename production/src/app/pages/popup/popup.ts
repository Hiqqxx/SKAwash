import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.html',
  styleUrl: './popup.scss',
})
export class PopupComponent {

  @Input() titulo: string = "";
  @Input() mensagem: string = "";
  @Input() textoOk: string = "Ok";
  @Input() textoCancelar: string = "Cancelar";
  @Input() showCancel: boolean = true

  @Output() confirmar = new EventEmitter<void>();
  @Output() cancelar = new EventEmitter<void>();

  confirmarEmit(){
    this.confirmar.emit();
  }
  cancelarEmit(){
    this.cancelar.emit();
  }
}
