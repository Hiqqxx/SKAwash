import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import MaquinaLista from '../../../assets/maquinas.json'; 
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup';

@Component({
  selector: 'app-machine',
  standalone: true,
  imports: [CommonModule, PopupComponent],
  templateUrl: './machine.html',
  styleUrl: './machine.scss',
})
export class MachineComponent implements OnInit {
  maquina: any = null;

  etapaLavagemActive: boolean = true;
  etapaEnxagueActive: boolean = false;
  etapaCentrifugacaoActive: boolean = false;
  etapaFinalizadoActive: boolean = false;


  popInicio: boolean = true;
  pop15min: boolean = false;
  popFim: boolean = false;
  popIndisponivel: boolean = false;
  aviso15enviado: boolean = false;

  tempoRestante: number = 30 * 60;
  intervalo: any;

  constructor(private route: ActivatedRoute, private router: Router, private cd: ChangeDetectorRef) {
    
  }
   onHome() {
    this.router.navigate(['/home']);
  };
//forma de puxar o id da máquina e mudar a URL.
  ngOnInit(): void {
    this.startTimer();
    const idDaUrl = this.route.snapshot.paramMap.get('id');
    if (idDaUrl) {
      this.maquina = MaquinaLista.find(item => item.id === Number(idDaUrl));
    }

    if (this.maquina?.status === "MANUTENÇÃO" || this.maquina?.status === "OCUPADA"){
      this.popInicio = false;
      this.popIndisponivel = true;
    }
  }

  //função para a iniciação da lavagem
  iniciarLavagem(){
    this.popInicio = false;
    this.startTimer();

    //Tentativa de fazer as bolinhas das etapas colorirem conforme o tempo passa.
    if(this.tempoRestante === 20 * 60){
      this.etapaEnxagueActive = true;
    }
    if(this.tempoRestante === 10 * 60){
      this.etapaCentrifugacaoActive = true;
    }
    if(this.tempoRestante === 1){
      this.etapaFinalizadoActive = true;
    }
  }
  cancelarInicio(){
    this.router.navigate(['/home']);
  }
  fecharAviso15(){
    this.pop15min = false;
  }
  fecharFim(){
    this.popFim = false;
  }
  voltarParaInicio(){
    this.router.navigate(['/home'])
  }
  fecharIndisponivel(){
    this.router.navigate(['/home'])
  }

  startTimer(){
    if(this.intervalo) return;

    this.intervalo = setInterval(() =>{
      if(this.tempoRestante > 0){
        this.tempoRestante--;

        if(this.tempoRestante <= 15 * 60 && !this.aviso15enviado){
          this.pop15min = true;
          this.aviso15enviado = true;
        }
        this.cd.detectChanges();
      }else{
        //aqui eu tentei fazer o popup da finalização funcionar, porém das primeiras tentativas não funcionou, não consigo afirmar com toda certeza que vai estar funcionando.
        
        if(this.tempoRestante === 0 * 60){
          this.popFim = true;
        }
        clearInterval(this.intervalo);
        if(!this.popFim){
          this.popFim = true
        }
      }
  },1000);
}
//função para passar o tempo para minutos conforme o figma
  formatarTempo(): string {
  const minutos = Math.floor(this.tempoRestante / 60);
  const segundos = this.tempoRestante % 60;

  return `${minutos} Min`;
}
}