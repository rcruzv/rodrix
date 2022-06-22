import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTranferir: EventEmitter<any> = new EventEmitter<any>();

  valor?: number;
  destino?: string;

  constructor() {
  }

  ngOnInit() {
  }

  transferir() {
    this.aoTranferir.emit({ valor: this.valor, destino: this.destino });
    this.limpar();
  }

  limpar() {
    this.valor = undefined;
    this.destino = undefined;
  }
}
