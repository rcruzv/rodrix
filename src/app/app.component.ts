import { Component } from '@angular/core';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class AppComponent {
  title = 'rodrix';

  constructor(private service: TransferenciaService) {
  }

  transferir($event: any) {
    this.service.adicionar($event);
  }
}
