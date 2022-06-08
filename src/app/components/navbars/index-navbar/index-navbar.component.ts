import { Component, OnInit } from '@angular/core';
// Solid
import {
  faBars
  , faFileAlt
  , faArrowAltCircleDown
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter
  , faLinkedin
  , faGithub
} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-index-navbar',
  templateUrl: './index-navbar.component.html',
  styleUrls: ['./index-navbar.component.css']
})
export class IndexNavbarComponent implements OnInit {
  // Icons
  faBars = faBars;
  faFileAlt = faFileAlt;
  faArrowAltCircleDown = faArrowAltCircleDown;

  // brands
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  // Items
  navbarOpen = false;
  constructor() { }

  ngOnInit() {
  }

  setNavbarOpen() {
    this.navbarOpen = true;
  }

}
