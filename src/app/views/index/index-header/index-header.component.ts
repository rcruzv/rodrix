import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.css']
})
export class IndexHeaderComponent implements OnInit {
  dataList: { id: number, title: string, body: string }[] = [];
  constructor() { }

  ngOnInit() {
  }

  loadItems() {
    setTimeout(() => {
      this.dataList = [{
        id: 1,
        title: 'qui dignissimos debitis',
        body: 'Ut perferendis delectus que error vel nemo. Quam deserunt.'
      }, {
        id: 2,
        title: 'numquam voluptas culpa',
        body: ' Porro sed consequuntur porro ipsum harum. Dignissimos qui officiis.'
      }, {
        id: 3,
        title: 'repudiandae molestiae illum',
        body: 'Vel eveniet accusamus reprehenderit dolor. Vel qui porro ex quidem.'
      }, {
        id: 4,
        title: 'nobis id repellat',
        body: 'Quam itaque recusandae. Autem nostrum aut nemo alias eos dicta autem .'
      }, {
        id: 5,
        title: 'assumenda voluptates voluptatibus',
        body: 'Omnis exercitationem est facilis minima molestiae laudantium.'
      }];
    }, 2000);
  }
}
