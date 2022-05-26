import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  @Input() checked: Boolean = false;

  constructor() { }
  ngOnInit(): void {
  }

  closeMenu() {
    this.checked = false;
  }
}
