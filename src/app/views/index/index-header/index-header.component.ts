import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.css']
})
export class IndexHeaderComponent implements OnInit {
  isLoading: boolean = false;
  constructor() { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
