import { Component, OnInit } from '@angular/core';
import MenuItems from './nav.json'
import { NavModel } from './nav.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // data
  Menu: NavModel[];

  constructor() {
    this.Menu = JSON.parse(JSON.stringify(MenuItems.Menu));
    console.log(this.Menu);
  }

  ngOnInit() {

  }

}
