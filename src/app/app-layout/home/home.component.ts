import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  assets: string = 'assets/img/';
  @Input() checked: boolean = false;
  @Output() onChecked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(): void {
    this.checked = false;
    this.onChecked.emit(this.checked);
  }

}
