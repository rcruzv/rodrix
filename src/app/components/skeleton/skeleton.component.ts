import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  host: {
    'class': 'animate-pulse bg-gray-200'
  },
  template: '',
})
export class SkeletonComponent implements OnInit {

  className: string = '';
  constructor(private host: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    const host = this.host.nativeElement;

    if (this.className) {
      host.classList.add(...this.className);
    }
  }

}
