import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir: EventEmitter<any> = new EventEmitter<any>();

  valor?: number;
  destino?: string;

  constructor(private service: TransferenciaService, private router: Router) { }


  ngOnInit() {
  }

  transferir() {
    const t: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(t).subscribe(
      (resultado) => {

        this.limpar();
        this.router.navigateByUrl('extrato')
      },
      (error) => console.error(error)

    );
  }

  limpar() {
    this.valor = undefined;
    this.destino = undefined;
  }
}
